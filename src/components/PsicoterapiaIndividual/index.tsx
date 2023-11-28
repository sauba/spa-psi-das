import Image from "next/image"
import patient from "../../../public/patient.svg"

export default function PsicoterapiaIndividual() {
  return (
    <div
      className={`
      w-full
      flex-col
      justify-center
      items-center
      text-zinc-300
      `}
      id="psicoterapiaIndividual"
    >
      <div className={`w-full flex justify-center items-center gap-12`}>
        <h1
          className={`w-11/12 text-right text-2xl xl:text-8xl font-allura text-violet-400 tracking-widest`}
        >
          Psicoterapia Individual
        </h1>
        <Image
          src={patient}
          quality={100}
          style={{ objectFit: `contain`, objectPosition: `right` }}
          className={`w-1/12 opacity-95 rounded-l-full`}
          alt=""
          priority
        />
      </div>

      <div
        className={`w-full xl:p-8 text-right sm:text-md md:text-2xl xl:text-2xl tracking-widest leading-loose gap-3`}
      >
        <p>
          A psicoterapia individual é um processo mediado por profissional
          especializado, tendo como base o conhecimento científico, os
          princípios e as técnicas da Psicologia. Configura uma relação
          profissional entre terapeuta e cliente, tratando-se de um processo
          colaborativo e que objetiva a promoção de autoconhecimento do
          paciente. Predominantemente, configura um compromisso semanal, com
          sessões agendadas em dia e horário fixo, conforme disponibilidade do
          cliente e da psicóloga, tendo duração de 45 minutos. A terapia é ainda
          um espaço que promove escuta, acolhimento, psicoeducação,
          desenvolvimento sistêmico (área pessoal, profissional, relacionamentos
          e qualidade de vida), proporcionando melhor compreensão e gestão das
          emoções, o que contribui, diretamente, para a saúde mental.
        </p>
      </div>
    </div>
  )
}
