import AboutDaniele from "@/components/AboutDaniele"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

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
      <AboutDaniele />
      <Footer />
    </main>
  )
}
