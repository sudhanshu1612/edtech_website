import React from 'react';
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-12">
          
          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Affiliates</a></li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaGoogle size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Articles</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Chart Sheet</a></li>
              <li><a href="#" className="hover:text-white transition">Code challenges</a></li>
              <li><a href="#" className="hover:text-white transition">Docs</a></li>
              <li><a href="#" className="hover:text-white transition">Projects</a></li>
              <li><a href="#" className="hover:text-white transition">Videos</a></li>
              <li><a href="#" className="hover:text-white transition">Workspaces</a></li>
            </ul>
          </div>

          {/* Plans Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Plans</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Paid memberships</a></li>
              <li><a href="#" className="hover:text-white transition">For students</a></li>
              <li><a href="#" className="hover:text-white transition">Business solutions</a></li>
            </ul>
            <h3 className="text-white font-semibold mb-4 text-sm mt-6">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Forums</a></li>
              <li><a href="#" className="hover:text-white transition">Chapters</a></li>
              <li><a href="#" className="hover:text-white transition">Events</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            </ul>
          </div>

          {/* Subjects Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Subjects</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">AI</a></li>
              <li><a href="#" className="hover:text-white transition">Cloud Computing</a></li>
              <li><a href="#" className="hover:text-white transition">Code Foundations</a></li>
              <li><a href="#" className="hover:text-white transition">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-white transition">Data Analytics</a></li>
              <li><a href="#" className="hover:text-white transition">Data Science</a></li>
              <li><a href="#" className="hover:text-white transition">Data Visualization</a></li>
              <li><a href="#" className="hover:text-white transition">Developer Tools</a></li>
              <li><a href="#" className="hover:text-white transition">DevOps</a></li>
              <li><a href="#" className="hover:text-white transition">Game Development</a></li>
              <li><a href="#" className="hover:text-white transition">IT</a></li>
              <li><a href="#" className="hover:text-white transition">Machine Learning</a></li>
              <li><a href="#" className="hover:text-white transition">Math</a></li>
              <li><a href="#" className="hover:text-white transition">Mobile Development</a></li>
              <li><a href="#" className="hover:text-white transition">Web Design</a></li>
              <li><a href="#" className="hover:text-white transition">Web Development</a></li>
            </ul>
          </div>

          {/* Languages Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Languages</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Bash</a></li>
              <li><a href="#" className="hover:text-white transition">C++</a></li>
              <li><a href="#" className="hover:text-white transition">C#</a></li>
              <li><a href="#" className="hover:text-white transition">Go</a></li>
              <li><a href="#" className="hover:text-white transition">HTML & CSS</a></li>
              <li><a href="#" className="hover:text-white transition">Java</a></li>
              <li><a href="#" className="hover:text-white transition">JavaScript</a></li>
              <li><a href="#" className="hover:text-white transition">Kotlin</a></li>
              <li><a href="#" className="hover:text-white transition">PHP</a></li>
              <li><a href="#" className="hover:text-white transition">Python</a></li>
              <li><a href="#" className="hover:text-white transition">R</a></li>
              <li><a href="#" className="hover:text-white transition">Ruby</a></li>
              <li><a href="#" className="hover:text-white transition">SQL</a></li>
              <li><a href="#" className="hover:text-white transition">Swift</a></li>
            </ul>
          </div>

          {/* Career Building Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Career building</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Career paths</a></li>
              <li><a href="#" className="hover:text-white transition">Career services</a></li>
              <li><a href="#" className="hover:text-white transition">Interview prep</a></li>
              <li><a href="#" className="hover:text-white transition">Professional certification</a></li>
              <li><a href="#" className="hover:text-white transition">Full Catalog</a></li>
              <li><a href="#" className="hover:text-white transition">Beta Content</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Section - You can add copyright or additional info here */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 StudyNotion. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
