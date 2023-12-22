import ContentWithMedia from "../../../components/ContentWithMedia";
import RenderCarousel from "../../../components/Carousel";
import {SecondaryButton} from "../../../components/button";
import {meta} from "../../../components/Metadata";
import {addLocalBusiness, addLogo} from "../../../components/Schema";

const client = `Gail`

const images = [
  {
    src: `https://images.showmetours.biz/gail_1.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/gail_4-edit.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/gail_6-edit.webp`,
    altDescription: ``,
    width: 640,
    height: 360,
  },
  {
    src: `https://images.showmetours.biz/gail_7-edit.webp`,
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


export default function Gail() {
  const pageContent1 = <div>
    <p>Over the past 17 years, I had the pleasure of experiencing unforgettable trips with Show Me Tours. As a 5th/6th
      grade social studies teacher in Tulsa, OK, I'm always on the lookout for educational and exciting travel
      opportunities for my students and Show Me Tours did not disappoint. My students have experienced fantastic tours
      to Washington DC, New York, and Boston.</p>


    <p>First and foremost, Daniel Ellis, the owner of Show Me Tours, is not only fun-loving but also incredibly
      knowledgeable. His passion for history and culture shone through at every step of the journey. It was evident
      that they had a deep understanding of the historical significance of each destination, which made the trip both
      informative and engaging for the students.</p></div>


  const pageContent2 = <div><p>The itinerary was well-planned, ensuring that we got to explore all the iconic landmarks
    and museums in each
    city. The students were not only entertained but also educated about the rich history of our nation. As a social
    studies
    teacher, I greatly appreciated the way he seamlessly incorporated educational elements into the trip.</p>


    <p>The accommodations were very comfortable, and the transportation was well-organized, making the logistics of the
      trip stress-free. And what I loved most was that he made learning fun through interactive activities and guided
      tours. It was more than a trip; it was a hands-on history lesson.</p></div>


  const pageContent3 = <div><p>But it wasn't just about the history; there was plenty of fun and excitement too.
    Daniels's vibrant personality
    brought a positive energy to the group, and the students and parents absolutely loved it. From visiting famous
    landmarks to enjoying local cuisine, the trip was a perfect blend of learning and fun.</p>


    <p>I can't recommend Show Me Tours enough. It is a fantastic choice for educators and students alike. If you want a
      well-rounded, educational, and enjoyable experience for your students, look no further. I can't wait to plan
      another trip with them in the future.</p></div>

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
      aspectRatio={`landscape`} header={{}}/>
    <ContentWithMedia
      textPosition={`Left`}
      content={pageContent2}
      featuredImage={images[1]}
      aspectRatio={`landscape`} header={{}}/>
    <ContentWithMedia
      textPosition={`Right`}
      content={pageContent3}
      featuredImage={images[2]}
      aspectRatio={`landscape`} header={{}}/>
    <div className={`flex justify-content-center align-center`}>
      <SecondaryButton children={`Read More Reviews`} href={`/reviews`} additionalClasses={`white`}/>
    </div>
    <h2 className={`ms-1`}>More Photos from {client}'s Trip</h2>
    <RenderCarousel images={images} mainImages={false} includeHeader={false}/>
  </main>
}
