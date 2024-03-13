import Image from "next/image"
import imgClient from "../../../public/psicoteraphySessionWithClient.svg"

export default function PsicoterapiaIndividual() {
  return (
    <div
      className={`
        flex
        flex-col
      text-amber-950
        justify-between
        items-center
      `}
      id="psicoterapiaIndividual"
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
        Terapia Individual
      </p>
      <Image
        src={imgClient}
        width={500}
        height={500}
        className={`xl:w-5/12 mx-auto rounded-lg`}
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
        As sessões de terapia envolvem escuta e acolhimento aos clientes,
        trazendo intervenções terapêuticas, psicoeducação e orientações, que
        contribuam na promoção do autoconhecimento. Um processo que reflete,
        diretamente, na saúde mental do paciente, ajudando em seu
        desenvolvimento sistêmico.
      </p>
    </div>
  )
}
