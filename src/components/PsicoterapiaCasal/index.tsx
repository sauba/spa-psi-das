import Image from "next/image"
import imgClient from "../../../public/coupleTalking.svg"

export default function PsicoterapiaCasal() {
  return (
    <div
      className={`
        flex
        flex-col
        xl:flex
        bg-amber-950/50
        text-red-50
      `}
      id="psicoterapiaCasal"
    >
      <p
        className={`
            px-3
            py-8
            xl:text-6xl
            2xl:text-8xl
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
            px-16
            pt-2
            pb-10
            xl:text-2xl
            2xl:text-4xl
            text-center
            tracking-widest
            leading-6
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
