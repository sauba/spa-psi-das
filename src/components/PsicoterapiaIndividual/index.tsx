export default function PsicoterapiaIndividual() {
  return (
    <div
      className={`
        w-full
        flex-col
        justify-center
        items-center
        text-zinc-300
        bg-patient-happy
        bg-cover
      `}
      id="psicoterapiaIndividual"
    >
      <div
        className={`text-center mt-72 xl:mt-0 bg-zinc-900 bg-opacity-90 sm:text-xs md:text-2xl xl:text-4xl tracking-widest font-Shadows-into-light-two`}
      >
        <h1
          className={`pl-8 text-left text-2xl xl:text-8xl font-allura text-rose-500 tracking-widest`}
        >
          Psicoterapia Individual
        </h1>

        <p className={`px-6 xl:mb-80 pb-8 xl:pb-80`}>
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
