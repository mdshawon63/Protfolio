import React from 'react'
import {  FaReact } from 'react-icons/fa'
import { SiFastapi, SiTailwindcss } from 'react-icons/si'
import { motion } from 'framer-motion'
import { IoLogoJavascript } from "react-icons/io";

export default function Skill() {
  
  const skills = [
    { icon: <IoLogoJavascript />, name: "Java Script", color: "bg-red-500" },
    { icon: <FaReact />, name: "React", color: "bg-blue-500" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "bg-cyan-500" },
    { icon: <SiFastapi />, name: "FastAPI", color: "bg-green-500" }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const iconVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  }

  return (
    <section id='skill' className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            My Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </motion.div>

 
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl shadow-black/20 hover:shadow-blue-500/10 transition-all duration-300">
                
             
                <div className={`absolute inset-0 ${skill.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                

                <motion.div
                  variants={iconVariants}
                  className="flex justify-center mb-6"
                >
                  <div className={`p-4 rounded-full ${skill.color} bg-opacity-20 border ${skill.color.replace('bg-', 'border-')} border-opacity-30`}>
                    <div className="text-4xl">
                      {React.cloneElement(skill.icon, { 
                        className: `text-3xl ${skill.color.replace('bg-', 'text-')}`
                      })}
                    </div>
                  </div>
                </motion.div>


                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl font-bold text-center mb-2"
                >
                  {skill.name}
                </motion.h3>

              
                <div className="mt-6">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 1, type: "spring" }}
                      className={`h-full ${skill.color} rounded-full`}
                    />
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-right text-sm text-gray-400 mt-2"
                  >
                    85%
                  </motion.p>
                </div>

                
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>
    </section>
  )
}
