import info from '../../client.json'
import bg from "../../public/assets/images/reviews-hero.webp";
import {HeroSectionOne} from "components/heroSections";
import classes from './index.module.scss'
import ContentWithMedia from "../../components/ContentWithMedia";
import {meta} from "../../components/Metadata";
import {MediaCardSection} from "../../components/Card/MediaCardSection";
import {addLocalBusiness, addLogo} from "../../components/Schema";


export const reviews = [
  {slug: `/gail`,
    image: {
      src: `https://images.showmetours.biz/gail_1.webp`,
      width: 640,
      height: 360,
      altDescription: `Two women standing in a tourist attraction in NYC.`
    },
    name: `From visiting famous landmarks to enjoying local cuisine, the trip was a perfect blend of learning and fun.`,
    cta: `Read more...`,
    label: `Read more about the review from Gail`,
    author: [{name: `Gail B. - 5th Grade Teacher - Monte Cassino School - Tulsa, OK `}]
  },
  {slug: `/ashlyn`,
    image: {
      src: `https://images.showmetours.biz/ashlyn_1-edit.webp`,
      width: 640,
      height: 360,
      altDescription: `A group of people standing in front of a bridge.`
    },
    name: `We could not have fit so much into this trip if it weren’t for Daniel Ellis with Show Me Tours planning our entire trip start to finish!`,
    cta: `Read more...`,
    label: `Read more about the review from Ashlyn`,
    author: [{name: `Ashlyn M. - Perry, FL`}]
  },
  {
    slug: `/diane`,
    image: {
      src: `https://images.showmetours.biz/Diane_1-edit.webp`,
      width: 640,
      height: 360,
      altDescription: `Two people holding a playbill for a show.`
    },
    name: `The size and scope of NYC requires a professional tour guide. Daniel is the ultimate professional!`,
    cta: `Read more...`,
    label: `Read more about the review from Diane`,
    author: [{
      name: `Diane M. - Greenville, NC.`
    }]
  },
  {
    slug: `/jamie`,
    image: {
      src: `https://images.showmetours.biz/jamie_2-edit.webp`,
      width: 640,
      height: 360,
      altDescription: `A group of children walking toward a tourist attraction.`
    },
    name: `[Show Me Tours] goes above and beyond to make your trip special whether it’s a large group or just two of you!`,
    cta: `Read more...`,
    label: `Read more about the review from Jamie`,
    author: [{
      name: `Jamie - Tulsa, OK`
    }]
  },
  {
    slug: `/jessica`,
    image: {
      src: `https://images.showmetours.biz/jessica_1-edit.webp`,
      width: 640,
      height: 360,
      altDescription: `A group of people standing outside of a tourist attraction in Washington, D.C.`
    },
    name: `Show Me Tours did an incredible job at organizing the trip and helping us tour the site.`,
    cta: `Read more...`,
    label: `Read more about the review from Jessica`,
    author: [{
      name: `Jessica C. - Richmond, VA`
    }]
  },
  {
    slug: `/mechelle`,
    image: {
      src: `https://images.showmetours.biz/mechelle_1-edit.webp`,
      width: 640,
      height: 360,
      altDescription: `A group of people posing for a picture in front of a heart.`
    },
    name: `Show Me Tours offers exceptional service and an extraordinary experience.`,
    cta: `Read more...`,
    label: `Read more about the review from Mechelle`,
    author: [{
      name: `Mechelle C. - Sacramento, CA`
    }]
  },
]

const seo = {
  title: `Reviews / Show Me Tours`,
  description: `Read reviews from some of our clients.`,
  images: reviews.map(({image}) => image.src),
  canonical: `/reviews`
}
export const metadata = meta(seo)

export default function ReviewPage() {

  const schema = [
    addLogo, addLocalBusiness
  ]

  return (
    <div>
      <script type={`application/ld+json`}
            dangerouslySetInnerHTML={{__html: JSON.stringify(schema.map(s => s))}}/>
      <HeroSectionOne
        firstHeader={`Reviews for ${info.client.name}`}
        secondHeader="See reviews from our customers"
        image={bg}
        viewHeight={350}
        backgroundPosition="center"
        includeButtons={false}
        roundedButtons={false}
        includePrimaryButton={false}
        includeSecondaryButton={false}
        buttonLayout={`flex-start`}
        backgroundSize={`cover`}
      />
      <div className={`max-width review-section`}>
        <h2>See what people are saying about {info.client.name}</h2>
        <p>We're proud of the service we can provide to our partners/customers. See what our happy customers are saying
          about us.</p>
      </div>
      <div>
        <MediaCardSection items={reviews}/>
      </div>
    </div>
  )
}
