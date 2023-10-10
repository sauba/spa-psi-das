import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logoBranca.svg"

export default function Logo() {
  return (
    <span>
      <Link href={"/"}>
        <Image
          src={logo}
          width={200}
          height={256}
          alt="Leveza Para Viver"
          priority
        />
      </Link>
    </span>
  )
}
