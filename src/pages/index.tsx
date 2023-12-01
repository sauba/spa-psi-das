import AbordagemHumanista from "@/components/AbordagemHumanista"
import AboutDaniele from "@/components/AboutDaniele"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PsicoterapiaCasal from "@/components/PsicoterapiaCasal"
import PsicoterapiaIndividual from "@/components/PsicoterapiaIndividual"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Daniele Andrade Blog",
  description: "This is the Daniele Andrade Blog",
}

export default function Home() {
  return (
    <main
      className={`
      flex
      flex-col
      w-full
      min-h-screen
      items-center
      justify-between
      bg-black
      `}
    >
      <Header />
      <AboutDaniele />
      <AbordagemHumanista />
      <PsicoterapiaIndividual />
      <PsicoterapiaCasal />

      <Footer />
    </main>
  )
}
