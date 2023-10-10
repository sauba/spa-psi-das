import {
  Flower,
  Heart,
  InstagramLogo,
  LinkedinLogo,
  TrademarkRegistered,
  WhatsappLogo,
} from "@phosphor-icons/react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer
      className={`w-full bg-black justify-center items-center text-center`}
    >
      <div
        className={`flex w-full justify-center items-center text-center text-sky-500/75 gap-10`}
      >
        <div className={`flex flex-col mt-4 font-pt-mono hover:cursor-none`}>
          <span
            className={`text-5xl lg:text-8xl text-center text-rose-500 font-allura`}
          >
            Daniele Andrade
          </span>

          <span
            className={`flex flex-col md:flex-row justify-center items-center tracking-widest gap-2 py-1`}
          >
            Psicóloga Clínica
            <Heart
              size={32}
              weight="fill"
              className="text-rose-500 animate-pulse hover:cursor-none"
            />
            CRP 02/21696
          </span>

          <span className={`py-1 tracking-wider flex-wrap`}>
            Especialista em:
          </span>

          <span className={`py-1 tracking-widest flex-wrap`}>
            Gestão de Pessoas|Coaching|PNL
          </span>

          <span
            className={`flex w-10/12 md:w-full justify-center items-center pl-16 md:pl-0 mb-4 gap-1`}
          >
            Caminhos para uma vida com mais leveza para viver
            <Flower
              size={32}
              weight="fill"
              className={`text-rose-500 animate-spin-slow hover:cursor-none`}
            />
          </span>

          <div className={`flex justify-between items-center gap-1 mr-2`}>
            <div className={`hover:animate-wiggle`}>
              <span className={`text-rose-400`}>
                <Link
                  href="https://www.instagram.com/levezaparaviver/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogo size={48} />
                </Link>
              </span>
            </div>

            <div className={`hover:animate-wiggle`}>
              <span className={`text-green-600`}>
                <Link
                  href="https://wa.me/558183049659"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappLogo size={48} />
                </Link>
              </span>
            </div>

            <div className={`hover:animate-wiggle`}>
              <span className={`text-blue-500`}>
                <Link
                  href="https://www.linkedin.com/in/psidanieleandrade/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinLogo size={48} />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex-col justify-center items-center text-center text-[10px] text-sky-800 mb-1`}
      >
        <span>Developed by Thiago José de Queiroz.</span>
        <span className={`flex justify-center items-center`}>
          Leveza Para Viver
          <TrademarkRegistered size={14} />
          2023 Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}
