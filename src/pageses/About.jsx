import { motion } from "framer-motion"
import React from "react"
import p from "../assets/about.jpg"

export default function About(){

const status = [
  {label : "Experience", value : "8 month"},
  {label : "Speciality", value : "Front-end & React"}
]

  const glows =[
    "-top-10 -left-10 w-[360] h-[360] opacity-20 blur-[120]",
    "bottom-0 right-10 w-[420] h-[420] opacity-15 blur-[140] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220] h-[220] opacity-10 blur-[100px]"
  ]
  return(
    <section id="about"
    className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
       {glows.map((c,i) => (
        <div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`} />
       ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
       <motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
       initial={{opacity:0, y:24}}
       whileInView={{opacity:1, y:0}}
       transition={{duration:0.6}}
       viewport={{once:true, amount:0.4}}>

        <motion.div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden
        shadow-2xl bg-gradient-to-br from-[#1CD8D2]/20 to-[#302b63] border border-[#1cd8d2]/25"
        whileHover={{scale:1.02}}
        transition={{type:"spring", stiffness:200, damping:18}}>
          <img src={p} alt="profile" className="absolute inset-0"/>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent
          bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
            Md Shawon Sikdar
          </h2>
          <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
            Front-End Devloper
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg mx-w-2xl md:max-w-3xl">
            I bulid scalable, modern applications with a strong focus on clean architecture , delightful and performance . My toolkit span Java, React,Tailwind CSS and RestApi bringing ideas to life from concept to production with robust APIs and smooth interfaces.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl">
            {status.map((item, i) => (
              <motion.div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
              initial={{opacity:0, y:10}}
              whileInView={{opacity:1 , y:0}}
              transition={{delay:0.05 * i, duration:0.4}}
              viewport={{once:true, amount:0.3}}>

              <div className="text-sm text-gray-400">{item.label}</div>
              <div className="text-base font-semibold">{item.value}</div>
              </motion.div>
            ))}
          </div>

        </div>

       </motion.div>

       <motion.div className="text-center md:text-left"
       initial={{opacity:0, x:-30}}
       whileInView={{opacity:1, x:0}}
       transition={{duration: 0.6}}
       viewport={{once:true, amount:0.4}}> 
       <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">About Me </h3>
       <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
        I'm Web Devloper - passionate about building fast, resilient applications and sharing coding insights on Instagram and YouTube
       </p>
       <p className="mt-4 text-gray-400 text-base sm:text-lg">
        I love turning ideas into scalable, user-friendly product that make a impct
       </p>

       </motion.div>
      </div>
    </section>
  )
}