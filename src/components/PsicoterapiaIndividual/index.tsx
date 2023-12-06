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
        bg-cover
        bg-no-repeat
        bg-right
      `}
      id="psicoterapiaIndividual"
    >
      <div className="bg-zinc-900 bg-opacity-90 min-h-screen">
        <p className={`
            px-3
            2xl:text-8xl
            text-center
            font-bad-script
          `}>
          Psicoterapia Individual
        </p>

        <p className={`
            px-3
            2xl:text-3xl
            text-center
          `}>
          Na terapia, o paciente encontra um espaço de escuta, acolhimento, psicoeducação e desenvolvimento
          de sua saúde mental.
        </p>

        <p className={`
            px-3
            2xl:text-3xl
            text-center
          `}>
          Sendo esses aspectos desenvolvidos pela promoção do autoconhecimento, o qual, atua, na vida do indivíduo,
          trazendo melhor compreensão, vivência e gestão das emoções.
        </p>
      </div>
    </div>
  )
}
