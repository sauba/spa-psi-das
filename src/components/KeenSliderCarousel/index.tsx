import "keen-slider/keen-slider.min.css"
import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react"

import slide1 from "@/images/imgSlideAbordagem01.svg"
import slide2 from "@/images/imgSlideAbordagem02.svg"
import slide3 from "@/images/imgSlideAbordagem03.svg"
import slide4 from "@/images/imgSlideAbordagem04.svg"
import slide5 from "@/images/imgSlideAbordagem05.svg"
import Image from "next/image"

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

export default function KeenSliderCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1 ">
            <Image src={slide1} width={520} height={480} alt="" />
          </div>
          <div className="carousel__cell number-slide2">
            <Image src={slide2} width={520} height={480} alt="" />
          </div>
          <div className="carousel__cell number-slide3">
            <Image src={slide3} width={520} height={480} alt="" />
          </div>
          <div className="carousel__cell number-slide4">
            <Image src={slide4} width={520} height={480} alt="" />
          </div>
          <div className="carousel__cell number-slide5">
            <Image src={slide5} width={520} height={480} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
