import {
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
      className={`w-full bg-black justify-center items-center text-center min-h-screen`}
      id="contato"
    >
      <div
        className={`flex w-full justify-center items-center text-center text-red-50 min-h-screen gap-10`}
      >
        <div className={`flex flex-col mt-4 font-pt-mono hover:cursor-none`}>
          <span
            className={`text-5xl lg:text-8xl text-center text-rose-500 font-allura`}
          >
            Daniele Andrade
          </span>

          <span
            className={`flex flex-col md:flex-row justify-center items-center tracking-widest gap-2`}
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
            Gestão de Pessoas|Coaching Sistêmico
          </span>

          <span
            className={`pt-8 pb-2 text-lg text-rose-500 tracking-widest flex-wrap`}
          >
            Entre em Contato
          </span>

          <div className={`flex justify-center items-center gap-6`}>
            <div className={`hover:animate-wiggle`}>
              <span className={`text-rose-400`}>
                <Link
                  href="https://www.instagram.com/psidanieleandrade/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogo size={48} />
                </Link>
              </span>
            </div>

            <div className={`animate-wiggle`}>
              <span className={`text-green-600`}>
                <Link
                  href="https://wa.me/558189689423"
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
        className={`flex-col justify-center items-center text-center text-[8px] text-sky-800 mb-1`}
      >
        <span className={`flex justify-center tracking-tighter`}>
          Developed by Thiago J. de Queiroz. Psicóloga Daniele Andrade
          <TrademarkRegistered size={10} />
          2023 Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}
