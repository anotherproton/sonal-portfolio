import React from 'react';
import { Code2, Database, Server, Wrench, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "from-purple-400 to-blue-400",
      skills: [
        { name: "Java", level: 90 },
        { name: "SQL", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "HTML", level: 80 },
        { name: "CSS", level: 75 }
      ]
    },
    {
      icon: Server,
      title: "Technologies & Frameworks",
      color: "from-pink-400 to-purple-400", 
      skills: [
        { name: "Spring Boot", level: 88 },
        { name: "REST APIs", level: 90 },
        { name: "JAX-RS", level: 85 },
        { name: "Jersey", level: 82 },
        { name: "Hibernate", level: 80 },
        { name: "Maven", level: 75 }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "Git", level: 85 },
        { name: "Postman", level: 88 },
        { name: "Azure", level: 80 },
        { name: "JIRA", level: 75 },
        { name: "Jenkins", level: 70 }
      ]
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-green-400 to-teal-400",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 78 }
      ]
    }
  ];

  const getGradientClass = (color: string) => {
    switch(color) {
      case "from-purple-400 to-blue-400":
        return "bg-gradient-to-r from-purple-400 to-blue-400";
      case "from-pink-400 to-purple-400":
        return "bg-gradient-to-r from-pink-400 to-purple-400";
      case "from-blue-400 to-cyan-400":
        return "bg-gradient-to-r from-blue-400 to-cyan-400";
      case "from-green-400 to-teal-400":
        return "bg-gradient-to-r from-green-400 to-teal-400";
      default:
        return "bg-gradient-to-r from-purple-400 to-pink-400";
    }
  };

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive technical expertise in backend development, cloud technologies, and modern development tools
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`h-full ${getGradientClass(category.color)} rounded-full transition-all duration-1000 ease-out transform origin-left group-hover/skill:scale-x-105`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `fillBar 1.5s ease-out ${skillIndex * 0.1}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 bg-opacity-20 flex items-center justify-center">
                  <Server size={32} className="text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Backend Development</h4>
                <p className="text-slate-400 text-sm">Microservices, REST APIs, Performance Optimization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-400 bg-opacity-20 flex items-center justify-center">
                  <Cloud size={32} className="text-pink-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Cloud & DevOps</h4>
                <p className="text-slate-400 text-sm">Azure Functions, CI/CD Pipelines, Serverless Architecture</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 bg-opacity-20 flex items-center justify-center">
                  <GitBranch size={32} className="text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Development Practices</h4>
                <p className="text-slate-400 text-sm">Version Control, Testing, Agile Methodologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fillBar {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;