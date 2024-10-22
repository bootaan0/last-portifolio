"use client"
import { RiNodejsFill, RiReactjsLine, RiTailwindCssFill, RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import {motion} from "framer-motion"
import { FiFigma } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";


const iconDurations = (duration: any) => ({
  initial: {y: -10},
  animate:{
    y: [10, -10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
export default function Technology() {
  return (
    <div
   
    className="border-b border-neutral-800 pb-24">
      <motion.h1
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Essentials Tools I use</motion.h1>
    
      <motion.div 
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
      
      <motion.div 
      
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine  className="text-cyan-400 text-7xl"/>
        </motion.div>

      <motion.div
      
       initial="initial"
       animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiNodejsFill  className="text-green-500 text-7xl"/>
        </motion.div>
        
       
       
        <motion.div
        
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb  className="text-green-500 text-7xl"/>
        </motion.div>

        <motion.div 
       
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill  className="text-cyan-500 text-7xl"/>
        </motion.div>

        <motion.div
         
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs  className="text-white text-7xl"/>
        </motion.div>
      
      </motion.div>
    </div>
  )
}
