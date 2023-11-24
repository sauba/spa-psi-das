import Image from "next/image"
import perfilDani from "../../../public/perfilDani.png"

export default function AboutDaniele() {
  return (
    <div
      className={`
        pt-4
        md:pt-8
        md:pb-20
      text-zinc-300
      `}
      id="aboutDaniele"
    >
      <div className={`flex flex-col justify-center items-center`}>
        <Image
          src={perfilDani}
          alt="Foto de Daniele de Andrade Silva"
          className={`rounded-full hover:animate-wiggle hover:cursor-pointer`}
          width={100}
          height={100}
        />
        <h1
          className={`text-center text-2xl md:text-4xl xl:text-5xl font-bad-script hover:cursor-none flex items-center gap-2`}
        >
          Olá, eu sou
          <span
            className={`font-allura text-4xl md:text-8xl hover:text-rose-500`}
          >
            Daniele Andrade
          </span>
        </h1>
      </div>

      <div
        className={`m-4 flex flex-col gap-3 text-lg md:text-2xl text-center font-Shadows-into-light-two tracking-widest hover:cursor-none hover:text-green-500`}
      >
        <h1>Sou Psicóloga e atuo na área clínica há 5 cinco anos.</h1>
        <h1>
          Sempre direcionei meus atendimentos ao público adulto, e você pode
          contar comigo através da Psicoterapia Individual e da Terapia de
          Casal, ambas apoiadas na abordagem humanista
          fenomenológica-existencial.
        </h1>
        <h1>
          As sessões acontecem no formato online, o que permite que a gente se
          conecte com flexibilidade e de qualquer parte do Brasil, alcançando,
          também, brasileiros que vivem fora do país.
        </h1>
        <h1>
          Sou Pós Graduada em Gestão de Pessoas e tenho Certificação em Coaching
          Sistêmico e outras terapêuticas.
        </h1>
      </div>
    </div>
  )
}
