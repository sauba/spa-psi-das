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
      <p
        className={`
            px-3
            pb-6
            2xl:pr-4
            2xl:pt-32
            2xl:pb-8
            xl:text-6xl
            text-4xl
            text-center
            font-bad-script
          `}
      >
        Terapia de Casal
      </p>

      <Image
        src={imgClient}
        width={500}
        height={500}
        className={`xl:w-5/12 mx-auto rounded-r-3xl`}
        alt=""
      />

      <p
        className={`
            px-3
            pt-4
            pb-4
            text-center
            tracking-widest
            leading-6
            xl:text-2xl
          `}
      >
        Modalidade que acolhe demandas afetivas e práticas do casal, através da
        identificação das necessidades de cada um, do desenvolvimento da
        comunicação e da compreensão e resolução de conflitos. Promove o
        fortalecimento do vínculo, trazendo recursos para decisões e acordos na
        relação.
      </p>
    </div>
  )
}
