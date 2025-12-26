import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaArrowRight } from 'react-icons/fa';

export default function Project() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const controls = useAnimation();

  const projects = [
    {
      id: 1,
      title: "Interactive Weather Dashboard",
      description: "A real-time weather application with dynamic visualizations and location-based forecasts using modern APIs.",
      technologies: ["React", "Chart.js", "OpenWeather API"],
      icon: <FaReact className="text-4xl text-cyan-400" />,
      color: "from-cyan-500 to-blue-600",
      techIcons: [<FaReact key="react" />, <FaJs key="js" />, <FaCss3Alt key="css" />]
    },
    {
      id: 2,
      title: "E-commerce Product Explorer",
      description: "A sleek product browsing interface with advanced filtering, cart management, and smooth animations.",
      technologies: ["JavaScript", "CSS Grid", "Local Storage"],
      icon: <FaJs className="text-4xl text-yellow-400" />,
      color: "from-amber-500 to-orange-600",
      techIcons: [<FaJs key="js" />, <FaHtml5 key="html" />, <FaCss3Alt key="css" />]
    },
    {
      id: 3,
      title: "Creative Portfolio Builder",
      description: "A drag-and-drop portfolio creator with customizable templates and real-time preview functionality.",
      technologies: ["HTML5", "CSS3", "Vanilla JavaScript"],
      icon: <FaHtml5 className="text-4xl text-orange-500" />,
      color: "from-violet-500 to-purple-600",
      techIcons: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />]
    }
  ];

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    });
  }, [controls]);

  return (
    <section id="project" className="relative text-white py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Frontend Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing modern frontend development with interactive animations and responsive design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={controls}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`relative rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 
                ${hoveredProject === project.id ? 'shadow-2xl shadow-cyan-500/20' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Header with Gradient */}
              <div className={`p-6 bg-gradient-to-br ${project.color}`}>
                <div className="flex justify-between items-center">
                  {project.icon}
                  <motion.div 
                    animate={{ rotate: hoveredProject === project.id ? 45 : 0 }}
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                  >
                    <FaArrowRight />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">TECH STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 * idx }}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Tech Icons */}
                <div className="flex gap-4 text-2xl">
                  {project.techIcons.map((Icon, idx) => (
                    <motion.div
                      key={idx}
                      animate={{ 
                        scale: hoveredProject === project.id ? [1, 1.2, 1] : 1,
                        rotate: hoveredProject === project.id ? [0, 10, -10, 0] : 0
                      }}
                      transition={{ 
                        delay: idx * 0.1,
                        duration: 0.5 
                      }}
                      className="opacity-80 hover:opacity-100"
                    >
                      {Icon}
                    </motion.div>
                  ))}
                </div>

                {/* Animated Underline */}
                <motion.div 
                  className="h-0.5 bg-gradient-to-r from-transparent via-current to-transparent mt-6"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Hover Effect Glow */}
              {hoveredProject === project.id && (
                <motion.div 
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    background: `radial-gradient(circle at center, ${project.id === 1 ? 'rgba(6, 182, 212, 0.1)' : project.id === 2 ? 'rgba(245, 158, 11, 0.1)' : 'rgba(168, 85, 247, 0.1)'}, transparent)`
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
      </div>
    </section>
  );
}