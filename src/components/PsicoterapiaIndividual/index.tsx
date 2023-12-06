export default function PsicoterapiaIndividual() {
  return (
    <div
      className={`
        flex
        flex-col
        xl:flex
        min-h-screen
      text-zinc-300
        bg-patient-happy
        bg-contain
        bg-no-repeat
        bg-right
        rounded-full
      `}
      id="psicoterapiaIndividual"
    >
      <div className="bg-zinc-900 bg-opacity-30 min-h-screen">
        <p
          className={`
              md:text-4xl
              xl:text-4xl
              2xl:pt-40
              2xl:pl-12
              2xl:text-left
              2xl:text-6xl
              font-bad-script
              hover:cursor-none
              flex
              items-center
              gap-3
            `}
        >
          Psicoterapia Individual
        </p>

        <p className={`
            px-3
            2xl:pr-96
            2xl:mr-96
            2xl:pl-12
            2xl:pt-32
            2xl:text-4xl
            text-left
            tracking-widest
            leading-10
          `}>
          A Psicoterapia Individual é um processo mediado por profissional especializado, tendo como base
          o conhecimento científico, os princípios e as técnicas da Psicologia.
          Na terapia, o paciente encontra um espaço de escuta, acolhimento, psicoeducação e desenvolvimento
          de sua saúde mental.
          Sendo esses aspectos desenvolvidos pela promoção do autoconhecimento, o qual, atua, na vida do indivíduo,
          trazendo melhor compreensão, vivência e gestão das emoções.
        </p>
      </div>
    </div>
  )
}
