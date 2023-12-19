export default function AbordagemHumanista() {
  return (
    <div
      className={`
        flex
        flex-col
        bg-amber-950/50
        text-red-50
        min-h-screen
      `}
      id="abordagem"
    >
      <p
        className={`
              text-center
              text-3xl
              md:text-4xl
              xl:text-4xl
              pl-4
              pt-10
              pb-6
              2xl:pl-8
              2xl:pt-20
              2xl:text-8xl
              font-bad-script
              hover:cursor-none
              flex
              items-center
            `}
      >
        Abordagem Humanista
      </p>

      <p
        className={`
            px-3
            pt-6
            pb-4
            2xl:px-8
            2xl:pt-32
            2xl:text-3xl
            text-center
            tracking-widest
            leading-6
          `}
      >
        Essa linha teórica apoia os atendimentos, partindo do pressuposto de que
        o ser humano tem uma tendência atualizante, podendo se construir, a
        partir de sua história, com liberdade, responsabilidade e escolha,
        superando o determinismo.
      </p>
    </div>
  )
}
