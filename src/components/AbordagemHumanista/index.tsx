import KeenSliderAuto from "../KeenSliderAuto"

export default function AbordagemHumanista() {
  return (
    <div
      className={`
        w-full
        flex
        flex-col
        bg-amber-950/50
        text-red-50
        `}
      id="abordagem"
    >
      <p
        className={`
              text-center
              text-3xl
              md:text-4xl
              xl:text-6xl
              pt-8
              xl:pb-4
              2xl:pl-40
              2xl:pt-20
              2xl:text-8xl
              font-bad-script
            `}
      >
        Abordagem Humanista
      </p>

      <div className={`w-full flex flex-col justify-center items-center mx-auto my-4 lg:my-6 overflow-hidden`}>
        <KeenSliderAuto />
      </div>

      <p
        className={`
            px-3
            pt-4
            pb-10
            xl:px-8
            xl:text-2xl
            2xl:text-4xl
            2xl:pt-8
            2xl:pb-8
            text-center
            tracking-widest
          `}
      >
        Essa linha teórica apoia os atendimentos, partindo do pressuposto de
        que o ser humano tem uma tendência atualizante, podendo se construir,
        a partir de sua história, com liberdade, responsabilidade e escolha,
        superando o determinismo.
      </p>
      <div
        className={`
        flex
        flex-col
        bg-amber-950/50
        text-red-50
      `}
      >

      </div>
    </div>
  )
}
