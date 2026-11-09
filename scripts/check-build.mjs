import { existsSync, readFileSync } from "node:fs";
import { JSDOM } from "jsdom";

const dist = new URL("../dist/", import.meta.url);
const { window } = new JSDOM(readFileSync(new URL("index.html", dist), "utf8"));
const { document } = window;
const origin = new URL(document.querySelector('link[rel="canonical"]').href)
  .origin;
const failures = new Set();

for (const element of document.querySelectorAll(
  "[href], [src], [component-url], [renderer-url]",
)) {
  for (const attribute of ["href", "src", "component-url", "renderer-url"]) {
    const reference = element.getAttribute(attribute);
    if (!reference) continue;
    const url = new URL(reference, origin);

    if (url.origin === origin) {
      const path = url.pathname.endsWith("/")
        ? url.pathname + "index.html"
        : url.pathname;
      if (!existsSync(new URL("." + path, dist)))
        failures.add(`Missing built file: ${reference}`);
      if (
        url.pathname === "/" &&
        url.hash &&
        !document.getElementById(decodeURIComponent(url.hash.slice(1)))
      ) {
        failures.add(`Missing page anchor: ${reference}`);
      }
    }

    if (
      /(^|\.)(googletagmanager\.com|google-analytics\.com)$/.test(
        url.hostname,
      ) &&
      (attribute !== "href" || element.tagName === "LINK")
    ) {
      failures.add(`Analytics loads before consent: ${reference}`);
    }
  }
}

window.close();
if (failures.size) {
  for (const failure of failures) console.error(failure);
  process.exitCode = 1;
} else {
  console.log(
    "Built portfolio references and analytics consent defaults passed.",
  );
}
