import Image from "next/image"
import imgClient from "../../../public/psicoteraphySessionWithClient.svg"

export default function PsicoterapiaIndividual() {
  return (
    <div
      className={`
        flex
        flex-col
        pt-10
        pb-4
      text-amber-950
      `}
      id="psicoterapiaIndividual"
    >
      <div>
        <p className={`
            px-3
            pb-6
            2xl:text-8xl
            text-4xl
            text-center
            font-bad-script
            z-5
          `}>
          Psicoterapia Individual
        </p>
        <Image src={imgClient} width={300} height={300} className={`2xl:w-3/12 ml-auto z-4 rounded-lg`} alt="" />
      </div>

      <p className={`
            px-3
            pt-8
            2xl:text-4xl
            text-center
            tracking-widest            leading-6
          `}>
        Na terapia, o paciente encontra um espaço de escuta, acolhimento, psicoeducação e desenvolvimento
        de sua saúde mental. Sendo esses aspectos desenvolvidos pela promoção do autoconhecimento, o qual, atua, na vida do indivíduo,
        trazendo melhor compreensão, vivência e gestão das emoções.
      </p>
    </div>
  )
}
