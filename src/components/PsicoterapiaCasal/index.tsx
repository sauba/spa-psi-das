export default function PsicoterapiaCasal() {
  return (
    <div
      className={`
        flex
        flex-col
        xl:flex
        min-h-screen
      text-zinc-300
        bg-patient-couple
        bg-contain
        bg-no-repeat
        bg-left
        rounded-full
      `}
      id="psicoterapiaCasal"
    >
      <div className="bg-zinc-900 bg-opacity-10 min-h-screen">
        <p
          className={`
              md:text-4xl
              xl:text-4xl
              2xl:pt-40
              2xl:pl-96
              2xl:ml-96
              2xl:text-right
              2xl:text-6xl
              font-bad-script
              hover:cursor-none
              flex
              items-center
              gap-3
            `}
        >
          Psicoterapia Casal
        </p>

        <p className={`
            px-3
            2xl:pl-80
            2xl:ml-80
            2xl:pr-12
            2xl:pt-32
            2xl:text-4xl
            text-left
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
