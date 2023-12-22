import ContentWithMedia from "../../../components/ContentWithMedia";
import RenderCarousel from "../../../components/Carousel";
import {SecondaryButton} from "../../../components/button";
import {meta} from "../../../components/Metadata";
import {addLocalBusiness, addLogo} from "../../../components/Schema";

const client = `Jessica`

const images = [
  {
    src: `https://images.showmetours.biz/jessica_1-edit.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/jessica_2-edit.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  }, {
    src: `https://images.showmetours.biz/jessica_3-edit.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  }, {
    src: `https://images.showmetours.biz/jessica_4-edit.webp`,
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
export default function Jessica() {
  const pageContent1 = <div>
    <p>Last week, I went on a trip with our homeschool friends (I think there were around 80 of
      us to beautiful Mount Vernon, Virginia, to see the home of George Washington. Show Me Tours did an incredible job
      at
      organizing the trip and helping us tour the site. Daniel was full of knowledge about the history of the mansion,
      the
      grounds, and the education center. He told us things to watch out for and where to look for answers to questions
      he
      gave the children. It kept everyone engaged and ready to learn.</p>

    <p>Also, there was an option for some of us to go to a character lunch. Gina at SMT highly recommended we go. It did
      not disappoint! We got to have a wonderful lunch followed by a presentation from “Dr. James Craik”, George
      Washington’s doctor and friend. After his presentation, he spent ample time answering many questions from the
      families who attended. It was so interesting and the food was great! Especially dessert.</p>

    <p>To end the day, at Daniel’s suggestion, we headed to the education center. I wish we could have spent more time
      there, but the day flew by. I’m so grateful for the guidance leading up to the trip and throughout the day! I hope
      to do another trip very soon with SMT!</p>
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
    <div className={`flex justify-content-center align-center`}>
      <SecondaryButton children={`Read More Reviews`} href={`/reviews`} additionalClasses={`white`}/>
    </div>
    <h2 className={`ms-1`}>More Photos from {client}'s Trip</h2>
    <RenderCarousel images={images} mainImages={false} includeHeader={false}/>
  </main>
}
