import ContentWithMedia from "../../../components/ContentWithMedia";
import RenderCarousel from "../../../components/Carousel";
import {SecondaryButton} from "../../../components/button";
import {meta} from "../../../components/Metadata";
import {addLocalBusiness, addLogo} from "../../../components/Schema";

const client = `Mechelle`


const images = [
  {
    src: `https://images.showmetours.biz/mechelle_1-edit.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/mechelle_2-edit.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  }, {
    src: `https://images.showmetours.biz/mechelle_3-edit.webp`,
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

export default function Mechelle() {
  const pageContent1 = <div>
    <p>I first worked with Daniel over twenty years ago when he was a tour guide for one of those big student tour
      companies. While it was a good trip, Daniel was truly the bright spot. I requested him again the following year
      because I was so impressed with how he interacted with students and adults, and with the volume of information he
      had to share and his passionate delivery. Big company trips can sometimes be a little generic or cookie-cutter,
      but Daniel made our trips wonderful and personalized. </p>


    <p>When Daniel told me he was opening his own business, I happily took his card. I knew he had learned a lot of dos
      and don’ts working with other companies and I was eager to see how he would put it all together when he could do
      it his way. When I worked with him in ’07-’08 to plan a trip for 32 parents and students, he made it so easy.
      Daniel is attentive to the details and worked closely with me to plan the perfect trip for my seventh – ninth
      grade students. Our trip was amazing! Students and parents raved about Daniel and his sense of humor and quick
      rapport with our group. Parents who have traveled with us have gone back to Daniel time and time again for family
      tours and special events.</p></div>


  const pageContent2 = <div><p>We did trips with Daniel and Show Me Tours nearly every other year until we were forced
    to pause during the
    pandemic. I was thrilled to resume working together for a March 2023 trip. Daniel delivered a trip that was fresh,
    engaging, and exciting! His trip planning and tour features have grown stronger through the years. Show Me Tours
    offers exceptional service and an extraordinary experience.</p>


    <p>I can’t wait to travel to NYC again with Show Me Tours and Daniel Ellis!</p>
  </div>

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
    <ContentWithMedia
      textPosition={`Left`}
      content={pageContent2}
      featuredImage={images[1]}
      aspectRatio={`square`} header={{}}/>
    <div className={`flex justify-content-center align-center`}>
      <SecondaryButton children={`Read More Reviews`} href={`/reviews`} additionalClasses={`white`}/>
    </div>
    <h2 className={`ms-1`}>More Photos from {client}'s Trip</h2>
    <RenderCarousel images={images} mainImages={false} includeHeader={false}/>
  </main>
}
