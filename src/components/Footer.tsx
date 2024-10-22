import { contact, } from "@/constant";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-b border-neutral-800 pb-20 flex flex-col p-4">
      <h1 className="my-10 text-center text-3xl">Get in touch</h1>
    <div className="text-center tracking-tighter">
        <p className="my-3">
            {contact.address}
        </p>
        <p className="my-3">
            {contact.phoneNo}
        </p>
       <Link href="#" className="border-b">{contact.email}</Link>
    </div>
    </div>
  )
}
