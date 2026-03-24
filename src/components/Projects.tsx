import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-3">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here are some projects I have made.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail */}
              <Link to={`/projects/${project.slug}`} className="block overflow-hidden bg-card/80">
                <img
                  src={project.image ?? "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 sm:h-52 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <Link to={`/projects/${project.slug}`}>
                  <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-primary/15 text-primary text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button asChild className="w-full rounded-lg">
                  <Link to={`/projects/${project.slug}`} className="gap-2">
                    View project
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button variant="outline" asChild>
            <Link to="/projects" className="gap-2">
              View all featured projects
              <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
