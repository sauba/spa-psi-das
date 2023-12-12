import Image from "next/image"
import imgClient from "../../../public/coupleTalking.svg"

export default function PsicoterapiaCasal() {
  return (
    <div
      className={`
        flex
        flex-col
        xl:flex
        pt-10
        pb-4
        bg-amber-950/50
        text-red-50
      `}
      id="psicoterapiaCasal"
    >
      <p className={`
            px-3
            pb-4
            2xl:pr-4
            2xl:pt-32
            2xl:pb-80
            2xl:text-8xl
            text-4xl
            text-center
            font-bad-script
          `}>
        Psicoterapia Casal
      </p>

      <Image src={imgClient} width={300} height={300} className={`mr-auto`} alt="" />

      <p className={`
            px-3
            pt-8
            2xl:pr-4
            2xl:pt-32
            2xl:text-3xl
            text-center
            tracking-widest
            leading-6
          `}>
        A Terapia de Casal atua acolhendo demandas afetivas e auxiliando na identificação das necessidades do casal,
        bem como na compreensão e resolução de conflitos. Pra isto, é fundamental o comprometimento das partes, a fim de desenvolver uma comunicação mais assertiva e
        reflexiva, ampliar o conhecimento de cada um sobre sua personalidade e a do outro, o que pode fortalecer
        o vínculo e refletir positivamente na convivência.
      </p>
    </div>
  )
}
