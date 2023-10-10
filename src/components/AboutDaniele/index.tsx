import Image from "next/image"
import perfilDani from "../../../public/perfilDani.png"

export default function AboutDaniele() {
  return (
    <div
      className={`
        pt-52
        md:pt-20
        md:pb-20
      text-zinc-300
      `}
      id="aboutDaniele"
    >
      <div className={`flex flex-col justify-center items-center pt-40`}>
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
            className={`font-allura text-5xl md:text-8xl hover:text-rose-500`}
          >
            Daniele Andrade
          </span>
        </h1>
      </div>

      <div
        className={`m-4 flex flex-col gap-3 text-lg md:text-2xl text-center font-Shadows-into-light-two tracking-widest hover:cursor-none hover:text-green-500`}
      >
        <h1>Sou Psicóloga e Especialista em Gestão de Pessoas.</h1>
        <h1>
          Atuo na área clínica com psicoterapia para adultos, terapia de casal e
          projetos terapêuticos em grupo.
        </h1>
        <h1>
          Possuo Certificação em Coaching Sistêmico e Programação
          Neurolinguística.
        </h1>
        <h1>Especialista em Constelações Intrauterinas.</h1>
        <h1>
          Sempre em busca de aperfeiçoamento, atualmente cursando formação em
          Constelações Sistêmicas.
        </h1>

        <h1>
          Sou uma profissional da área do comportamento humano que acredita na
          construção de caminhos para uma vida com mais leveza para viver.
        </h1>
      </div>
    </div>
  )
}
