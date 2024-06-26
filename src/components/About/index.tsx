// import imgProfile from "../../../public/perfilDani2.svg"

export default function About() {
  return (
    <div
      className={`
        w-full
        flex
        flex-col
        mx-auto
        justify-center
        items-center
      text-amber-950 pt-16
      `}
      id="aboutDaniele"
    >
      <span
        className={`
            flex
            flex-col
            justify-center
            gap-1
          `}
      >
        <span
          className={`
              flex
              text-center
              text-2xl
              xl:text-6xl
              font-bad-script
              hover:cursor-none
              items-center
              pb-10
            `}
        >
          Olá, eu sou
          <span className={`font-allura text-4xl xl:text-8xl pl-2`}>
            <p className={`animate-bounce-slow`}>Daniele Andrade</p>
          </span>
        </span>
      </span>

      <div className="w-full">
        <iframe width="320" height="280" className={`mx-auto rounded-3xl lg:w-[748px] lg:h-[420px] border-none outline-none`} src="https://www.youtube.com/embed/e22D0IZ7nkE?si=Qh-KaPvCSXL4P7Gj" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" rel="strict-origin-when-cross-origin" allowFullScreen></iframe>

        {/* <Image
          src={imgProfile}
          width={256}
          height={256}
          className={`2xl:w-2/12 mx-auto rounded-tl-3xl rounded-bl-xl rounded-tr-xl rounded-br-3xl`}
          priority
          alt="Psicologa Daniele Andrade"
        /> */}
      </div>
      <p
        className={`
            px-3
            py-10
            2xl:px-8
            xl:text-2xl
            2xl:text-3xl
            text-center
            tracking-widest
            leading-6
          `}
      >
        Psicóloga Clínica, desde 2019, atendendo adultos, através de
        Psicoterapia Individual e Terapia de Casal.
      </p>
    </div>
  )
}
