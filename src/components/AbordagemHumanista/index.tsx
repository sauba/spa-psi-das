export default function AbordagemHumanista() {
  return (
    <div
      className={`
        w-full
        flex
        justify-center
        items-center
      text-zinc-300
        bg-patient
        bg-cover
      `}
    >
      <div
        className={`
          w-full
          h-screen
          text-center
          mt-96
          xl:mt-0
          bg-zinc-900
          bg-opacity-10
          sm:text-xs
          md:text-2xl
          xl:text-4xl

          3xl:pt-96
          3xl:mt-96

          tracking-widest
          font-Shadows-into-light-two
        `}
        id="abordagem"
      >
        <h1
          className={`
            pr-8
            
            text-right
            text-2xl
            2xl:text-5xl
            2xl:pr-20
            2xl:pt-8

            3xl:text-9xl
            3xl:pr-32
            3xl:pt-48
            

            font-allura
          text-rose-500
            tracking-widest
          `}
        >
          Abordagem Humanista Fenomenológica-existencial
        </h1>

        <p
          className={`
            px-8
            3xl:ml-96
            3xl:pl-96
            
            3xl:pt-96
            3xl:text-7xl
            3xl:px-24

            text-right
          `}
        >
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
