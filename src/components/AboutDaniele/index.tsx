export default function AboutDaniele() {
  return (
    <div
      className={`
        flex
        flex-col
        xl:flex
        min-h-screen
      text-zinc-300
        bg-daniele-profile2
        bg-cover
      `}
      id="aboutDaniele"
    >
      <div className="bg-zinc-900 bg-opacity-90 min-h-screen">
        <span
          className={`
            flex
            flex-col
            justify-center
            items-center
            
            pt-4
            pb-40
            md:pt-48
            lg:pt-56
            xl:pt-64
            2xl:pt-8
            3xl:pt-16
          `}
        >
          <p
            className={`
              text-justify
              text-lg
              2xl:pt-40
              2xl:text-8xl
              md:text-4xl
              xl:text-4xl
              font-bad-script
              hover:cursor-none
              flex
              items-center
              gap-3
            `}
          >
            Olá, eu sou
            <span
              className={`
                font-allura
                animate-bounce-slow
              text-rose-500
                text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
                2xl:text-8xl
                3xl:text-9xl

              `}
            >
              Daniele Andrade
            </span>
          </p>
        </span>

        <p className={`
            px-3
            pt-8
            2xl:px-8
            2xl:pt-32
            2xl:text-3xl
            text-center
            tracking-widest
            leading-6
          `}>
          Sou Psicóloga e atuo na área clínica, há 5 anos, atendendo o público adulto,
          com Psicoterapia Individual e Terapia de Casal.
        </p>

        <p className={`
            px-3
            pt-8
            2xl:px-8
            2xl:pt-8
            2xl:text-3xl
            text-center
            tracking-widest
            leading-6
          `}>
          As sessões são online e conduzidas através da abordagem humanista fenomenológica-existencial. Também sou Pós Graduada em Gestão de Pessoas, com Certificação em Coaching Sistêmico e outras
          terapêuticas.
        </p>
      </div>
    </div>
  )
}
