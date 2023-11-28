export default function AboutDaniele() {
  return (
    <div
      className={`
        flex
        flex-col
        xl:flex
      text-zinc-300
        bg-daniele-profile2
        bg-cover
      `}
      id="aboutDaniele"
    >
      <div
        className={`text-center mt-72 xl:mt-0 bg-zinc-900 bg-opacity-90 sm:text-xs md:text-2xl xl:text-4xl tracking-widest font-Shadows-into-light-two`}
      >
        <span className={`flex flex-col py-8 justify-center items-center`}>
          <p
            className={`text-left text-lg md:text-4xl xl:text-5xl font-bad-script hover:cursor-none flex items-center gap-2`}
          >
            Olá, eu sou
            <span
              className={`font-allura text-3xl md:text-8xl animate-bounce-slow hover:text-rose-500`}
            >
              Daniele Andrade
            </span>
          </p>
        </span>
        <p className={`px-6 xl:mb-80 pb-8 xl:pb-80`}>
          Sou Psicóloga e atuo na área clínica há 05 cinco anos. Sempre
          direcionei meus atendimentos ao público adulto, e você pode contar
          comigo através da Psicoterapia Individual e da Terapia de Casal, ambas
          apoiadas na abordagem humanista fenomenológica-existencial. As sessões
          acontecem no formato online, o que permite que a gente se conecte com
          flexibilidade e de qualquer parte do Brasil, alcançando, também,
          brasileiros que vivem fora do país. Sou Pós Graduada em Gestão de
          Pessoas e tenho Certificação em Coaching Sistêmico e outras
          terapêuticas.
        </p>
      </div>
    </div>
  )
}
