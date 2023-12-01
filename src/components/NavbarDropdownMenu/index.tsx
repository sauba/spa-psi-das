import { Menu, Transition } from "@headlessui/react"
import { Handshake, Info, Person, UsersThree } from "@phosphor-icons/react"
import Image from "next/image"
import homeLogo from "../../../public/logo.svg"
import perfilDani from "../../../public/perfilDani.svg"

export default function NavbarDropdownMenu() {
  return (
    <div className="flex justify-start items-start">
      <Menu as="div" className="relative">
        {/* Menu Button */}
        <Menu.Button className="inline-flex justify-center w-full rounded-md">
          <Image src={homeLogo} width={300} height={300} alt="" />
        </Menu.Button>

        {/* Menu Items */}
        <Transition>
          <Menu.Items className="origin-top-left absolute left-0 w-56 rounded-md bg-black text-white">
            <div className="flex-col justify-center items-center">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`
                flex
                py-2
                justify-evenly
                items-center                
                ${active ? "bg-indigo-500 text-white font-bold" : "text-white"}
              `}
                  >
                    <Image
                      src={perfilDani}
                      width={32}
                      height={32}
                      alt=""
                      className="rounded-full"
                    />
                    <a
                      href="#aboutDaniele"
                      className={`
                    flex
                    items-center
                    px-4
                    py-2
                    text-sm
                  `}
                    >
                      Quem Sou Eu
                    </a>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`
                flex
                py-2
                justify-evenly
                items-center                
                ${active ? "bg-indigo-500 text-white font-bold" : "text-white"}
              `}
                  >
                    <Handshake
                      size={32}
                      className={`${
                        active ? "bg-indigo-500 text-white font-bold" : ""
                      }`}
                    />
                    <a
                      href="#aboutDaniele"
                      className={`
                    flex
                    items-center
                    px-4
                    py-2
                    text-sm
                  `}
                    >
                      Abordagem
                    </a>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <Menu.Items>
                    <p
                      className={`text-center hover:cursor-none hover:font-bold`}
                    >
                      Psicoterapia
                    </p>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={`
                flex
                py-4
                justify-center
                items-center
                ${active ? "bg-indigo-500 text-white font-bold" : "text-white"}
              `}
                        >
                          <Person size={32} weight="bold" />
                          <a
                            href="#"
                            className={`
                    flex
                    items-center
                    px-4
                    py-2
                    text-sm
                    hover:text-xl
                    hover:font-bold
                  `}
                          >
                            Individual
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <Menu.Items>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={`
                flex
                py-4
                justify-center
                items-center
                ${active ? "bg-indigo-500 text-white font-bold" : "text-white"}
              `}
                        >
                          <a
                            href="#"
                            className={`
                    flex
                    items-center
                    px-4
                    py-2
                    text-sm
                    hover:text-xl
                    hover:font-bold
                  `}
                          >
                            Casal
                          </a>
                          <UsersThree size={32} weight="bold" />
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`
                flex
                py-2
                justify-center
                items-center
                ${active ? "bg-indigo-500 text-white font-bold" : "text-white"}
              `}
                  >
                    <Info size={32} />
                    <a
                      href="#"
                      className={`
                    flex
                    items-center
                    px-4
                    py-2
                    text-sm
                    hover:text-xl
                    hover:font-bold
                  `}
                    >
                      Contato
                    </a>
                  </div>
                )}
              </Menu.Item>

              {/* Menu Item Desabilitado */}
              {/* <Menu.Item disabled>
              {({ active, disabled }) => (
                <div className="flex justify-evenly items-center">
                  <HandsClapping
                    size={32}
                    className={`${
                      disabled
                        ? "text-gray-200"
                        : active
                        ? "text-white"
                        : "text-gray-300"
                    }`}
                  />
                  <a
                    href="#"
                    className={`flex items-center px-4 py-2 text-sm ${
                      disabled
                        ? "text-zinc-300"
                        : active
                        ? "bg-indigo-500 text-white"
                        : "text-gray-700"
                    }`}
                  >
                    Abordagem
                  </a>
                </div>
              )}
            </Menu.Item> */}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
