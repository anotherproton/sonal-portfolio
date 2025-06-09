import React from 'react';
import { Code, Server, Database, Bot } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Specialized in building scalable RESTful APIs and microservices"
    },
    {
      icon: Bot,
      title: "Bot Development",
      description: "Expert in creating voice and chat bots for enhanced user engagement"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Proficient in MySQL and MongoDB with optimization expertise"
    },
    {
      icon: Code,
      title: "Performance Optimization",
      description: "Proven track record of improving system performance by 30-40%"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate <span className="text-purple-400 font-semibold">Java Backend Developer</span> with 1.2 years of hands-on experience in designing and developing high-performance web services and microservices. My expertise lies in creating scalable solutions that optimize system performance and enhance user experiences.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in <span className="text-pink-400 font-semibold">JAX-RS framework</span> and have a proven track record of implementing business logic while addressing complex edge cases. My experience includes bot development, working with various Java frameworks, database management, and CI/CD pipelines.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              I'm committed to continuous learning, process improvement, and delivering innovative solutions in fast-paced, collaborative environments. I thrive on optimizing application performance and building systems that make a real impact.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Azure', 'MySQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-800/50 text-purple-300 rounded-full text-sm font-medium border border-slate-700 hover:border-purple-500/50 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-purple-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;