"use client"
import {motion} from "framer-motion"
import { work } from "@/constant";

export default function Experience() {
  return (
    <div className="pb-5">
         <motion.h1 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -100}}
          transition={{duration: 0.5}}
       className="text-4xl flex text-center pb-2 mb-4 justify-center font-serif">Knowledge

       </motion.h1>
      <main className="text-base font-medium max-w-3xl mx-auto px-4 sm:px-6 lg:px-4">
       <div className="sm:text-sm md:text-lg lg:text-lg">
        <motion.p
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: -100}}
         transition={{duration: 1}}
        >
      I'm an experienced full-stack developer specializing in front-end technologies like React, Tailwind CSS, and Shadcn UI, as well as back-end development with Node.js and MongoDB. I build dynamic full-stack websites 
      using Next.js and create mobile applications with React Native for both Android and iOS.
        </motion.p>
       </div>
    </main>
    </div>
  )
}
