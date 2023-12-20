import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import imgSlideAbordagem1 from "../../../public/imgSlideAbordagem01.svg"
import imgSlideAbordagem2 from "../../../public/imgSlideAbordagem02.svg"
import imgSlideAbordagem3 from "../../../public/imgSlideAbordagem03.svg"
import imgSlideAbordagem4 from "../../../public/imgSlideAbordagem04.svg"
import imgSlideAbordagem5 from "../../../public/imgSlideAbordagem05.svg"

const images = [
  imgSlideAbordagem1,
  imgSlideAbordagem2,
  imgSlideAbordagem3,
  imgSlideAbordagem4,
  imgSlideAbordagem5,
]

export default function Slider() {
  const carousel = useRef()

  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div className={`slider`}>
      <motion.div
        ref={carousel}
        className={`carousel`}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={`inner`}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image) => (
            <motion.div key={image} className={`item`}>
              <Image
                width={400}
                height={400}
                alt=""
                src={image}
                className={`w-9/12 mx-auto`}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
;[]
