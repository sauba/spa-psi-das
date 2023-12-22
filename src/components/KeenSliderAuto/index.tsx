import img1 from "@/images/imgSlideAbordagem01.svg"
import img2 from "@/images/imgSlideAbordagem02.svg"
import img3 from "@/images/imgSlideAbordagem03.svg"
import img4 from "@/images/imgSlideAbordagem04.svg"
import img5 from "@/images/imgSlideAbordagem05.svg"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"

const animation = { duration: 50000, easing: (t: number) => t }

export default function KeenSliderAuto() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1.4, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 2.4 },
      },
    },
  })
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1 rounded-br-lg">
        <Image src={img1} width={720} height={680} alt="" priority />
      </div>
      <div className="keen-slider__slide number-slide2 rounded-br-lg">
        <Image src={img2} width={720} height={680} alt="" priority />
      </div>
      <div className="keen-slider__slide number-slide3 rounded-br-lg">
        <Image src={img3} width={720} height={680} alt="" priority />
      </div>
      <div className="keen-slider__slide number-slide4 rounded-br-lg">
        <Image src={img4} width={720} height={680} alt="" priority />
      </div>
      <div className="keen-slider__slide number-slide5 rounded-br-lg">
        <Image src={img5} width={720} height={680} alt="" priority />
      </div>
    </div>
  )
}
