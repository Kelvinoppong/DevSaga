import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 85 },
        { name: "C++", level: 75 },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Django", level: 80 },
        { name: "Flask", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 80 },
        { name: "Redis", level: 75 },
      ],
    },
    {
      name: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Microsoft Azure", level: 80 },
        { name: "Google Cloud", level: 75 },
        { name: "Docker", level: 80 },
        { name: "CI/CD Pipelines", level: 80 },
      ],
    },
    {
      name: "Data & ML",
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "scikit-learn", level: 80 },
        { name: "Streamlit", level: 85 },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Linux", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "OAuth 2.0", level: 80 },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-900 rounded-xl p-6 border border-slate-800"
            >
              <h3 className="text-2xl mb-6 text-purple-300">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
