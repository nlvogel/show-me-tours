import info from '../client.json'
import {HeroSectionOne} from "../components/heroSections";
import {Plan} from '../components/Plan'
import bg from "/public/assets/images/home.jpeg"
import {Reviews} from "../components/reviews";
import {TextField} from "../components/explanation";
import {ContactForm} from "../components/form";
import PrimaryButton from "../components/button";
import RenderCarousel from "../components/Carousel";
import {Suspense} from "react";
import Loading from "./loading";
import {images} from '../utils/getImages'

const meta = {
  title: 'Custom Tours of New York City, Washington D.C., and Boston',
  description: 'See the city the way you want to see it with a custom tour from Show Me Tours.',
  url: `https://${info.client.website}/`,
}

export const metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    siteName: 'Show Me Tours',
    images: '/assets/images/home.jpeg',
    locale: 'en_US',
    type: 'website',
  },
  canonical: meta.url,
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    }
  },
  verification: {
    google: info.client.verificationCode,
  },
  metadataBase: new URL(meta.url)
}

export default async function Page() {
  return (
    <div>
      <HeroSectionOne
        firstHeader="Custom Tours of New York City, Washington D.C., and Boston"
        secondHeader="Showing you the city the way you want to see it"
        image={bg}
        viewHeight={600}
        backgroundPosition="bottom"
        includeButtons={true}
        roundedButtons={true}
        includePrimaryButton={true}
        includeSecondaryButton={false}
        buttonLayout={`space-evenly`}
        backgroundSize={`cover`}
      />
      <TextField textFieldTitle={``}>
        <p>Whether you want to shop 5th Avenue in NYC, experience an evening memorial tour in DC, or tour historic
          Fenway Park (Green Monster) baseball stadium in Boston, Show Me Tours makes experiencing the city a truly
          memorable event. Leave the hassles of planning to us as we arrange everything. No more waiting in lines, no
          more wasting time and money; Show Me Tours will provide your transportation, detailed itinerary, hotel
          accommodation, attraction tickets, and dinner reservations at the best restaurants. Tell us what you want and
          we’ll make it happen!</p>
      </TextField>
      <Reviews />
      <div className={`flex mb-2 justify-content-center`}><PrimaryButton href={`contact`} additionalClass={`rounded`}>PLAN
        A TRIP</PrimaryButton></div>
      <Suspense fallback={<Loading />}>
        <RenderCarousel images={images}/>
      </Suspense>
      <div className={`flex mb-2 justify-content-center`}><PrimaryButton href={`contact`} additionalClass={`rounded`}>PLAN
        A TRIP</PrimaryButton></div>
      {/*<Plan />*/}
      <ContactForm formTitle={`Book a Tour`}/>
    </div>
  )
}
