import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Sonal Singh Tanwar
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          Java Backend Developer
        </p>
        
        <p className="text-lg text-slate-400 mb-8 max-w-4xl mx-auto leading-relaxed">
          1.2+ years of experience in designing, developing, and maintaining high-performance RESTful web services and microservices using JAX-RS
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="https://drive.google.com/file/d/1gNLvWGP9CzMhLC9ottmhrc1vQoIuRIgJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <span className="flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </span>
          </a>
          
          <a 
            href="#projects"
            className="group border-2 border-slate-600 hover:border-purple-500 text-slate-300 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="mailto:sonal.099singh@gmail.com"
            aria-label="Email"
            className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 border border-slate-700 hover:border-transparent flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/sonal-github"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 border border-slate-700 hover:border-transparent flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sonal-linkedln"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 border border-slate-700 hover:border-transparent flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;