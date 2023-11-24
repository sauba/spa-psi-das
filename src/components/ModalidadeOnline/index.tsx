export default function ModalidadeOnline() {
  return (
    <div
      className={`
        pt-4
        md:pt-8
        md:pb-20
      text-zinc-300
      `}
      id="psicoterapiaCasal"
    >
      <div
        className={`m-4 flex flex-col gap-3 text-lg md:text-2xl text-center font-Shadows-into-light-two tracking-widest hover:cursor-none hover:text-green-500`}
      >
        <h1 className={`mr-16 text-center sm:text-6xl lg:text-9xl font-allura`}>
          Modalidade Online
        </h1>
        <h1>
          As sessões seguem o formato online, via chamada de vídeo, através de
          ferramenta protegida por criptografia de ponta a ponta. O atendimento
          online, é, igualmente, ao atendimento presencial, pautado no Código de
          Ética Profissional do Psicólogo, valendo ressaltar o sigilo
          profissional, a fim de proteger, por meio da confiabilidade, a
          intimidade das pessoas. Este formato, preserva as características do
          consultório, devendo estar, cliente e profissional, em ambientes
          privados e silenciosos, garantindo o conforto e sigilo da sessão.
          Alguns benefícios da consulta online são: o ultrapassar fronteiras,
          ampliando a possibilidade de escolha do cliente, que não se limitará a
          territorialidade; e a possibilidade de realizar a sessão sem a
          necessidade de deslocamento, economizando recursos como tempo e
          financeiro.
        </h1>
      </div>
    </div>
  )
}
