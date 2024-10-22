"use client"

import { work } from "@/constant";
import {motion} from "framer-motion"

export default function Expert() {
  return (
    <div className="border-b border-neutral-900 pb-4">
       <motion.h1 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -100}}
          transition={{duration: 0.5}}
       className="text-4xl flex text-center pb-5 mb-4 justify-center font-serif">Profile Overview

       </motion.h1>
      <div>
        {work.map((expert, index)  => (
          <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}
          key={index} className="">
             <p className="text-base sm:text-base md:text-lg lg:text-xl mx-1"> {expert.description}</p>
          </motion.div>
        ))}

      </div>
      
    </div>
  )
}
