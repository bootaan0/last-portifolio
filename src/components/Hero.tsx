"use client"

import Image from "next/image";

import { motion } from "framer-motion"
import { hero } from "@/constant";
// import * as motion from "framer-motion/client"

const container = (delay: any) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay},
  },
})

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
          
        {/* <motion.span 
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-r from-sky-500 via-blue-500 to-red-500  bg-clip-text text-3xl
         text-transparent">
         I'm Full Stack web Developer</motion.span> */}
         <motion.h1   
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="pb-4 text-2xl text-neutral-200   lg:mt-5 lg:text-3xl font-serif">
         Hello, My Name is Mohamed </motion.h1>

            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-medium ">{hero}</motion.p>
            {/* <button className="bg-red-600 text-white  rounded-lg p-3">Contact</button> */}
        </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-1">
        <div className="flex justify-center"> 
        <motion.div 
          initial={{x: 100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 1, delay: 1.2}}
        >
       <div style={{background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))'}}>
       <Image
        src="/mb.png"
        width={400}
        height={400}
        alt="sawir"
        className="lg:mb-10 rounded-3xl bg-gradient-to-t from-sky-300 to-red-100"
        />
       </div>
        </motion.div>
        </div>
        </div>
      

      </div>
    </div>
  )
}
