import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"

import slide1 from "@/images/imgSlideAbordagem01.svg"
import slide2 from "@/images/imgSlideAbordagem02.svg"
import slide3 from "@/images/imgSlideAbordagem03.svg"
import slide4 from "@/images/imgSlideAbordagem04.svg"
import slide5 from "@/images/imgSlideAbordagem05.svg"
import Image from "next/image"

export default function KeenSlider() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 8,
    },
  })

  return (
    <div ref={sliderRef} className={`keen-slider`}>
      <div
        className={`keen-slider__slide rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-lg`}
      >
        <Image src={slide1} width={520} height={480} alt="" />
      </div>
      <div
        className={`keen-slider__slide rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-lg`}
      >
        <Image src={slide2} width={520} height={480} alt="" />
      </div>
      <div
        className={`keen-slider__slide rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-lg`}
      >
        <Image src={slide3} width={520} height={480} alt="" />
      </div>
      <div
        className={`keen-slider__slide rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-lg`}
      >
        <Image src={slide4} width={520} height={480} alt="" />
      </div>
      <div
        className={`keen-slider__slide rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-lg`}
      >
        <Image src={slide5} width={520} height={480} alt="" />
      </div>
    </div>
  )
}
