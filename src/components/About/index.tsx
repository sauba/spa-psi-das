// import imgProfile from "../../../public/perfilDani2.svg"

export default function About() {
  return (
    <div
      className={`
        w-full
        min-h-screen
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
            `}
        >
          Olá, eu sou
          <span className={`font-allura text-4xl xl:text-8xl pl-2`}>
            <p className={`animate-bounce-slow`}>Daniele Andrade</p>
          </span>
        </span>
      </span>

      <div className="w-full">
        <iframe width="560" height="315" className={`mx-auto rounded-3xl`} src="https://www.youtube.com/embed/e22D0IZ7nkE?si=6JzYN9CbcIwwhj5e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media;" referrerpolicy="strict-origin-when-cross-origin"></iframe>
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
            pt-4
            pb-4
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
