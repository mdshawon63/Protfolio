import { useMemo, useState, useEffect } from "react"
import Background from "../components/Background"
import { motion } from "framer-motion"
import React from "react"
import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import avatar from "../assets/shawon.jpg"

const socials = [
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-shawon-sikdar-b67098388/" },
  { Icon: FaGithub, label: "Github", href: "https://github.com/mdshawon63" }
]

export default function Home() {
  const roles = useMemo(() => ['Web Developer', "Frontend Developer", "React Developer"], [])

  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const current = roles[index]
    
    const blinkInterval = setInterval(() => {
      setBlink(prev => !prev)
    }, 500)
    
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex(prev => prev + 1)
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200)
      } else if (deleting && subIndex > 0) {
        setSubIndex(prev => prev - 1)
      } else if (deleting && subIndex === 0) {
        setDeleting(false)
        setIndex(prev => (prev + 1) % roles.length)
      }
    }, deleting ? 40 : 60)

    return () => {
      clearTimeout(timeout)
      clearInterval(blinkInterval)
    }
  }, [subIndex, index, deleting, roles])

  return (
    <section id="home" className="w-full h-screen relative bg-black overflow-hidden">
      <Background />

      <div className="absolute inset-0">
        <div
          className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full
          bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse">
        </div>
        <div
          className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full
          bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500">
        </div>
      </div>

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl px-4">
        
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            
         
            <motion.div 
              className="order-1 lg:order-2 mb-10 lg:mb-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#1cd8d2] to-[#302b63] rounded-full opacity-20 blur-xl"></div>
                
                <motion.img 
                  src={avatar} 
                  alt="Md Shawon Sikdar"
                  className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-gray-800 object-cover shadow-2xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
              <motion.div
                className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide text-white min-h-[1.6em] flex justify-center lg:justify-start"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                <span>
                  {roles[index]?.substring(0, subIndex)}
                  <span className={`ml-1 ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] bg-clip-text text-transparent drop-shadow-lg text-center lg:text-left"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                Hello I'm 
                <br />
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold lg:text-7xl text-white">
                  Md Shawon Sikdar
                </span>
              </motion.h1>

              <motion.p 
                className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}>
                I turn complex ideas into seamless, high-impact web experiences - building modern, scalable, and lighting-fast applications that make a difference
              </motion.p>
              
        
              <motion.div 
                className="mt-8 flex gap-6 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl sm:text-3xl"
                    aria-label={social.label}
                  >
                    <social.Icon />
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}