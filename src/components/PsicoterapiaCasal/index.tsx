import Image from "next/image"
import coupleImg from "../../../public/couple.svg"
export default function PsicoterapiaCasal() {
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
          src={coupleImg}
          quality={100}
          style={{ objectFit: `contain` }}
          className={`opacity-95 rounded-r-full`}
          alt=""
          priority
        />
      </div>

      <div className={`w-9/12 flex-col`}>
        <h1
          className={`text-left text-2xl xl:text-6xl font-allura text-teal-500`}
        >
          Psicoterapia Casal
        </h1>
        <div
          className={`flex-col text-left px-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl tracking-widest leading-loose`}
        >
          <p className={``}>
            A terapia de casal é um processo mediado por profissional
            especializado, tendo como base o conhecimento científico, os
            princípios e as técnicas da Psicologia. Para além de um espaço que
            acolhe demandas afetivas, é também, uma relação profissional entre o
            terapeuta e o casal.
          </p>
          <p className={``}>
            Nesta, o psicólogo auxilia na identificação de necessidades e na
            compreensão de conflitos, sendo o casal, através de seu
            entendimento, ações e decisões, o responsável pelo enfrentamento e
            resolução de suas próprias questões.
          </p>
          <p className={``}>
            A terapia de casal promove uma comunicação mais assertiva e
            reflexiva, bem como o entendimento e alinhamento das expectativas
            entre o casal, além de ampliar o conhecimento de cada um sobre sua
            própria personalidade e a do parceiro, contribuindo para uma melhor
            convivência, compreensão e fortalecimento do compromisso.
          </p>
          <p className={``}>
            Esta terapia, também pode auxiliar quando o casal escolhe
            interromper a relação, contribuindo para que o processo que envolve
            o término seja mais consciente e saudável, podendo ser também menos
            doloroso, dentro das possibilidades.
          </p>
          <p className={``}>
            As sessões de casal tem duração de 1 hora, podendo acontecer no
            período quinzenal ou com frequência semanal, conforme a necessidade
            e análise de cada caso. É fundamental ao desenvolvimento do processo
            o comprometimento e a assiduidade, de ambos, nas sessões.
          </p>
          <p className={``}></p>
        </div>
      </div>
    </div>
  )
}
