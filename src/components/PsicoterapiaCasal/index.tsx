export default function PsicoterapiaCasal() {
  return (
    <div
      className={`
        w-full
        flex-col
        justify-center
        items-center
        text-zinc-300
        bg-patient-couple
        bg-cover
      `}
      id="psicoterapiaCasal"
    >
      <div
        className={`
          h-screen
          text-center
          mt-96
          xl:mt-0

          3xl:pt-96

          bg-zinc-900
          bg-opacity-90
          sm:text-xs
          md:text-2xl
          tracking-widest
          font-Shadows-into-light-two
        `}
      >
        <h1
          className={`
            pr-32
            text-right
            text-2xl
            xl:text-8xl

            3xl:pt-80
            3xl:mb-12
            3xl:text-9xl

            font-allura
          text-rose-500
            tracking-widest
          `}
        >
          Psicoterapia Casal
        </h1>

        <p
          className={`text-justify px-6 xl:mb-80 pb-8 xl:pb-80 3xl:text-7xl 3xl:pt-80`}
        >
          A Terapia de Casal atua acolhendo demandas afetivas e auxiliando na identificação das necessidades do casal,
          bem como na compreensão e resolução de conflitos.
          Pra isto, é fundamental o comprometimento das partes, a fim de desenvolver uma comunicação mais assertiva e
          reflexiva, ampliar o conhecimento de cada um sobre sua personalidade e a do outro, o que pode fortalecer
          o vínculo e refletir positivamente na convivência.
        </p>
      </div>
    </div>
  )
}
