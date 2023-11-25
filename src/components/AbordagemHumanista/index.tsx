import Image from "next/image"
import patientHappy from "../../../public/patientHappy.svg"

export default function AbordagemHumanista() {
  return (
    <div
      className={`
      text-zinc-300
      `}
      id="abordagem"
    >
      <h1
        className={`ml-8 pt-4 xl:pt-8 text-left text-2xl xl:text-7xl font-allura`}
      >
        Abordagem Humanista Fenomenológica-existencial
      </h1>

      <div
        className={`my-4 xs:flex-col xl:flex font-Shadows-into-light-two tracking-widest gap-5`}
      >
        <Image
          src={patientHappy}
          width={400}
          height={400}
          className={`xl:mx-auto rounded-tr-full rounded-br-full`}
          alt="Atendimento online"
        />
        <div className={`flex flex-col gap-8`}>
          <h1
            className={`text-left px-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest leading-loose`}
          >
            Na Psicologia existem diferentes linhas teóricas para abordagem, as
            quais, direcionam o método de atuação do Psicólogo Clínico frente ao
            seu Cliente.
          </h1>
          <h1
            className={`text-left px-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest leading-loose`}
          >
            Eu escolho conduzir os processos tendo como apoio a abordagem
            Humanista Fenomenológica-existencial, partindo do pressuposto de que
            o ser humano tem uma tendência atualizante, podendo se construir, a
            partir de sua história, com liberdade, responsabilidade e escolha.
          </h1>
          <h1
            className={`text-left px-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest leading-loose`}
          >
            Sendo assim, o processo de terapia parte de uma conversa dialógica e
            não determinista, onde o paciente traz o fenômeno e o profissional
            age como intermediador, contribuindo na compreensão da questão
            trazida, ampliando sentidos, promovendo ressignificações, a partir
            dos recursos que o indivíduo tem e que pode desenvolver, construindo
            assim sua constante evolução.
          </h1>
        </div>
      </div>
    </div>
  )
}
