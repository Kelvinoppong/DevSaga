import { motion } from "motion/react";
import { Code2, Database, Cloud, Award } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Software Engineer",
      description: "Building scalable applications with clean architecture and performance focus",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Leveraging data-driven insights to solve complex problems",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Experienced with AWS, Azure, Docker, and CI/CD pipelines",
    },
    {
      icon: Award,
      title: "Presidential Scholar",
      description: "4.0 GPA, Dean's List, and multiple fellowship recognitions",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I am a Computer Science student at Grambling State University with a strong focus on 
            software engineering, data analytics, and scalable systems. I enjoy building impactful, 
            real-world applications that combine clean architecture, performance, and thoughtful user experience.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">
            My journey in tech is driven by curiosity, discipline, and a desire to serve others through innovation. 
            I have worked across backend systems, cloud infrastructure, APIs, and full-stack applications, and I thrive 
            in collaborative, fast-paced environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-colors group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-white">{highlight.title}</h3>
                <p className="text-gray-400">{highlight.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl mb-6 text-white">Education</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xl text-purple-300">Bachelor of Science in Computer Science</p>
              <p className="text-gray-400">Grambling State University • Expected May 2028</p>
              <p className="text-gray-400 mt-1">Data Analytics Certification</p>
              <p className="text-gray-500 mt-2">GPA: 4.0/4.0 • Presidential Scholar • Dean's List</p>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {["Algorithms & Data Structures", "Operating Systems", "Machine Learning", "Data Analysis", "Calculus III", "Statistics I"].map((course) => (
                  <span key={course} className="text-xs bg-slate-800 text-purple-300 px-3 py-1 rounded-full">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20"
        >
          <h3 className="text-2xl mb-6 text-white">Honors & Organizations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "Presidential Scholar",
              "Dean's List",
              "NVIDIA Summer Bridge",
              "Oracle Reach Bootcamp",
              "Goldman Sachs VIS",
              "Aspire Leadership",
              "Color Stack Fellow",
              "CodePath Fellow",
              "LS-LAMP",
              "NSBE",
              "Tech Elevators",
              "Pixite Ambassador",
            ].map((honor) => (
              <div key={honor} className="text-sm text-gray-300 bg-slate-800/50 px-3 py-2 rounded-lg text-center">
                {honor}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <blockquote className="text-xl md:text-2xl text-purple-300 italic">
            "Build with purpose. Serve with skill. Grow with faith."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
