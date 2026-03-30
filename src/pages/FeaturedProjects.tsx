import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";
import { TechBadge } from "@/components/TechBadge";

const FeaturedProjects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Page header */}
        <section className="section-padding border-b border-border/50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            >
              <div>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
                >
                  <ArrowLeft size={16} />
                  Back to home
                </Link>
                <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
                  My Work
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
                  Featured Projects
                </h1>
                <p className="text-muted-foreground mt-3 max-w-xl">
                  A selection of projects I've built from full-stack apps to
                  APIs and dashboards. Each one reflects my focus on clean code
                  and user experience.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects grid */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredProjects.map((project, i) => (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300"
                >
                  {/* Project thumbnail */}
                  <Link to={`/projects/${project.slug}`} className="block overflow-hidden bg-card/80">
                    <img
                      src={project.image ?? "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-56 sm:h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <div className="p-6 sm:p-8">
                    <Link to={`/projects/${project.slug}`}>
                      <h2 className="font-heading font-bold text-xl sm:text-2xl mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                    </Link>
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <TechBadge key={tag} tag={tag} />
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Button asChild>
                        <Link to={`/projects/${project.slug}`} className="gap-2">
                          View project
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <ExternalLink size={16} />
                          Live demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 text-center"
            >
              <Button variant="outline" asChild>
                <Link to="/" className="gap-2">
                  <ArrowLeft size={18} />
                  Back to home
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturedProjects;
