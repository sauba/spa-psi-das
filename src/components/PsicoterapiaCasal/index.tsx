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
        justify-around
        items-center
      `}
      id="psicoterapiaCasal"
    >
      <p className={`
              text-center
              text-3xl
              md:text-4xl
              xl:text-6xl
              pt-8
              xl:pb-4
              2xl:text-8xl
              font-bad-script
      `}>
        Terapia de Casal
      </p>
      <Image
        src={imgClient}
        width={500}
        height={500}
        className={`xl:w-5/12 mx-auto rounded-3xl py-4`}
        alt=""
      />

      <p
        className={`
            px-3
            pt-4
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
