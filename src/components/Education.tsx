import React from 'react';
import { GraduationCap, Award, Calendar, Star } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications",
      institution: "GD Goenka University",
      duration: "August 2021 - July 2023",
      cgpa: "8.2",
      type: "Masters"
    },
    {
      degree: "Bachelor of Computer Applications", 
      institution: "Jagannath University",
      duration: "August 2017 - July 2020",
      cgpa: "8.00",
      type: "Bachelors"
    }
  ];

  const certifications = [
    {
      name: "HTML, CSS, JavaScript for Web Developers",
      provider: "Coursera",
      icon: Award,
      color: "from-blue-400 to-purple-400"
    },
    {
      name: "UI/UX Developer",
      provider: "Aems Technologies", 
      icon: Award,
      color: "from-pink-400 to-purple-400"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="text-purple-400" size={28} />
                Education
              </h3>
              
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            edu.type === 'Masters' 
                              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                              : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          }`}>
                            {edu.type}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                        <p className="text-purple-400 font-medium mb-2">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Calendar size={14} />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-yellow-400 mb-1">
                          <Star size={16} fill="currentColor" />
                          <span className="text-sm font-medium">CGPA</span>
                        </div>
                        <span className="text-2xl font-bold text-white">{edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="text-pink-400" size={28} />
                Certifications
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} bg-opacity-20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <cert.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                        <p className="text-pink-400 font-medium">{cert.provider}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Academic Excellence</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Consistently maintained high academic performance with CGPA above 8.0 throughout both undergraduate and postgraduate studies. Specialized in computer applications with focus on software development and emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;