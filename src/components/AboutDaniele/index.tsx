import Image from "next/image"
import perfilDani from "../../../public/perfilDani2.svg"
export default function AboutDaniele() {
  return (
    <div
      className={`
        flex
        flex-row
        xl:flex
        justify-center
        items-center
        pt-4
        md:pt-8
        md:pb-20
      text-zinc-300
      `}
      id="aboutDaniele"
    >
      <Image
        src={perfilDani}
        quality={100}
        style={{ objectFit: `cover` }}
        className={`w-3/12 opacity-90`}
        alt=""
        priority
      />
      <div
        className={`w-full text-center xl:p-8 sm:text-md md:text-2xl xl:text-4xl tracking-widest leading-loose gap-3 font-Shadows-into-light-two`}
      >
        <span className={`flex flex-col justify-center items-center`}>
          <p
            className={`text-left text-xl md:text-4xl xl:text-5xl font-bad-script hover:cursor-none flex items-center gap-2`}
          >
            Olá, eu sou
            <span
              className={`font-allura text-3xl md:text-8xl animate-bounce-slow hover:text-rose-500`}
            >
              Daniele Andrade
            </span>
          </p>
        </span>

        <p>
          Sou Psicóloga e atuo na área clínica há 5 cinco anos. Sempre
          direcionei meus atendimentos ao público adulto, e você pode contar
          comigo através da Psicoterapia Individual e da Terapia de Casal, ambas
          apoiadas na abordagem humanista fenomenológica-existencial. As sessões
          acontecem no formato online, o que permite que a gente se conecte com
          flexibilidade e de qualquer parte do Brasil, alcançando, também,
          brasileiros que vivem fora do país. Sou Pós Graduada em Gestão de
          Pessoas e tenho Certificação em Coaching Sistêmico e outras
          terapêuticas.
        </p>
      </div>
    </div>
  )
}
