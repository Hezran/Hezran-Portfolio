export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  /** Card thumbnail for main page (path or URL) */
  image?: string;
  /** If true, has a dedicated detail page */
  hasDetailPage?: boolean;
}

export const featuredProjects: Project[] = [
  {
    slug: "scentify",
    title: "Scentify",
    description:
      "A web and mobile perfume recommendation app that helps users discover their perfect scent using content-based filtering.",
    tags: ["Flutter", "Flask", "REST API", "Content-based filtering"],
    github: "#",
    live: "#",
    image: "/images/projects/scentify-home.png",
    hasDetailPage: true,
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product management, shopping cart, and payment integration built with React and Node.js.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "#",
    image: "/images/projects/ecommerce-hero.png",
  },
];

/** Get project by slug for detail page */
export function getProjectBySlug(slug: string): Project | undefined {
  return featuredProjects.find((p) => p.slug === slug);
}
