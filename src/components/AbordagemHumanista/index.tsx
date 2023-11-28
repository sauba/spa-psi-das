import Image from "next/image"
import patientHappy from "../../../public/patientHappy.svg"
export default function AbordagemHumanista() {
  return (
    <div
      className={`
      w-full
      flex
      justify-center
      items-center
      text-zinc-300
      `}
      id="abordagem"
    >
      <div className={`w-2/12`}>
        <Image
          src={patientHappy}
          quality={100}
          style={{ objectFit: `contain` }}
          className={`opacity-95 rounded-tr-full`}
          alt=""
          priority
        />
      </div>

      <div className={`w-10/12 flex-col`}>
        <h1
          className={`xl:pt-8 text-left text-2xl xl:text-6xl font-allura text-violet-400 tracking-widest`}
        >
          Abordagem Humanista Fenomenológica-existencial
        </h1>
        <div
          className={`flex-col text-left xl:pt-8 xl:px-8 sm:text-md md:text-2xl xl:text-2xl tracking-widest leading-loose gap-3`}
        >
          <p className={``}>
            Na Psicologia existem diferentes linhas teóricas para abordagem, as
            quais, direcionam o método de atuação do Psicólogo Clínico frente ao
            seu Cliente. Eu escolho conduzir os processos tendo como apoio a
            abordagem Humanista Fenomenológica-existencial, partindo do
            pressuposto de que o ser humano tem uma tendência atualizante,
            podendo se construir, a partir de sua história, com liberdade,
            responsabilidade e escolha.
          </p>
          <p className={``}>
            Sendo assim, o processo de terapia parte de uma conversa dialógica e
            não determinista, onde o paciente traz o fenômeno e o profissional
            age como intermediador, contribuindo na compreensão da questão
            trazida, ampliando sentidos, promovendo ressignificações, a partir
            dos recursos que o indivíduo tem e que pode desenvolver, construindo
            assim sua constante evolução.
          </p>
        </div>
      </div>
    </div>
  )
}
