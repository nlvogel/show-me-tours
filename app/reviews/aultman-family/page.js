import ContentWithMedia from "../../../components/ContentWithMedia";
import RenderCarousel from "../../../components/Carousel";
import {SecondaryButton} from "../../../components/button";
import {meta} from "../../../components/Metadata";
import {addLocalBusiness, addLogo} from "../../../components/Schema";

const client = `The Aultman Family`

const images = [
  {
    src: `https://images.showmetours.biz/the-aultman-family/aultman-0.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/the-aultman-family/aultman-1.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/the-aultman-family/aultman-2.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
]

const seo = {
  title: `Review from ${client} / Show Me Tours`,
  description: `Read reviews from ${client}, one of our happy clients.`,
  images: images.map((image) => image.src),
  canonical: `/reviews/aultman-family`
}
export const metadata = meta(seo)

export default function AultmanFamily() {
  const pageContent1 = <div><p>
    Daniel Ellis of Show Me Tours turned our family’s New York City vacation into a magical experience, organizing a seamless itinerary filled with private drivers, a knowledgeable tour guide, dinner reservations, and unforgettable evenings featuring Rise NY, and the Broadway musical The Outsiders. The highlight was a stunning dinner cruise on the Hudson River with front-row views of Macy’s dazzling 4th of July fireworks. For anyone planning a dream NYC getaway, pack your bags and GO—but make Daniel your first call.
  </p></div>

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
