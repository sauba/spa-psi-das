import { Menu, Transition } from "@headlessui/react"
import { Handshake, Info, Person, UsersThree } from "@phosphor-icons/react"
import Image from "next/image"
import { Fragment } from "react"
import homeLogo from "../../../public/logo.svg"
import perfilDani from "../../../public/perfilDani.svg"

export default function NavbarDropdownMenu() {
  return (
    <div className="flex justify-start items-start">
      <Menu as="div" className="relative">
        {({ open }) => (
          <Fragment>
            <Menu.Button className="inline-flex justify-center w-full rounded-md">
              <Image src={homeLogo} width={200} height={200} alt="" />
            </Menu.Button>

            {/* Menu Items */}
            <Transition
              show={open}
              enter="transform transition duration-100 ease-in"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-75 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-left absolute left-0 w-56 rounded-md bg-black text-white">
                <div className="flex-col justify-center items-center">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center                              
                          ${active ? "bg-indigo-500 text-white font-bold" : "text-white"}
                        `}
                      >
                        <a
                          href="#aboutDaniele"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            gap-3
                          `}
                        >
                          <Image
                            src={perfilDani}
                            width={32}
                            height={32}
                            alt=""
                            className="rounded-full"
                          />
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
                        <a
                          href="#abordagem"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            gap-3
                          `}
                        >
                          <Handshake
                            size={32}
                            className={`${active ? "bg-indigo-500 text-white font-bold" : ""
                              }`}
                          />
                          Abordagem
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Menu.Items>
                        <p
                          className={`text-center hover:cursor-none hover:font-bold pt-8`}
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
                                ${active
                                  ? "bg-indigo-500 text-white font-bold"
                                  : "text-white"
                                }
                              `}
                            >
                              <a
                                href="#psicoterapiaIndividual"
                                className={`
                                  flex
                                  items-center
                                  px-4
                                  py-2
                                  text-sm
                                  gap-3
                                  hover:font-bold
                                `}
                              >
                                <Person size={32} weight="bold" />
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
                                ${active
                                  ? "bg-indigo-500 text-white font-bold"
                                  : "text-white"
                                }
                              `}
                            >
                              <a
                                href="#psicoterapiaCasal"
                                className={`
                                  flex
                                  items-center
                                  px-4
                                  py-2
                                  text-sm
                                  gap-3
                                  hover:font-bold
                                `}
                              >
                                <UsersThree size={32} weight="bold" />
                                Casal
                              </a>
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
                          ${active
                            ? "bg-indigo-500 text-white font-bold"
                            : "text-white"
                          }
                        `}
                      >
                        <a
                          href="#contato"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            gap-3
                            hover:font-bold
                          `}
                        >
                          <Info size={32} />
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
          </Fragment>
        )}
      </Menu>
    </div>
  )
}
