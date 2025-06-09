import React from 'react';
import { Calendar, MapPin, TrendingUp, Users, Cloud, Zap } from 'lucide-react';

const Experience = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Optimized latency by 30-40% for real-time user interactions",
      color: "from-purple-400 to-blue-400"
    },
    {
      icon: Zap,
      title: "Backend Solutions",
      description: "Enhanced application performance by 25-35% using JAX-RS and Jersey",
      color: "from-pink-400 to-purple-400"
    },
    {
      icon: Cloud,
      title: "Serverless Architecture",
      description: "Reduced infrastructure costs by 40-50% with Azure Functions",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Ensured 99% on-time delivery through cross-functional teamwork",
      color: "from-green-400 to-teal-400"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Software Engineer</h3>
                <p className="text-xl text-purple-400 font-semibold">Rezo.AI</p>
              </div>
              <div className="flex flex-col md:items-end text-slate-400">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar size={16} />
                  <span>Aug 2023 - Oct 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>1.2 Years Experience</span>
                </div>
              </div>
            </div>

            {/* Role Description */}
            <div className="mb-8">
              <p className="text-slate-300 leading-relaxed text-lg">
                Specialized in developing end-to-end voice and chat bots for high-profile clients while building scalable backend solutions and microservices. Focused on performance optimization and innovative serverless architectures.
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities:</h4>
              <ul className="space-y-3">
                {[
                  "Developed end-to-end voice and chat bots for high-profile clients, optimizing latency by 30-40% to ensure seamless real-time user interactions",
                  "Designed and implemented scalable backend solutions and microservices using JAX-RS and Jersey framework",
                  "Built serverless bots with Azure Functions, reducing infrastructure costs by 40-50% and enabling highly scalable deployments",
                  "Applied Spring Boot in various projects to build efficient microservices and backend systems",
                  "Collaborated with cross-functional teams to integrate bots with external systems"
                ].map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${achievement.color} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                      <achievement.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white text-sm mb-1">{achievement.title}</h5>
                      <p className="text-slate-400 text-xs leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;