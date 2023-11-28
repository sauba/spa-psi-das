import { Circle } from "@phosphor-icons/react"
import Image from "next/image"
import logo from "../../../public/logoBranca.svg"

export default function About() {
  return (
    <div>
      <div
        className={`flex flex-col text-rose-300 justify-center items-center`}
        id="about"
      >
        <h1 className={`text-4xl pt-2`}>Leveza Para Viver</h1>
        <h1 className={`text-2xl`}>Espaço de Evolução</h1>
        <p className={`m-5 text-center`}>
          Lorem ipsum dolor. Voluptatum similique repellat error id. Culpa illo,
          minima perferendis quidem quia quaerat assumenda explicabo ex at iusto
          possimus amet facilis dolore eius. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Voluptatum similique repellat error id.
          Culpa illo, minima perferendis quidem quia quaerat assumenda explicabo
          ex at iusto possimus amet facilis dolore eius. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Voluptatum similique repellat
          error id. Culpa illo, minima perferendis quidem quia quaerat assumenda
          explicabo ex at iusto possimus amet facilis dolore eius. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Voluptatum similique
          repellat error id. Culpa illo, minima perferendis quidem quia quaerat
          assumenda explicabo ex at iusto possimus amet facilis dolore eius.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          similique repellat error id. Culpa illo, minima perferendis quidem
          quia quaerat assumenda explicabo ex at iusto possimus amet facilis
          dolore eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatum similique repellat error id. Culpa illo, minima perferendis
          quidem quia quaerat assumenda explicabo ex at iusto possimus amet
          facilis dolore eius. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Voluptatum similique repellat error id. Culpa illo,
          minima perferendis quidem quia quaerat assumenda explicabo ex at iusto
          possimus amet facilis dolore eius. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Voluptatum similique repellat error id.
          Culpa illo, minima perferendis quidem quia quaerat assumenda explicabo
          ex at iusto possimus amet facilis dolore eius. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Voluptatum similique repellat
          error id. Culpa illo, minima perferendis quidem quia quaerat assumenda
          explicabo ex at iusto possimus amet facilis dolore eius. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Voluptatum similique
          repellat error id. Culpa illo, minima perferendis quidem quia quaerat
          assumenda explicabo ex at iusto possimus amet facilis dolore eius.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          similique repellat error id. Culpa illo, minima perferendis quidem
          quia quaerat assumenda explicabo ex at iusto possimus amet facilis
          dolore eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatum similique repellat error id. Culpa illo, minima perferendis
          quidem quia quaerat assumenda explicabo ex at iusto possimus amet
          facilis dolore eius.
        </p>
      </div>

      <div
        className={`grid grid-wrap lg:grid-cols-2 p-10 gap-3 justify-center items-center cursor-none`}
        id="about"
      >
        <div
          className={`text-zinc-100 text-center bg-gradient-to-br from-rose-500 hover:bg-rose-400/80 hover:cursor-pointer rounded-3xl py-6 hover:py-16`}
        >
          <h1 className={`text-4xl font-gothamrounded-book`}>Nossa Missão</h1>
          <p className={`mt-4 font-snowdrop-regular`}>
            CONTRIBUIR NO PROCESSO DE AUTOCONHECIMENTO DE PESSOAS QUE BUSCAM POR
            EVOLUÇÃO.
          </p>
        </div>

        <div
          className={`text-zinc-100 text-center bg-gradient-to-bl from-rose-500 hover:bg-rose-400/80 hover:cursor-pointer rounded-3xl py-4 hover:py-16`}
        >
          <h1 className={`text-4xl font-gothamrounded-book`}>Nossa Crença</h1>
          <p className={`mt-4 font-snowdrop-regular`}>
            ACREDITAMOS QUE O AUTOCONHECIMENTO É A CHAVE PARA UMA TRANSFORMAÇÃO
            PROFUNDA E SISTÊMICA, TENDO COMO RESULTADO O DESENVOLVIMENTO
            PESSOAL.
          </p>
        </div>

        <div
          className={`text-zinc-100 text-center bg-gradient-to-tr from-rose-500 hover:bg-rose-400/80 hover:cursor-pointer py-6 hover:py-16 rounded-3xl`}
        >
          <h1 className={`text-4xl font-gothamrounded-book`}>Nossos Valores</h1>
          <ol className={`flex flex-col justify-center items-center my-4`}>
            <li className="flex gap-3">
              <span className={`flex items-center gap-1`}>
                <Circle size={8} weight="fill" /> CRESCIMENTO CONTÍNUO
              </span>
            </li>
            <li className={`flex gap-3`}>
              <span className={`flex items-center gap-1`}>
                <Circle size={8} weight="fill" /> CONFIANÇA
              </span>
              <span className={`flex items-center gap-1`}>
                <Circle size={8} weight="fill" /> ÉTICA
              </span>
            </li>
            <li>
              <span className={`flex items-center gap-1`}>
                <Circle size={8} weight="fill" /> RESPEITO
              </span>
            </li>
          </ol>
        </div>

        <div
          className={`text-zinc-100 text-center bg-gradient-to-tl from-rose-500 hover:bg-rose-400/80 hover:cursor-pointer py-4 hover:py-16 rounded-3xl`}
        >
          <h1 className={`text-4xl font-gothamrounded-book`}>Nosso Lema</h1>
          <Image
            src={logo}
            width={200}
            height={200}
            alt="pessoa meditando sobre um galho com duas folhas em cada ponta"
            className={`mx-auto`}
          />
        </div>
      </div>
    </div>
  )
}
