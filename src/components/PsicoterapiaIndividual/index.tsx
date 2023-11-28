import Image from "next/image"
import patient from "../../../public/patient.svg"

export default function PsicoterapiaIndividual() {
  return (
    <div
      className={`
      w-full
      my-8
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
      <div className={`w-10/12 flex-col`}>
        <h1
          className={`xl:pt-8 pl-8 text-left text-2xl xl:text-6xl font-allura text-violet-400 tracking-widest`}
        >
          Psicoterapia Individual
        </h1>
        <div
          className={`flex-col text-right xl:pt-8 xl:px-8 sm:text-md md:text-2xl xl:text-2xl tracking-widest leading-loose gap-3`}
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

      <div className={`w-2/12`}>
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
