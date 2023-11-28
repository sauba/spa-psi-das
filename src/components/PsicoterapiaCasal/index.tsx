import Image from "next/image"
import coupleImg from "../../../public/couple.svg"

export default function PsicoterapiaCasal() {
  return (
    <div
      className={`
      w-full
      flex-col
      justify-center
      items-center
      text-zinc-300
      `}
      id="abordagem"
    >
      <div className={`flex justify-center items-center gap-12`}>
        <Image
          src={coupleImg}
          quality={100}
          style={{ objectFit: `contain` }}
          className={`w-1/12 rounded-r-full`}
          alt=""
          priority
        />
        <h1
          className={`w-11/12 text-left text-2xl xl:text-8xl font-allura text-violet-400 tracking-widest`}
        >
          Psicoterapia Casal
        </h1>
      </div>

      <div
        className={`w-full text-center xl:p-8 sm:text-md md:text-2xl xl:text-2xl tracking-widest leading-loose gap-3`}
      >
        <p>
          A terapia de casal é um processo mediado por profissional
          especializado, tendo como base o conhecimento científico, os
          princípios e as técnicas da Psicologia. Para além de um espaço que
          acolhe demandas afetivas, é também, uma relação profissional entre o
          terapeuta e o casal. Nesta, o psicólogo auxilia na identificação de
          necessidades e na compreensão de conflitos, sendo o casal, através de
          seu entendimento, ações e decisões, o responsável pelo enfrentamento e
          resolução de suas próprias questões. A terapia de casal promove uma
          comunicação mais assertiva e reflexiva, bem como o entendimento e
          alinhamento das expectativas entre o casal, além de ampliar o
          conhecimento de cada um sobre sua própria personalidade e a do
          parceiro, contribuindo para uma melhor convivência, compreensão e
          fortalecimento do compromisso. Esta terapia, também pode auxiliar
          quando o casal escolhe interromper a relação, contribuindo para que o
          processo que envolve o término seja mais consciente e saudável,
          podendo ser também menos doloroso, dentro das possibilidades. As
          sessões de casal tem duração de 1 hora, podendo acontecer no período
          quinzenal ou com frequência semanal, conforme a necessidade e análise
          de cada caso. É fundamental ao desenvolvimento do processo o
          comprometimento e a assiduidade, de ambos, nas sessões.
        </p>
      </div>
    </div>
  )
}
