import Image from "next/image"
import patientHappy from "../../../public/patientHappy.svg"
export default function AbordagemHumanista() {
  return (
    <div
      className={`
      w-full
      flex
      xs:flex
      md:flex
      lg:flex
      xl:flex
      justify-center
      items-center
      text-zinc-300
      `}
      id="abordagem"
    >
      <div className={`w-3/12`}>
        <Image
          src={patientHappy}
          quality={100}
          style={{ objectFit: `contain`, objectPosition: `left` }}
          className={`opacity-95 rounded-r-full`}
          alt=""
          priority
        />
      </div>

      <div className={`w-9/12 flex-col`}>
        <h1
          className={`text-left text-2xl xl:text-6xl font-allura text-teal-500`}
        >
          Abordagem Humanista Fenomenológica-existencial
        </h1>
        <div
          className={`flex-col text-left px-6 sm:text-md md:text-2xl lg:text-3xl xl:text-3xl tracking-widest leading-loose`}
        >
          <p className={``}>
            Na Psicologia existem diferentes linhas teóricas para abordagem, as
            quais, direcionam o método de atuação do Psicólogo Clínico frente ao
            seu Cliente.
          </p>
          <p className={``}>
            Eu escolho conduzir os processos tendo como apoio a abordagem
            Humanista Fenomenológica-existencial, partindo do pressuposto de que
            o ser humano tem uma tendência atualizante, podendo se construir, a
            partir de sua história, com liberdade, responsabilidade e escolha.
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
