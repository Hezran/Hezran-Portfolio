import { 
  SiFlutter, SiFlask, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiPython,
  SiTypescript
} from "react-icons/si";

const iconMap: Record<string, any> = {
  "Flutter": SiFlutter,
  "Flask": SiFlask,
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "MongoDB": SiMongodb,
  "Tailwind CSS": SiTailwindcss,
  "Python": SiPython,
  "TypeScript": SiTypescript,
};

export const TechBadge = ({ tag, className }: { tag: string; className?: string }) => {
  const Icon = iconMap[tag];
  return (
    <span
      className={`px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-lg flex items-center justify-center gap-1.5 ${className || ""}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {tag}
    </span>
  );
};
