import Image from "next/image"
import patientImg from "../../../public/patient.svg"

export default function PsicoterapiaIndividual() {
  return (
    <div
      className={`
      mt-8
      text-zinc-300
      `}
      id="psicoterapiaIndividual"
    >
      <h1
        className={`ml-8 pt-4 xl:pt-8 text-left text-2xl xl:text-7xl font-allura`}
      >
        Psicoterapia Individual
      </h1>

      <div
        className={`my-4 xs:flex-col xl:flex font-Shadows-into-light-two tracking-widest gap-5`}
      >
        <div className={`flex flex-col gap-8`}>
          <h1
            className={`text-right px-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest leading-loose`}
          >
            A psicoterapia individual é um processo mediado por profissional
            especializado, tendo como base o conhecimento científico, os
            princípios e as técnicas da Psicologia. Configura uma relação
            profissional entre terapeuta e cliente, tratando-se de um processo
            colaborativo e que objetiva a promoção de autoconhecimento do
            paciente.
          </h1>
          <h1
            className={`text-right px-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest leading-loose`}
          >
            Predominantemente, configura um compromisso semanal, com sessões
            agendadas em dia e horário fixo, conforme disponibilidade do cliente
            e da psicóloga, tendo duração de 45 minutos.
          </h1>
          <h1
            className={`text-right px-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest leading-loose`}
          >
            A terapia é ainda um espaço que promove escuta, acolhimento,
            psicoeducação, desenvolvimento sistêmico (área pessoal,
            profissional, relacionamentos e qualidade de vida), proporcionando
            melhor compreensão e gestão das emoções, o que contribui,
            diretamente, para a saúde mental.
          </h1>
        </div>

        <Image
          src={patientImg}
          width={400}
          height={400}
          className={`xl:mx-auto rounded-tl-full rounded-bl-full`}
          alt="Paciente Acompanhando terapia com psicólogo remotamente"
        />
      </div>
    </div>
  )
}
