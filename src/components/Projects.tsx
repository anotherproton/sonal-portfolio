import React from 'react';
import { TrendingUp, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Weather Forecasting using Data Mining",
      description: "A machine learning project that analyzes past weather patterns to predict temperatures for the upcoming week. Built with Python and implemented in Jupyter Notebook using advanced data analysis techniques.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Machine Learning", "Jupyter Notebook", "Data Mining", "Data Analysis"],
      features: [
        "Historical weather data analysis",
        "Temperature prediction algorithms", 
        "Machine learning model training",
        "Interactive data visualizations"
      ],
      icon: TrendingUp,
      color: "from-blue-400 to-cyan-400",
      category: "Data Science"
    },
    {
      title: "Women's Garment E-Commerce Website", 
      description: "A comprehensive e-commerce platform for women's clothing that enables users to search, view, and place orders across various categories. Features a dynamic and user-friendly shopping experience.",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
      features: [
        "Product search and filtering",
        "Category-wise browsing",
        "Shopping cart functionality",
        "Order management system"
      ],
      icon: ShoppingCart,
      color: "from-pink-400 to-purple-400",
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating expertise in data science and web development
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} bg-opacity-20 text-white border border-white/20 backdrop-blur-sm`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Project Icon */}
                  <div className="absolute bottom-4 right-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20 backdrop-blur-sm flex items-center justify-center border border-white/20`}>
                      <project.icon size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-slate-300 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-900/50 text-purple-300 rounded-full text-xs font-medium border border-slate-700 hover:border-purple-500/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Projects Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Professional Work</h3>
                <p className="text-slate-300">
                  In addition to personal projects, I've contributed to enterprise-level applications at Rezo.AI
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 bg-opacity-20 flex items-center justify-center">
                    <TrendingUp size={32} className="text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Voice & Chat Bots</h4>
                  <p className="text-slate-400 text-sm">Developed end-to-end bot solutions for high-profile clients</p>
                </div>
                
                <div className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-400 bg-opacity-20 flex items-center justify-center">
                    <ShoppingCart size={32} className="text-pink-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Serverless Solutions</h4>
                  <p className="text-slate-400 text-sm">Built scalable Azure Functions reducing infrastructure costs</p>
                </div>
                
                <div className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 bg-opacity-20 flex items-center justify-center">
                    <TrendingUp size={32} className="text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Performance Optimization</h4>
                  <p className="text-slate-400 text-sm">Improved application performance by 30-40% consistently</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;