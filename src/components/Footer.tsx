import React from 'react';
import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sonal Singh Tanwar
              </span>
            </h3>
            <p className="text-slate-400 mb-4 max-w-md">
              Java Backend Developer passionate about building scalable microservices and optimizing system performance. Always eager to take on new challenges and learn emerging technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:sonal.099singh@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 border border-slate-700 hover:border-transparent flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/sonal-github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 border border-slate-700 hover:border-transparent flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sonal-linkedln"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 border border-slate-700 hover:border-transparent flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Experience', href: '#experience' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-slate-400">
              <p>sonal.099singh@gmail.com</p>
              <p>+91-9354048273</p>
              <p>India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-slate-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-pink-400 fill-current" />
              <span>and</span>
              <Code size={16} className="text-purple-400" />
              <span>by Sonal Singh Tanwar</span>
            </div>
            <div className="text-slate-400 text-sm">
              © {currentYear} All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;