import ContentWithMedia from "../../../components/ContentWithMedia";
import RenderCarousel from "../../../components/Carousel";
import {SecondaryButton} from "../../../components/button";
import {meta} from "../../../components/Metadata";
import {addLocalBusiness, addLogo} from "../../../components/Schema";

const client = `Katie`

const images = [
  {
    src: `https://images.showmetours.biz/IMG_3297.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/IMG_3348.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/IMG_3393.webp`,
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

export default function Katie() {
  const pageContent1 = <div><p>We recently returned from a wonderful Christmas trip to NYC! Show Me Tours did an amazing
    job personalizing our family trip and taking the guess work out of everything! Airport transfers and all plans were
    laid out beautifully! We were able to enjoy family time with zero stress, while maximizing our time in the city!
    10/10 recommend Daniel for all of your trip planning needs!
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
