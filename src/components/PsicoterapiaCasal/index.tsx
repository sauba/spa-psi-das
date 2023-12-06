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
      `}
      id="psicoterapiaCasal"
    >
      <div className="
          bg-zinc-900
          bg-opacity-90
          min-h-screen"
      >
        <p
          className={`
            2xl:pt-16
            2xl:pl-96
            2xl:text-right
            2xl:text-8xl
            3xl:text-9xl
            text-right
            font-bad-script
            hover:cursor-none
            flex
          `}
        >
          Psicoterapia Casal
        </p>

        <p className={`
            px-3
            2xl:pl-80
            2xl:ml-80
            2xl:pr-4
            2xl:pt-32
            2xl:text-4xl
            text-center
          `}>
          A Terapia de Casal atua acolhendo demandas afetivas e auxiliando na identificação das necessidades do casal,
          bem como na compreensão e resolução de conflitos.
        </p>
        <p className={`
            px-3
            2xl:pl-80
            2xl:ml-80
            2xl:pr-4
            2xl:pt-32
            2xl:text-4xl
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
