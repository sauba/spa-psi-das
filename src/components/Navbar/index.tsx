import { Fingerprint } from "@phosphor-icons/react"
import Link from "next/link"
import Logo from "../Logo"
export default function Navbar() {
  return (
    <ul
      className={`flex flex-col md:flex-row w-full justify-center items-center text-zinc-300 gap-2 xl:gap-5 p-4`}
    >
      <li
        className={`hover:cursor-pointer hover:text-rose-500 hover:animate-wiggle md:hover:text-xl lg:hover:text-3xl`}
      >
        <Logo />
      </li>

      <li
        className={`hover:cursor-pointer hover:text-rose-500 hover:animate-wiggle md:hover:text-xl lg:hover:text-3xl`}
      >
        Artigos
      </li>
      <li
        className={`hover:cursor-pointer hover:text-rose-500 hover:animate-wiggle md:hover:text-xl lg:hover:text-3xl`}
      >
        Psicoterapias
      </li>
      <li
        className={`hover:cursor-pointer hover:text-rose-500 hover:animate-wiggle md:hover:text-xl lg:hover:text-3xl`}
      >
        <Link href="#aboutDaniele" className={`transition`}>
          Quem Sou Eu
        </Link>
      </li>

      <li
        className={`hover:cursor-pointer hover:text-rose-500 hover:animate-pulse-slow-stop md:hover:text-xl lg:hover:text-3xl`}
      >
        <Fingerprint size={32} />
      </li>
    </ul>
  )
}
