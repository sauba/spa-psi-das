import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.svg"

export default function Logo() {
  return (
    <span>
      <Link href={"https://danieleandrade.com"}>
        <Image
          src={logo}
          width={220}
          height={140}
          alt="Psi Daniele Andrade"
          priority
        />
      </Link>
    </span>
  )
}
