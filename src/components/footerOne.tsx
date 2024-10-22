// components/Footer.tsx
"use client"
import {motion} from "framer-motion"

export default function FooterOne() {
  return (
   
  
    <footer className="border-neutral-950 text-white py-8">
        
      <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-white">
        
        {/* Contact Section */}
        <h5 className="font-bold text-lg mb-4">Contact Us</h5>
        <p>Mogadishu, Somalia.</p>
        <motion.p
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: 100}}
         transition={{duration: 0.5}}
        className="text-sm">📧 Email: <a href="mailto:mahmedbotan@gmail.com" className="text-blue-400"
        >mahmedbotan@gmail.com</a></motion.p>
        <motion.p 
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: -100}}
         transition={{duration: 1}}
        className="text-sm">📞 Phone: +252610743060</motion.p>
        
        
        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 text-white">
         
        </div>
      </div>

      <div className="text-center mt-6 border-t border-gray-900 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Bootaan </p>
      </div>
    </footer>
  );
};


