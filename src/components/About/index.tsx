import Image from "next/image";
import imgProfile from "../../../public/perfilDani2.svg";

export default function About() {
  return (
    <div
      className={`
        flex
        lg:flex-col
        xl:flex
      text-zinc-900  
      `}
      id="aboutDaniele"
    >
      <div className="w-4/12">
        <Image src={imgProfile} width={500} height={500} className={`w-full m-auto rounded-xl`} priority alt="Psicologa Daniele Andrade" />
      </div>

      <div className="w-8/12">
        <span
          className={`
            flex
            flex-col
            justify-center
            items-center
          `}
        >
          <p
            className={`
              text-justify
              text-lg
              2xl:pt-40
              2xl:text-8xl
              md:text-4xl
              xl:text-4xl
              font-bad-script
              hover:cursor-none
              flex
              items-center
              gap-3
            `}
          >
            Olá, eu sou
            <span
              className={`
                font-allura
                animate-bounce-slow
              text-rose-500
                text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
                2xl:text-8xl
                3xl:text-9xl

              `}
            >
              Daniele Andrade
            </span>
          </p>
        </span>

        <p className={`
            px-3
            pt-8
            2xl:px-8
            2xl:pt-32
            2xl:text-3xl
            text-center
            tracking-widest
            leading-6
          `}>
          Sou Psicóloga e atuo na área clínica, há 5 anos, atendendo o público adulto,
          com Psicoterapia Individual e Terapia de Casal.
        </p>

        <p className={`
            px-3
            pt-8
            2xl:px-8
            2xl:pt-8
            2xl:text-3xl
            text-center
            tracking-widest
            leading-6
          `}>
          Pós Graduada em Gestão de Pessoas, com Certificação em Coaching Sistêmico e outras
          terapêuticas.
        </p>
      </div>
    </div>
  )
}
