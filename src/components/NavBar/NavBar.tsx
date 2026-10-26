import { useEffect, useRef, useState } from "react";

interface NavItem {
  label: string;
  href: string;
  number: string;
}
interface Props {
  items: NavItem[];
  name: string;
  username: string;
}

export default function NavBar({ items, name, username }: Props) {
  const [active, setActive] = useState("");
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting);
        if (current) setActive(`#${current.target.id}`);
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    items.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [items]);
  const links = (mobile = false) =>
    items.map((item) => (
      <a
        key={item.href}
        href={item.href}
        aria-current={active === item.href ? "location" : undefined}
        onClick={() => {
          if (mobile && menu.current) menu.current.open = false;
        }}
      >
        <span className="nav-number">{item.number}</span>
        {item.label}
      </a>
    ));
  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <a className="brand" href="#top" aria-label={`${name}, home`}>
          <span className="brand-mark" aria-hidden="true">
            {name[0].toLowerCase()}
            <span>.</span>
          </span>
          <span>
            {username}
            <span className="brand-dot">_</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links()}
        </nav>
        <a className="header-contact" href="#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
        <details className="mobile-menu" ref={menu}>
          <summary aria-label="Toggle navigation menu">
            Menu <span aria-hidden="true">＋</span>
          </summary>
          <nav aria-label="Mobile navigation">
            {links(true)}
            <a
              href="#contact"
              onClick={() => {
                if (menu.current) menu.current.open = false;
              }}
            >
              Let’s talk ↗
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
