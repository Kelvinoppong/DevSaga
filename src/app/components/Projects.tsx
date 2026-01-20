import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import autoclaimImage from "@/app/Autoclaim.png";

export function Projects() {
  const projects = [
    {
      title: "AutoClaim",
      subtitle: "State Farm Hackathon Winner",
      description: "Developed a claims dashboard using computer vision to analyze vehicle damage. Built a secure backend for claims processing and image storage with OAuth-based security.",
      image: autoclaimImage,
      tags: ["TypeScript", "Node.js", "PostgreSQL", "AWS S3", "Tailwind CSS"],
      github: "https://github.com/Kelvinoppong",
    },
    {
      title: "Resourcely",
      description: "Built an interactive real-time map to locate nearby community resources. Optimized frontend performance and responsiveness across devices with secure authentication and session handling.",
      image: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzY4ODA4NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["TypeScript", "Next.js", "React", "Google Maps API", "OAuth 2.0", "Tailwind CSS"],
      github: "https://github.com/Kelvinoppong",
    },
    {
      title: "LLM Reproducibility Dashboard",
      subtitle: "HackHPC Winner",
      description: "Built a dashboard analyzing reproducibility of LLM research papers. Automated scoring into four reproducibility levels, reducing manual review by 80% while processing large-scale noisy academic datasets.",
      image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2ODc1NTczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "Streamlit", "Pandas", "Web Scraping", "Regex"],
      github: "https://github.com/Kelvinoppong",
    },
    {
      title: "S.T.A.R.T. Engine",
      subtitle: "JPMorgan Chase Data For Good Hackathon",
      description: "Built using Python, Pandas, and scikit-learn to optimize course recommendations. Cleaned and analyzed 100,000+ records to extract regional performance trends and design scalable expansion strategies.",
      image: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzY4ODA4NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "Pandas", "scikit-learn", "Data Analysis"],
      github: "https://github.com/Kelvinoppong",
    },
    {
      title: "DormCycle",
      description: "Leading development of a platform for exchanging dorm items to reduce waste. Managing business models, team coordination, and pitch competitions for sustainable campus living.",
      image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2ODc1NTczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "PostgreSQL", "Business Development"],
      github: "https://github.com/Kelvinoppong",
      live: "https://website-portal-2.onrender.com",
    },
    {
      title: "Traffic Risk API",
      subtitle: "Headstarter AI Fellowship",
      description: "Built RESTful Flask APIs processing 2,000+ traffic records into real-time risk queries. Deployed Dockerized microservices with Redis job queues to improve system resilience.",
      image: "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzY4ODQ0MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Flask", "Python", "Docker", "Redis", "REST API"],
      github: "https://github.com/Kelvinoppong",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A selection of projects showcasing my skills in full-stack development, data analytics, and system design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-slate-800 border-slate-700 hover:border-purple-500 transition-all duration-300 h-full flex flex-col group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  {project.subtitle && (
                    <div className="absolute top-4 left-4 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                      {project.subtitle}
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-purple-500 text-purple-300 hover:bg-purple-500/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
