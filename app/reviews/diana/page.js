import ContentWithMedia from "../../../components/ContentWithMedia";
import RenderCarousel from "../../../components/Carousel";
import {SecondaryButton} from "../../../components/button";
import {meta} from "../../../components/Metadata";
import {addLocalBusiness, addLogo} from "../../../components/Schema";

const client = `Diana Driver`

const images = [
  {
    src: `https://images.showmetours.biz/diana-1.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/diana-2.webp`,
    altDescription: ``,
    height: 640,
    width: 360,
  },
  {
    src: `https://images.showmetours.biz/diana-3.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/diana-4.webp`,
    altDescription: ``,
    height: 640,
    width: 360,
  },
  {
    src: `https://images.showmetours.biz/diana-5.webp`,
    altDescription: ``,
    height: 640,
    width: 360,
  },
]

const seo = {
  title: `Review from ${client} / Show Me Tours`,
  description: `Read reviews from ${client}, one of our happy clients.`,
  images: images.map((image) => image.src),
  canonical: `/reviews/${client.toLowerCase().replace(' ', '-')}`
}
export const metadata = meta(seo)

export default function Diana() {
  const pageContent1 = <div>
    <p>I have been taking my theatre students to New York City to see Broadway shows for almost 30 years. I have done it
      myself, I have used other tour companies, and finally, this year, I used Daniel. I cannot emphasize enough how
      different Show Me Tours is from other larger companies. He learned my students' names immediately, he stayed with
      us the entire time, and there was no guessing or worrying about anything the whole time. </p>
    <p>Since I have taken this trip many times, Daniel was very thoughtful in asking exactly what we hoped to get out of
      the trip, our budget, and what would be a deal breaker. Then he worked on making our dream trip happen.</p>
    <p>We didn’t eat at one single chain restaurant- he gave us an authentic look at New York, ate amazing food, saw
      amazing shows, and toured places I had never been before.
    </p>
    <p>My students gushed about the trip so much that other people in our school wanted to travel with them. Don’t
      hesitate. Book the trip. Show Me Tours is the real deal!</p>
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
