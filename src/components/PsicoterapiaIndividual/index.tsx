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
        className={`
          h-screen
          text-center
          mt-96
          xl:mt-0
          bg-zinc-900
          bg-opacity-90
          sm:text-xs
          md:text-2xl
          xl:text-4xl
          tracking-widest
          font-Shadows-into-light-two
        `}
      >
        <h1
          className={`
            pl-32
            text-left
            text-2xl
            xl:text-8xl

            3xl:pt-8
            3xl:text-9xl

            font-allura
          text-rose-500
            tracking-widest
          `}
        >
          Psicoterapia Individual
        </h1>

        <p
          className={`text-justify px-6 xl:mb-80 pb-8 xl:pb-80 3xl:text-7xl 3xl:pt-96`}
        >
A Psicoterapia Individual é um processo mediado por profissional especializado, tendo como base o conhecimento científico, os princípios e as técnicas da Psicologia. Na terapia, o paciente encontra um espaço de escuta, acolhimento, psicoeducação e desenvolvimento de sua saúde mental. Sendo esses aspectos desenvolvidos pela promoção do autoconhecimento, o qual, atua, na vida do indivíduo, trazendo melhor compreensão, vivência e gestão das emoções.        </p>
      </div>
    </div>
  )
}
