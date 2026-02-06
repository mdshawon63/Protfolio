import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

 
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
    
      const timeOptions = {
        timeZone: 'Asia/Dhaka',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      const time = now.toLocaleTimeString('en-US', timeOptions);
      setCurrentTime(time + ' (BDT)');
      

      const dateOptions = {
        timeZone: 'Asia/Dhaka',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      const date = now.toLocaleDateString('en-US', dateOptions);
      setCurrentDate(date);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { name: 'GitHub', emoji: '🐙', href: 'https://github.com/mdshawon63' },
    { name: 'LinkedIn', emoji: '💼', href: 'https://www.linkedin.com/in/mohammad-shawon-sikdar-b67098388/' },
    { name: 'Facebook', emoji: '👥', href: 'https://www.facebook.com/mohammad.shawon.sikdar' },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main footer content matching navbar layout */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Left: Your Name */}
          <div className="text-2xl md:text-3xl font-bold text-amber-300">
            Md Shawon Sikdar
          </div>

          {/* Center: Bangladesh Time & Date */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl">🇧🇩</span>
              <div className="text-sm bg-gray-800/50 px-4 py-2 rounded-lg">
                <div className="font-mono font-bold text-amber-100">{currentTime}</div>
                <div className="text-gray-400 text-xs mt-1">{currentDate}</div>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="text-xs text-gray-400">
              Local Time • Dhaka, Bangladesh
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl hover:scale-125 hover:text-amber-300 transition-all duration-300 transform hover:rotate-12"
                title={social.name}
              >
                {social.emoji}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
          <div>
            © {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-amber-300 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors duration-200">
              Contact
            </a>
          </div>
          <div className="text-xs">
            Made with ❤️ in Bangladesh
          </div>
        </div>
      </div>
    </footer>
  );
}
