export default function AboutDaniele() {
  return (
    <div
      className={`
        flex
        flex-col
        xl:flex
        h-screen
      text-zinc-300
        bg-daniele-profile2
        bg-cover
      `}
      id="aboutDaniele"
    >
      <div
        className={`
          h-screen
          text-center
        bg-zinc-900
          bg-opacity-80
          sm:text-sm
          md:text-md
          lg:text-lg
          xl:text-xl
          2xl:text-2xl
          tracking-widest
          font-Shadows-into-light-two
        `}
      >
        <span
          className={`
            flex flex-col
            sm:pt-64
            md:pt-64
            lg:pt-64
            xl:pt-64
            
            2xl:pt-48

            justify-center
            items-center
          `}
        >
          <p
            className={`
              text-left
              text-lg
              md:text-4xl
              xl:text-4xl
              font-bad-script
              hover:cursor-none
              flex
              items-center
              gap-2
            `}
          >
            Olá, eu sou
            <span
              className={`font-allura text-3xl md:text-8xl animate-bounce-slow text-rose-500`}
            >
              Daniele Andrade
            </span>
          </p>
        </span>
        <p
          className={`
            px-8
            2xl:px-8
            2xl:py-96
            2xl:text-3xl
            tracking-widest
            leading-loose
          `}
        >
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
