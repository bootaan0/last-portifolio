import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="mb-14 flex items-center justify-between py-2">
        <div className="flex flex-shrink-0 items-center">
       <Link href="/">
       <h1 className="bootaan">Bootaan</h1>
       </Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <Link href="https://github.com/bootaan0">
        <FaGithub />
        </Link>
        <Link href="https://instagram.com/muxammedbootaan">
        <FaInstagram />
        </Link>
        <Link href="https://so.linkedin.com/in/muxammad-bootaan-028544202">
        <FaLinkedin />
        </Link>
        <Link href="https://x.com/hawdreservearea">
        <FaSquareXTwitter />
        </Link>
        
        {/* <FaFacebook /> */}
      </div>
    </nav>
  )
}
