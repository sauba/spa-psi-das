import Image from "next/image"
import patientHappy from "../../../public/patientHappy.svg"
export default function AbordagemHumanista() {
  return (
    <div
      className={`
      w-full
      mb-24
      flex-col
      justify-center
      items-center
      text-zinc-300
      `}
      id="abordagem"
    >
      <div className={`flex justify-center items-center gap-12`}>
        <Image
          src={patientHappy}
          quality={100}
          style={{ objectFit: `contain` }}
          className={`w-1/12 rounded-b-full`}
          alt=""
          priority
        />
        <h1
          className={`w-11/12 text-left text-2xl xl:text-7xl font-allura text-violet-400 tracking-widest`}
        >
          Abordagem Humanista Fenomenológica-existencial
        </h1>
      </div>

      <div
        className={`text-left xl:p-8 sm:text-md md:text-2xl xl:text-3xl tracking-widest leading-loose gap-3`}
      >
        <p className={``}>
          Na Psicologia existem diferentes linhas teóricas para abordagem, as
          quais, direcionam o método de atuação do Psicólogo Clínico frente ao
          seu Cliente. Eu escolho conduzir os processos tendo como apoio a
          abordagem Humanista Fenomenológica-existencial, partindo do
          pressuposto de que o ser humano tem uma tendência atualizante, podendo
          se construir, a partir de sua história, com liberdade,
          responsabilidade e escolha.Sendo assim, o processo de terapia parte de
          uma conversa dialógica e não determinista, onde o paciente traz o
          fenômeno e o profissional age como intermediador, contribuindo na
          compreensão da questão trazida, ampliando sentidos, promovendo
          ressignificações, a partir dos recursos que o indivíduo tem e que pode
          desenvolver, construindo assim sua constante evolução.
        </p>
      </div>
    </div>
  )
}
