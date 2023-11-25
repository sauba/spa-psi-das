import Image from "next/image"
import patientImg2 from "../../../public/couple.svg"

export default function PsicoterapiaCasal() {
  return (
    <div
      className={`
      text-zinc-300
      `}
      id="psicoterapiaCasal"
    >
      <h1
        className={`mr-8 pt-4 xl:pt-8 text-right text-2xl xl:text-7xl font-allura`}
      >
        Psicoterapia Casal
      </h1>

      <div
        className={`my-4 xs:flex-col xl:flex font-Shadows-into-light-two tracking-widest gap-5`}
      >
        <Image
          src={patientImg2}
          width={400}
          height={400}
          className={`xl:mx-auto rounded-tr-full rounded-br-full`}
          alt="Atendimento online"
        />
        <div className={`flex flex-col gap-8`}>
          <h1
            className={`text-left px-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest leading-loose`}
          >
            A terapia de casal é um processo mediado por profissional
            especializado, tendo como base o conhecimento científico, os
            princípios e as técnicas da Psicologia. Para além de um espaço que
            acolhe demandas afetivas, é também, uma relação profissional entre o
            terapeuta e o casal.
          </h1>
          <h1
            className={`text-left px-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest leading-loose`}
          >
            Nesta, o psicólogo auxilia na identificação de necessidades e na
            compreensão de conflitos, sendo o casal, através de seu
            entendimento, ações e decisões, o responsável pelo enfrentamento e
            resolução de suas próprias questões.
          </h1>
          <h1
            className={`text-left px-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest leading-loose`}
          >
            A terapia de casal promove uma comunicação mais assertiva e
            reflexiva, bem como o entendimento e alinhamento das expectativas
            entre o casal, além de ampliar o conhecimento de cada um sobre sua
            própria personalidade e a do parceiro, contribuindo para uma melhor
            convivência, compreensão e fortalecimento do compromisso.
          </h1>
          <h1
            className={`text-left px-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest leading-loose`}
          >
            Esta terapia, também pode auxiliar quando o casal escolhe
            interromper a relação, contribuindo para que o processo que envolve
            o término seja mais consciente e saudável, podendo ser também menos
            doloroso, dentro das possibilidades.
          </h1>
          <h1
            className={`text-left px-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest leading-loose`}
          >
            As sessões de casal tem duração de 1 hora, podendo acontecer no
            período quinzenal ou com frequência semanal, conforme a necessidade
            e análise de cada caso. É fundamental ao desenvolvimento do processo
            o comprometimento e a assiduidade, de ambos, nas sessões.
          </h1>
        </div>
      </div>
    </div>
  )
}
