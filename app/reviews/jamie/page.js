import ContentWithMedia from "../../../components/ContentWithMedia";
import RenderCarousel from "../../../components/Carousel";
import {SecondaryButton} from "../../../components/button";
import {meta} from "../../../components/Metadata";
import {addLocalBusiness, addLogo} from "../../../components/Schema";

const client = `Jamie`


const images = [
  {
    src: `https://images.showmetours.biz/jamie_1-edit.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/jamie_2-edit.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  }, {
    src: `https://images.showmetours.biz/jamie_3-edit.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  }, {
    src: `https://images.showmetours.biz/jamie_4-edit.webp`,
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

export default function Jamie() {
  const pageContent1 = <div><p>My relationship with ShowMeTours began with my kids’ high school trips several years ago.
    Daniel planned the most amazing NYC tours for our students! In 2022 Daniel helped me plan an anniversary trip for my
    husband and me to NYC. I gave him my list of things we wanted to do/see and he customized an itinerary just for us!
    He made amazing suggestions for tours, Broadway shows, and restaurants and followed up with all of the reservations!
    Daniel loves NYC and wants his clients to love the City too. He goes above and beyond to make your trip special
    whether it’s a large group or just two of you!</p></div>

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
