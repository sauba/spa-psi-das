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
          text-sm
          xl:text-2xl
          tracking-widest
          font-Shadows-into-light-two
        `}
      >
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

              2xl:text-8xl
              md:text-4xl
              xl:text-4xl
              font-bad-script
              hover:cursor-none
              flex
              items-center
              gap-6
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

        <div
          className={`
            flex-col
            px-3
            
            xs:pt-8
            sm:pt-16
            md:pt-32
            lg:pt-40

            2xl:px-8
            2xl:pt-20
            2xl:text-3xl            
            3xl:text-7xl
            3xl:pt-96

            text-justify
            tracking-widest
            leading-loose
          `}
        >
          <p
            className={`
            xs:pt-8
            sm:pt-32
            md:pt-38
            lg:pt-48

            2xl:pt-48
            2xl:pb-2

            3xl:pt-96
            3xl:pb-38       
          `}
          >
            Sou Psicóloga e atuo na área clínica há 05 cinco anos. Sempre
            direcionei meus atendimentos ao público adulto, e você pode contar
            comigo através da Psicoterapia Individual e da Terapia de Casal,
            ambas apoiadas na abordagem humanista fenomenológica-existencial.
          </p>
          <p className={`xs:pt-2 2xl:pt-16 3xl:pt-4`}>
            As sessões acontecem no formato online, o que permite que a gente se
            conecte com flexibilidade e de qualquer parte do Brasil, alcançando,
            também, brasileiros que vivem fora do país. Sou Pós Graduada em
            Gestão de Pessoas e tenho Certificação em Coaching Sistêmico e
            outras terapêuticas.
          </p>
        </div>
      </div>
    </div>
  )
}
