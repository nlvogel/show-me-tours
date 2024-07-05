import ContentWithMedia from "../../../components/ContentWithMedia";
import RenderCarousel from "../../../components/Carousel";
import {SecondaryButton} from "../../../components/button";
import {meta} from "../../../components/Metadata";
import {addLocalBusiness, addLogo} from "../../../components/Schema";

const client = `Danyelle J.`

const images = [
  {
    src: `https://images.showmetours.biz/danyelle-1.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/danyelle-2.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/danyelle-3.webp`,
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

export default function Danyelle() {
  const pageContent1 = <div><p>My mom and I went off for a mother daughter trip in celebration for my 30th birthday.
    Show Me Tours set us up for such an amazing experience of The Big Apple! New York City was everything I could imagine and more!
  </p><p>My Poppy had been placed on hospice the weekend our trip was originally planned, without hesitation Daniel was so
    understanding and accommodating in rearranging our trip for a later date. I am forever grateful for his kindness and
    compassion during my families time of loss. Daniel answered any and all questions I had during the planning period
    and during our stay.</p> <p>Our itinerary and tour of the city was well laid out and easily navigable. Bob (our tour guide)
    was excellent in showing us our way and he shared with us so much history, and fun facts along the way! This Florida
    girl can not wait to visit the big city lights again! Thank you so much Show Me Tours!!
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
