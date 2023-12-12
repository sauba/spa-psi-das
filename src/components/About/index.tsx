import Image from "next/image";
import imgProfile from "../../../public/perfilDani2.svg";

export default function About() {
  return (
    <div
      className={`
        w-full
        flex
        flex-col
        mx-auto
        justify-start
        items-center
      text-amber-950
      `}
      id="aboutDaniele"
    >
      <span
        className={`
            flex
            flex-col
            justify-center
            items-center
            gap-3
          `}
      >
        <p
          className={`
              flex
              text-center
              text-2xl
              2xl:text-6xl
              font-bad-script
              hover:cursor-none
              items-center
            `}
        >
          Olá, eu sou
          <span className={`font-allura text-4xl 2xl:text-8xl pl-2`}>
            <p className={`animate-bounce-slow`}>
              Daniele Andrade
            </p>
          </span>
        </p>
      </span>

      <div>
        <Image src={imgProfile} width={300} height={300} className={`pb-1 rounded-tl-lg rounded-br-lg mx-auto`} priority alt="Psicologa Daniele Andrade" />
      </div>
      <p className={`
            px-3
            2xl:px-8
            2xl:pt-4
            2xl:text-3xl
            text-center
            tracking-widest
            leading-6
          `}>
        Sou Psicóloga e atuo na área clínica, há 5 anos, atendendo o público adulto,
        com Psicoterapia Individual e Terapia de Casal. Pós Graduada em Gestão de Pessoas, com Certificação em Coaching Sistêmico e outras
        terapêuticas.
      </p>
    </div>
  )
}
