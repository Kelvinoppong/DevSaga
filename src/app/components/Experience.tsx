import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "State Farm",
      role: "Software Engineering Intern",
      location: "Bloomington, IL",
      period: "May 2025 – August 2025",
      achievements: [
        "Developed and optimized a high-availability Consumer API using Node.js and Express",
        "Deployed scalable services on AWS with CI/CD pipelines to ensure reliability",
        "Generated and managed Client ID and Client Secret credentials for secure third-party integrations using Microsoft Azure",
      ],
    },
    {
      company: "Headstarter AI",
      role: "Software Engineering Fellow",
      location: "Virtual",
      period: "June 2025 – July 2025",
      achievements: [
        "Built RESTful Flask APIs processing 2,000+ traffic records into real-time risk queries",
        "Automated SSH and Git workflows to reduce manual server overhead",
        "Deployed Dockerized microservices with Redis job queues to improve system resilience",
      ],
    },
    {
      company: "Google (Basta x G-SWEP)",
      role: "Software Engineering Fellow",
      location: "Remote",
      period: "October 2024 – February 2025",
      achievements: [
        "Reimplemented a Java autofill backend using trie indexing, reducing lookup latency by 40%",
        "Collaborated with interns to implement accessibility-focused keyboard navigation features",
        "Managed application state using React-Redux for consistent UI behavior",
      ],
    },
    {
      company: "JPMorgan Chase",
      role: "Data For Good Hackathon Participant",
      location: "Plano, TX",
      period: "February 2025",
      achievements: [
        "Built the S.T.A.R.T. Engine using Python, Pandas, and scikit-learn to optimize course recommendations",
        "Cleaned and analyzed 100,000+ records to extract regional performance trends",
        "Designed scalable expansion strategies across five states",
      ],
    },
  ];

  const leadership = [
    {
      organization: "DormCycle",
      role: "Founder",
      period: "December 2024 – Present",
      description: "Leading development of a platform for exchanging dorm items to reduce waste. Managing business models, team coordination, and pitch competitions.",
    },
    {
      organization: "PwC Nonprofit Consulting Externship",
      role: "Consultant",
      period: "May 2025 – June 2025",
      description: "Conducted comparative analysis of national nonprofits. Designed a 3-year growth roadmap projected to increase engagement by 45%.",
    },
    {
      organization: "NVIDIA Summer Bridge Series",
      role: "Participant",
      period: "May 2025 – August 2025",
      description: "Participated in engineering workshops on system design and product development.",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            My professional journey in software engineering and tech leadership
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-purple-300">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl text-white mb-1">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-purple-300 mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="text-2xl mb-8 text-purple-300">Leadership & Involvement</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-colors"
              >
                <h4 className="text-lg text-white mb-1">{item.role}</h4>
                <p className="text-purple-300 mb-2">{item.organization}</p>
                <p className="text-sm text-gray-500 mb-3">{item.period}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
