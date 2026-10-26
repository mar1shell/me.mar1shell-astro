/** Plain content types. Keep markup and React components out of data files. */
export interface Link {
  label: string;
  href: string;
}
export interface SectionMeta {
  id: string;
  number: string;
  label: string;
  title: string;
  description?: string;
}
export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  technologies: string[];
  image?: string;
  imageAlt?: string;
  status?: string;
  links: Link[];
  featured?: boolean;
  /** Optional illustration when a project has no screenshot yet. */
  preview?: { label: string; steps: string[]; caption?: string };
}
export interface JourneyEntry {
  id: string;
  title: string;
  organization: string;
  logo?: string;
  period: string;
  location?: string;
  type?: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
  image?: string;
  imageAlt?: string;
  link?: Link;
}
export interface EntryPhoto {
  src: string;
  alt: string;
  caption: string;
  /** CSS object-position, useful for keeping faces in frame. */
  position?: string;
}
export interface LeadershipEntry extends Omit<
  JourneyEntry,
  "image" | "imageAlt"
> {
  photos: [EntryPhoto, EntryPhoto, EntryPhoto];
  example?: boolean;
}
export interface Award {
  id: string;
  title: string;
  result: string;
  year: string;
  description: string;
  image?: string;
  link?: string;
}
