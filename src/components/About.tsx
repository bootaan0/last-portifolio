"use client"
import {  skils } from "@/constant";
import Image from "next/image";
import {motion} from "framer-motion"


export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      
      <div className="">
        <motion.div className=""
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: -100}}
         transition={{duration: 0.5}}
        >
        <div className="flex text-center justify-center">
        <h1 className="text-center text-4xl">About me</h1>
          
        </div>
        </motion.div>

        <motion.div className="w-full "
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 0.5}}
        >
        <div className="flex text-center">
        <p className="my-2 p-5 text-xl mt-3 ">
           {skils}
            </p>
        </div>
        </motion.div>

      </div>
    </div>
  )
}
