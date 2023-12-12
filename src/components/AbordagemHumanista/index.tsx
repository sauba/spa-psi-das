export default function AbordagemHumanista() {
  return (
    <div
      className={`
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
              xl:text-4xl
              pl-4
              pt-10
              pb-64
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

      <p className={`
            px-3
            2xl:px-8
            2xl:pt-32
            2xl:text-3xl
            text-center
            tracking-widest
            leading-6
          `}>
        A abordagem é a linha teórica em que o profissional de psicologia apoia a condução de seu trabalho. A abordagem Humanista Fenomenológica-existencial, parte do pressuposto de que o ser humano tem uma tendência
        atualizante, podendo se construir, a partir de sua história, com liberdade, responsabilidade e escolha. Desta forma, não há um determinismo, mas sim, a consideração de que os fenômenos podem ser elaborados,
        a partir do autoconhecimento, trazendo ressignificações, e, com isso, a expansão das possibilidades do sujeito
        no mundo.
      </p>
    </div>
  )
}
