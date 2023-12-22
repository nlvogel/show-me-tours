import ContentWithMedia from "../../../components/ContentWithMedia";
import RenderCarousel from "../../../components/Carousel";
import {SecondaryButton} from "../../../components/button";
import {meta} from "../../../components/Metadata";
import {addLocalBusiness, addLogo} from "../../../components/Schema";

const client = `Ashlyn`

const images = [
  {
    src: `https://images.showmetours.biz/ashlyn_1-edit.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/ashlyn_2-edit.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/ashlyn_3-edit.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/ashlyn_4-edit.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
]

const seo = {
  title: `Review from ${client} / Show Me Tours`,
  description: `Read reviews from ${client}, one of our happy clients.`,
  images: images.map((image) => image.src),
  canonical: `/reviews/${client.toLowerCase()}`
}
export const metadata = meta(seo)

export default function Ashlyn() {
  const pageContent1 = <div><p>Part 2 of our New York trip and we spent 3 days in the Big Apple! We enjoyed the 9/11
    Memorial, One World Observatory, Madison Square Garden, Rockefeller Center, Brooklyn Heights, Brooklyn Bridge,
    DUMBO, Hudson Yards, the Highline, Grand Central Terminal, Museum of Natural History, Central Park, Lion King… and
    so much more in between! The weather was beautiful and we had the best time exploring.</p><p>We could not have fit
    so much into this trip if it weren’t for Daniel Ellis with Show Me Tours planning our entire trip start to finish!
    He booked our accommodations, purchased all of our tickets, and gave us a step by step itinerary (literally like 10+
    pages). We spent an entire day with Daniel’s good friend and fellow tour guide, Bob, and the time spent alone we
    were confident in our plans because of Daniel’s attention to detail and directions to help us from point A to point
    B.</p><p>If you’re planning a trip to NYC and aren’t super familiar with the city, consider having Daniel organize
    your trip. We missed having him there with us in person this time, but appreciated having him there in spirit!
    ❤️🏙️</p></div>

  const schema = [
    addLogo, addLocalBusiness
  ]


  return <main className={`max-width`}>
    <script type={`application/ld+json`}
            dangerouslySetInnerHTML={{__html: JSON.stringify(schema.map(s => s))}}/>
    <h1 className={`ms-1`}>{client}'s Review of Show Me Tours</h1>
    <ContentWithMedia
      textPosition={`Right`}
      content={pageContent1}
      featuredImage={images[0]}
      aspectRatio={`square`} header={{}}/>
    <div className={`flex justify-content-center align-center`}>
      <SecondaryButton children={`Read More Reviews`} href={`/reviews`} additionalClasses={`white`}/>
    </div>
    <h2 className={`ms-1`}>More Photos from {client}'s Trip</h2>
    <RenderCarousel images={images} mainImages={false} includeHeader={false}/>
  </main>
}
