import { site } from "../data/site";

export const title = `${site.name} — Software engineering & applied AI`;
export const image = new URL(site.portrait, site.url).href;
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  description: site.description,
  image,
  sameAs: site.socials.map((social) => social.href),
};
