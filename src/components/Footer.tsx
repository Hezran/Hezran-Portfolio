import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hezran Arkee Malaiga. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Built with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
