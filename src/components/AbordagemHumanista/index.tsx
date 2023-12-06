export default function AbordagemHumanista() {
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
            Abordagem
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
              Humanista Fenomenológica-existencial
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
          A abordagem é a linha teórica em que o profissional de psicologia apoia a condução de seu trabalho.
          A abordagem Humanista Fenomenológica-existencial, parte do pressuposto de que o ser humano tem uma tendência
          atualizante, podendo se construir, a partir de sua história, com liberdade, responsabilidade e escolha.
          Desta forma, não há um determinismo, mas sim, a consideração de que os fenômenos podem ser elaborados,
          a partir do autoconhecimento, trazendo ressignificações, e, com isso, a expansão das possibilidades do sujeito
          no mundo.
        </p>
      </div>
    </div>
  )
}