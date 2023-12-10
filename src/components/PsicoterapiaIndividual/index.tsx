import Image from "next/image"
import imgClient from "../../../public/psicoteraphySessionWithClient.svg"

export default function PsicoterapiaIndividual() {
  return (
    <div
      className={`
        flex
        flex-col
        min-h-screen
      text-zinc-300
      `}
      id="psicoterapiaIndividual"
    >
      <div className={`flex`}>
        <p className={`
            absolute
            px-12
            pt-16
            2xl:text-8xl
            text-4xl
            text-center
            font-bad-script
            z-50
          `}>
          Psicoterapia Individual
        </p>
        <p className={`px-12 absolute z-50 mt-96 pt-96 text-4xl 2xl:text-6xl`}>
          Na terapia, o paciente encontra um espaço de escuta, acolhimento, psicoeducação e desenvolvimento
          de sua saúde mental. Sendo esses aspectos desenvolvidos pela promoção do autoconhecimento, o qual, atua, na vida do indivíduo,
          trazendo melhor compreensão, vivência e gestão das emoções.
        </p>
        <Image src={imgClient} width={300} height={300} className={`w-full relative z-10`} alt="" />
      </div>
    </div>
  )
}
