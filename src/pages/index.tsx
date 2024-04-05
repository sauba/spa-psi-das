import AbordagemHumanista from "@/components/AbordagemHumanista"
import About from "@/components/About"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import NavbarTabs from "@/components/NavbarTabs"
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
      justify-center
      bg-gradient-to-bl
      from-stone-400
      to-red-50
      `}
    >
      <Header />
      <About />
      <AbordagemHumanista />
      <NavbarTabs />
      <Footer />
    </main>
  )
}
