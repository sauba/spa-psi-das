export default function PsicoterapiaCasal() {
  return (
    <div
      className={`
        flex
        flex-col
        xl:flex
        min-h-screen
      text-zinc-900
      `}
      id="psicoterapiaCasal"
    >
      <div className="
          min-h-screen
        "
      >
        <p className={`
            px-3            
            pt-16
            pb-16
            2xl:pr-4
            2xl:pt-32
            2xl:pb-80
            2xl:text-8xl
            text-4xl
            text-center
            font-bad-script
          `}>
          Psicoterapia Casal
        </p>

        <p className={`
            px-3
            2xl:pr-4
            2xl:pt-32
            2xl:text-3xl
            text-center
          `}>
          A Terapia de Casal atua acolhendo demandas afetivas e auxiliando na identificação das necessidades do casal,
          bem como na compreensão e resolução de conflitos.
        </p>
        <p className={`
            px-3
            2xl:pr-4
            2xl:pt-8
            2xl:text-3xl
            text-center
          `}>
          Pra isto, é fundamental o comprometimento das partes, a fim de desenvolver uma comunicação mais assertiva e
          reflexiva, ampliar o conhecimento de cada um sobre sua personalidade e a do outro, o que pode fortalecer
          o vínculo e refletir positivamente na convivência.
        </p>
      </div>
    </div>
  )
}
