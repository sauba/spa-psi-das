export default function PsicoterapiaCasal() {
  return (
    <div
      className={`
        flex
        flex-col
        xl:flex
        min-h-screen
      text-zinc-300
        bg-patient
        bg-cover
      `}
      id="abordagem"
    >
      <div className="bg-zinc-900 bg-opacity-80 min-h-screen">
        <span
          className={`
            flex
            flex-col
            justify-center
            items-center
            pt-4
            pb-40
            md:pt-48
            lg:pt-56
            xl:pt-64
            2xl:pt-8
            3xl:pt-16
          `}
        >
          <p
            className={`
              text-justify
              text-lg
              md:text-4xl
              xl:text-4xl
              2xl:pt-40
              2xl:text-6xl
              font-bad-script
              hover:cursor-none
              flex
              items-center
              gap-3
            `}
          >
            Psicoterapia
            <span
              className={`
                font-allura
              text-rose-500
                text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
                2xl:text-8xl
                3xl:text-9xl

              `}
            >
              Casal
            </span>
          </p>
        </span>

        <p className={`
            px-3
            2xl:px-8
            2xl:pt-32
            2xl:text-3xl
            text-center
            tracking-widest
            leading-10
          `}>
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
