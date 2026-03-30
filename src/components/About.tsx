import { motion } from "framer-motion";
import { GraduationCap, Code2, Lightbulb, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "Informatics at Universitas Teknologi Yogyakarta",
  },  
  {
    icon: Code2,
    title: "Developer",
    text: "Full-stack web & mobile app enthusiast",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    text: "Creative thinker driven by innovation",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
            Get To Know
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-xl p-6 text-center hover:border-primary/50 transition-colors group"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm Hezran Arkee Malaiga, a fresh graduate in Informatics from Universitas Teknologi Yogyakarta with a strong passion for building modern web applications. My interest in technology began with a curiosity about how digital products are created, which later developed into a commitment to building clean, efficient, and user-focused solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
             I have experience working with both front-end and back-end technologies, allowing me to build full-stack applications. I enjoy designing intuitive user interfaces using React and Tailwind CSS, as well as developing backend services, APIs, and databases to create scalable and functional systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              During my studies, I developed a mobile and web-based perfume recommendation application using Flutter for the mobile interface and Flask (Python) for the backend API. The application gathers user preferences through a questionnaire and generates personalized perfume recommendations, showcasing my ability to integrate mobile development, backend systems, and data-driven features.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/HEZRAN_CV_2026.pdf"; // Update this path to your actual CV file
                  link.download = "Hezran_Arkee_Malaiga_CV.pdf";
                  link.click();
                }}
                className="gap-2"
              >
                <Download size={18} />
                Download CV
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  window.open("/HEZRAN_CV_2026.pdf", "_blank"); // Update this path to your actual CV file
                }}
                className="gap-2"
              >
                <ExternalLink size={18} />
                View CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
