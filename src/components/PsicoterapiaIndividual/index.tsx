import Image from "next/image"
import patient from "../../../public/patient.svg"

export default function PsicoterapiaIndividual() {
  return (
    <div
      className={`
      w-full
      flex
      xs:flex
      md:flex
      lg:flex
      xl:flex
      justify-center
      items-center
      text-zinc-300
      `}
      id="abordagem"
    >
      <div className={`w-9/12 flex-col`}>
        <h1
          className={`text-left text-2xl xl:text-6xl font-allura text-teal-500`}
        >
          Psicoterapia Individual
        </h1>
        <div
          className={`flex-col text-left px-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl tracking-widest leading-loose`}
        >
          <p className={``}>
            A psicoterapia individual é um processo mediado por profissional
            especializado, tendo como base o conhecimento científico, os
            princípios e as técnicas da Psicologia. Configura uma relação
            profissional entre terapeuta e cliente, tratando-se de um processo
            colaborativo e que objetiva a promoção de autoconhecimento do
            paciente.
          </p>
          <p className={``}>
            Predominantemente, configura um compromisso semanal, com sessões
            agendadas em dia e horário fixo, conforme disponibilidade do cliente
            e da psicóloga, tendo duração de 45 minutos.
          </p>
          <p className={``}>
            A terapia é ainda um espaço que promove escuta, acolhimento,
            psicoeducação, desenvolvimento sistêmico (área pessoal,
            profissional, relacionamentos e qualidade de vida), proporcionando
            melhor compreensão e gestão das emoções, o que contribui,
            diretamente, para a saúde mental.
          </p>
        </div>
      </div>

      <div className={`w-3/12`}>
        <Image
          src={patient}
          quality={100}
          style={{ objectFit: `contain` }}
          className={`opacity-95 rounded-l-full`}
          alt=""
          priority
        />
      </div>
    </div>
  )
}
