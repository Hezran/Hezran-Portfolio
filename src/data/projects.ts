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
    slug: "typefast",
    title: "TypeFast",
    description:
      "A high-performance, minimalist typing test platform inspired by Monkeytype, featuring real-time WPM tracking, a global leaderboard, and user authentication.",
    tags: ["React", "Vite", "Express.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/Hezran/typefast",
    live: "#",
    image: "/images/projects2/1.png",
    hasDetailPage: true,
  },
];

/** Get project by slug for detail page */
export function getProjectBySlug(slug: string): Project | undefined {
  return featuredProjects.find((p) => p.slug === slug);
}
