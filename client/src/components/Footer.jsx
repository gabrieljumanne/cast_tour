import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Newsroom', href: '/newsroom' },
    { name: 'Customize', href: '/customizable' }, // Adding a Customize link for customizable tour packages
    // Add more future page links as needed
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
  social: [
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: '#',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: '#',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: '#',
    },
  ],
};

const Footer = () => {
  const [darkTheme, toggleTheme] = useTheme();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`${darkTheme?'bg-[#1a1a1a]':'bg-white'} text-white`}
    >
      <div className={`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8`}>
        <div className={`${darkTheme?'':'bg-[#333333] pl-[20px] rounded'} grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6`}>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <nav className={`mt-4 flex flex-col space-y-2 text-sm text-gray-300`}>
              {navigation.company.map((item) => (
                <a className={`${darkTheme?'':''} hover:text-white`}
                key={item.name} href={item.href}>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div>
            {/* Legal links */}
          </div>
          <div className="col-span-2 mt-12 space-y-8 md:mt-0 md:col-span-1">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-1 rounded-full text-gray-400 hover:text-white"
              >
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} cast_tour, Inc. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
