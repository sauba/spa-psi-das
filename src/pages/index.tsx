import AbordagemHumanista from "@/components/AbordagemHumanista"
import About from "@/components/About"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PsicoterapiaCasal from "@/components/PsicoterapiaCasal"
import PsicoterapiaIndividual from "@/components/PsicoterapiaIndividual"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Psychologist Daniele Andrade",
  description: "This is the Daniele Andrade psychologist website",
}

// const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems"

// export async function getServerSideProps() {
//   const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PL3zzcaOI3hHBXKi3XhXsEqhGHFQcxX9KI&key=${process.env.YOUTUBE_API_KEY}`)
//   const data = await res.json()

//   return {
//     props: {
//       data
//     }
//   }
// }

export default function Home() {
  return (
    <main
      className={`
      flex
      flex-col
      w-full
      min-h-screen
      items-center
      justify-center
      bg-gradient-to-bl
      from-stone-400
      to-red-50
      `}
    >
      <Header />
      <About />
      <AbordagemHumanista />
      <PsicoterapiaIndividual />
      <PsicoterapiaCasal />
      {/* <div className={`w-full`}>
        <ul className={`grid`}>
          {data.items.map((item) => {
            console.log('item', item)
            const { id, snippet = {} } = item
            const { title, thumbnails = {}, resourceId } = snippet
            const { medium = {} } = thumbnails

            return (
              <li key={id} className={`card`}>
                <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                  <p>
                    <Image src={medium.url} width={medium.width} height={medium.height} alt="" />
                  </p>
                  <h3>{title}</h3>
                </a>
              </li>
            )
          })}
        </ul>
      </div> */}
      <Footer />
    </main>
  )
}
