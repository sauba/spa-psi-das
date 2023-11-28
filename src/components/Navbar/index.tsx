import Link from "next/link"
import Login from "../Login"
import Logo from "../Logo"

export default function Navbar() {
  return (
    <ul
      className={`flex flex-col md:flex-row w-full justify-center items-center text-zinc-300 bg-black gap-2 xl:gap-5 p-4`}
    >
      <li className={`hover:cursor-pointer md:hover:text-xl lg:hover:text-3xl`}>
        <Logo />
      </li>

      <li
        className={`hover:cursor-pointer hover:text-rose-500 hover:animate-wiggle md:hover:text-xl lg:hover:text-3xl`}
      >
        <Link href="#aboutDaniele" className={`transition`}>
          Quem Sou Eu
        </Link>
      </li>

      <li
        className={`hover:cursor-pointer hover:text-rose-500 hover:animate-wiggle md:hover:text-xl lg:hover:text-3xl`}
      >
        <Link href="#abordagem" className={`transition`}>
          Abordagem
        </Link>
      </li>

      <li
        className={`hover:cursor-pointer hover:text-rose-500 hover:animate-wiggle md:hover:text-xl lg:hover:text-3xl`}
      >
        Psicoterapia
        <ul
          className={`flex flex-col md:flex-row w-full justify-center items-center text-zinc-300 gap-2 xl:gap-5 p-4`}
        >
          <li
            className={`hover:cursor-pointer hover:text-rose-500 hover:animate-wiggle md:hover:text-xl lg:hover:text-3xl`}
          >
            <Link href="#psicoterapiaIndividual" className={`transition`}>
              Individual
            </Link>
          </li>
          <li
            className={`hover:cursor-pointer hover:text-rose-500 hover:animate-wiggle md:hover:text-xl lg:hover:text-3xl`}
          >
            <Link href="#psicoterapiaCasal" className={`transition`}>
              Casal
            </Link>
          </li>
        </ul>
      </li>
      <li
        className={`hover:cursor-pointer hover:text-rose-500 hover:animate-wiggle md:hover:text-xl lg:hover:text-3xl`}
      >
        <Link href="#footer" className={`transition`}>
          Contato
        </Link>
      </li>

      <li
        className={`hover:cursor-pointer hover:text-rose-500 hover:animate-pulse-slow-stop md:hover:text-xl lg:hover:text-3xl`}
      >
        <Link href={"/api/login"}>
          <Login />
        </Link>
      </li>
    </ul>
  )
}
