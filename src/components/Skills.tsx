import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";
import { 
  SiFlutter, SiFlask, SiPython, SiMysql, SiJavascript, SiReact, SiTailwindcss,
  SiFigma, SiCanva, SiXampp, SiPostman, SiGithub, SiTypescript
} from "react-icons/si";

// For The Tech Stack Section
const skills = [
  { name: "Flutter", icon: SiFlutter },
  { name: "Flask", icon: SiFlask },
  { name: "Python", icon: SiPython },
  { name: "MySQL", icon: SiMysql },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Typescript", icon: SiTypescript },
];

// For The Tools Section
const skills1 = [ 
  { name: "VS Code", icon: VscVscode },
  { name: "Figma", icon: SiFigma },
  { name: "Canva", icon: SiCanva },
  { name: "XAMPP", icon: SiXampp },
  { name: "Postman", icon: SiPostman },
  { name: "Github", icon: SiGithub },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
            What I Use
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            Tools & Technologies
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading font-semibold text-lg mb-6">
              Tech Stack
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="glass rounded-xl px-4 py-3 text-sm font-medium hover:border-primary/50 transition flex items-center justify-center gap-2.5"
                >
                  <skill.icon className="w-5 h-5" />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skill Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading font-semibold text-lg mb-6">
              Tools
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills1.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="glass rounded-xl px-4 py-3 text-sm font-medium hover:border-primary/50 transition flex items-center justify-center gap-2.5"
                >
                  <skill.icon className="w-5 h-5" />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
