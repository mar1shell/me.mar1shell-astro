import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ProjectGallery from "../src/components/ProjectGallery/ProjectGallery";
import type { PortfolioProject } from "../src/types/portfolio";

const projects: PortfolioProject[] = [
  {
    id: "web",
    title: "Web project",
    category: "Full-stack",
    summary: "A web app",
    description: "Web implementation details",
    technologies: ["React"],
    links: [
      { label: "Source code", href: "https://github.com/example/web" },
      { label: "Live demo", href: "https://example.com" },
    ],
  },
  {
    id: "systems",
    title: "Systems project",
    category: "Systems",
    summary: "A server",
    description: "Systems implementation details",
    technologies: ["C"],
    links: [],
  },
];

describe("project gallery", () => {
  it("filters categories and restores all projects using keyboard controls", async () => {
    const user = userEvent.setup();
    render(<ProjectGallery projects={projects} />);
    const filters = within(
      screen.getByRole("group", { name: "Filter projects" }),
    );
    const systems = filters.getByRole("button", { name: "Systems" });
    systems.focus();
    await user.keyboard("{Enter}");
    expect(systems).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.queryByRole("link", { name: "Open Web project" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Systems project" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("01 projects");
    const all = filters.getByRole("button", { name: "All work" });
    all.focus();
    await user.keyboard(" ");
    expect(all).toHaveAttribute("aria-pressed", "true");
    expect(systems).toHaveAttribute("aria-pressed", "false");
    expect(
      screen.getByRole("link", { name: "Open Web project" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("02 projects");
    await user.click(filters.getByRole("button", { name: "Full-stack" }));
    expect(
      screen.queryByRole("button", { name: "Systems project" }),
    ).not.toBeInTheDocument();
  });

  it("keeps primary and secondary project links independently accessible", () => {
    render(<ProjectGallery projects={projects} />);
    expect(
      screen.getByRole("link", { name: "Open Web project" }),
    ).toHaveAttribute("href", projects[0].links[0].href);
    for (const name of ["Open Web project", "Source code", "Live demo"]) {
      const link = screen.getByRole("link", { name });
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
    expect(screen.getByRole("link", { name: "Live demo" })).toHaveAttribute(
      "href",
      "https://example.com",
    );
  });

  it("opens and closes unlinked project details by keyboard and synchronizes the summary", async () => {
    const user = userEvent.setup();
    render(<ProjectGallery projects={projects} />);
    const toggle = screen.getByRole("button", { name: "Systems project" });
    const details = document.getElementById(
      toggle.getAttribute("aria-controls")!,
    );
    expect(details).not.toHaveAttribute("open");
    toggle.focus();
    await user.keyboard("{Enter}");
    await waitFor(() =>
      expect(toggle).toHaveAttribute("aria-expanded", "true"),
    );
    expect(details).toHaveAttribute("open");
    expect(screen.getByText("Systems implementation details")).toBeVisible();
    await user.click(details!.querySelector("summary")!);
    await waitFor(() =>
      expect(toggle).toHaveAttribute("aria-expanded", "false"),
    );
    expect(details).not.toHaveAttribute("open");
    toggle.focus();
    await user.keyboard(" ");
    await waitFor(() =>
      expect(toggle).toHaveAttribute("aria-expanded", "true"),
    );
  });

  it("handles an empty portfolio without broken controls", () => {
    render(<ProjectGallery projects={[]} />);
    expect(screen.getByRole("status")).toHaveTextContent("00 projects");
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });
});
