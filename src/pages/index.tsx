import AbordagemHumanista from "@/components/AbordagemHumanista"
import AboutDaniele from "@/components/AboutDaniele"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PsicoterapiaCasal from "@/components/PsicoterapiaCasal"
import PsicoterapiaIndividual from "@/components/PsicoterapiaIndividual"

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
      bg-sky-900
      `}
    >
      <Header />
      <AbordagemHumanista />
      <PsicoterapiaIndividual />
      <PsicoterapiaCasal />
      <AboutDaniele />
      <Footer />
    </main>
  )
}
