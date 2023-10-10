import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.svg"

export default function Logo() {
  return (
    <span>
      <Link href={"/"}>
        <Image
          src={logo}
          width={300}
          height={220}
          alt="Leveza Para Viver"
          priority
        />
      </Link>
    </span>
  )
}
