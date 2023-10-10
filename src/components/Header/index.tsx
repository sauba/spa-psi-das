import Navbar from "../Navbar"

export default function Header() {
  return (
    <header
      className={`w-full fixed top-0 right-0 left-0 bg-black font-pt-mono tracking-widest`}
    >
      <Navbar />
    </header>
  )
}
