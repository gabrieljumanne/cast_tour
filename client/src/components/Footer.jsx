
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const navigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers"},
    { name: "Newsroom", href: "/newsroom"},
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms"},
  ],
  social: [
    {
      name: "Facebook",
      icon: FaFacebook,
      href: "#",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "#",
    },    
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-300">
              {navigation.company.map((item) => (
                <a key={item.name} href={item.href}>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal links */}
          <div>
           {/* ... */}  
          </div>

          {/* Social links */}
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
          &copy; 2023 cast_tour, Inc. All rights reserved.
        </p>

      </div>
    </footer>
  );
}