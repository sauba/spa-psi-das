import NavbarDropdownMenu from "../NavbarDropdownMenu"

export default function Header() {
  return (
    <header
      className={`w-full fixed z-20 top-0 right-0 left-0 font-pt-mono tracking-widest border-none outline-none`}
    >
      <NavbarDropdownMenu />
    </header>
  )
}
