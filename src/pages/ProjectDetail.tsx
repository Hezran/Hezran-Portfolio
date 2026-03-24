import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, Server, Sparkles, Github, ExternalLink, ZoomIn } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { getProjectBySlug } from "@/data/projects";
import { TechBadge } from "@/components/TechBadge";

const SCENTIFY_SCREENS = [
  {
    src: "/images/projects/scentify-home.png",
    alt: "Scentify app home screen with search, quiz card, and featured perfumes",
    caption: "Home — search, fragrance quiz, and featured perfumes",
  },
  {
    src: "/images/projects/scentify-brand.jpg",
    alt: "Scentify app brand details screen showing fragrance notes, website, and offline stores",
    caption: "Brand Details — view fragrance notes and where to buy",
  },
  {
    src: "/images/projects/scentify-detail.jpg",
    alt: "Scentify app perfume detail screen showing Salvatore Ferragamo UOMO Signature",
    caption: "Perfume Details — comprehensive information and description",
  },
  {
    src: "/images/projects/scentify-quiz-1.png",
    alt: "Scentify fragrance quiz step 1: aroma selection",
    caption: "Find Your Perfect Scent — quiz step 1: choose favorite aromas",
  },
  {
    src: "/images/projects/scentify-quiz-2.jpg",
    alt: "Scentify fragrance quiz step 2: occasion selection",
    caption: "Find Your Perfect Scent — quiz step 2: occasion",
  },
  {
    src: "/images/projects/scentify-quiz-3.jpg",
    alt: "Scentify fragrance quiz step 3: age selection",
    caption: "Find Your Perfect Scent — quiz step 3: age group",
  },
  {
    src: "/images/projects/scentify-recommendations.jpg",
    alt: "Scentify app perfume recommendations result screen based on quiz answers",
    caption: "Recommendations — your personalized perfume matches",
  },
  {
    src: "/images/projects/scentify-favorites.jpg",
    alt: "Scentify app favorites screen showing a saved perfume",
    caption: "Favorites — save your top perfume recommendations",
  },
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [fullscreenImage, setFullscreenImage] = useState<{ src: string; alt: string } | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Project not found.</p>
          <Button asChild>
            <Link to="/projects">Back to projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Scentify-specific content
  const isScentify = project.slug === "scentify";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Back + header */}
        <section className="section-padding border-b border-border/50">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft size={16} />
                Back to projects
              </button>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <TechBadge key={tag} tag={tag} />
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-3">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {project.description}
              </p>
              <div className="flex gap-3 mt-6">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <ExternalLink size={16} />
                    Live demo
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Scentify project explanation + screenshots */}
        {isScentify && (
          <section className="section-padding">
            <div className="container mx-auto max-w-5xl">
              {/* Side-by-side: description + tech stack (left) | images (right) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start"
              >
                {/* Left: About + Tech stack */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-heading font-bold mb-4">About the project</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>Scentify</strong> is a perfume recommendation app available on web and mobile.
                      It helps users discover fragrances that match their preferences through a short quiz
                      and simple algorithm powered by <strong>Content-Based Filtering</strong>.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The mobile app is built with <strong>Flutter</strong>, and the backend is a
                      <strong> Flask REST API</strong> that serves perfume data and runs the recommendation
                      logic. Users can search perfumes and brands, take a fragrance quiz to get personalized
                      suggestions, and browse featured perfumes.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-heading font-bold mb-4">Tech stack</h2>
                    <div className="grid sm:grid-cols-1 gap-4">
                      <div className="glass rounded-xl p-5">
                        <Smartphone className="w-8 h-8 text-primary mb-2" />
                        <h3 className="font-heading font-semibold text-sm mb-1">Mobile app</h3>
                        <p className="text-xs text-muted-foreground">
                          Flutter app with search, quiz, featured perfumes, favorites, and settings.
                        </p>
                      </div>
                      <div className="glass rounded-xl p-5">
                        <Server className="w-8 h-8 text-primary mb-2" />
                        <h3 className="font-heading font-semibold text-sm mb-1">Backend</h3>
                        <p className="text-xs text-muted-foreground">
                          Flask REST API serving perfume data and recommendation endpoints.
                        </p>
                      </div>
                      <div className="glass rounded-xl p-5">
                        <Sparkles className="w-8 h-8 text-primary mb-2" />
                        <h3 className="font-heading font-semibold text-sm mb-1">Recommendations</h3>
                        <p className="text-xs text-muted-foreground">
                          Content-based filtering using scent profiles and user preferences from the quiz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: App screens (smaller, side by side) — click to fullscreen */}
                <div className="space-y-6 lg:sticky lg:top-28">
                  <h2 className="text-xl font-heading font-bold">App screens</h2>
                  <p className="text-sm text-muted-foreground">Click an image to view full size</p>
                  <div className="grid grid-cols-2 gap-4">
                    {SCENTIFY_SCREENS.map((screen, i) => (
                      <motion.button
                        key={screen.src}
                        type="button"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        onClick={() => setFullscreenImage({ src: screen.src, alt: screen.alt })}
                        className="group relative rounded-xl overflow-hidden border border-border/50 bg-card/40 shadow-md hover:border-primary/40 hover:shadow-lg transition-all duration-300 text-left"
                      >
                        <img
                          src={screen.src}
                          alt={screen.alt}
                          className="w-full h-auto object-contain max-h-[280px] mx-auto block"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 drop-shadow-lg transition-opacity" />
                        </div>
                        <p className="text-xs font-medium text-muted-foreground p-2 bg-card/80">
                          {screen.caption}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-12"
              >
                <Button variant="outline" asChild>
                  <Link to="/projects" className="gap-2">
                    <ArrowLeft size={18} />
                    Back to all projects
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        )}

        {/* Fullscreen image lightbox */}
        <Dialog open={!!fullscreenImage} onOpenChange={(open) => !open && setFullscreenImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 border-0 bg-transparent shadow-none overflow-visible [&>button]:bg-white [&>button]:text-black [&>button]:rounded-full [&>button]:p-2 [&>button]:right-2 [&>button]:top-2 [&>button]:z-10 [&>button]:hover:bg-white/90">
            {fullscreenImage && (
              <img
                src={fullscreenImage.src}
                alt={fullscreenImage.alt}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>

        {/* Generic fallback for other projects without custom content */}
        {!isScentify && (
          <section className="section-padding">
            <div className="container mx-auto max-w-4xl text-center">
              <Button variant="outline" asChild>
                <Link to="/projects" className="gap-2">
                  <ArrowLeft size={18} />
                  Back to all projects
                </Link>
              </Button>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
