import Image from "next/image"
import logo from "../../public/logo.svg"

export default function Loading() {
  return (
    <div
      className={`w-full flex justify-center items-center min-h-screen bg-black text-rose-500`}
    >
      <Image src={logo} width={500} height={500} alt="" />
      <h1 className={`text-4xl animate-ping`}>Carregando...</h1>
    </div>
  )
}
