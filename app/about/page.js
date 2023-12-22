import info from '../../client.json'
import {HeroSectionOne} from "components/heroSections";
import bg from "../../public/assets/images/about.jpg";
import {TextField} from "components/explanation"
import Image from "next/image";
import AboutSection from "components/aboutSection";
import {addLocalBusiness, addLogo} from "../../components/Schema";

const meta = {
  title: 'About Show Me Tours',
  description: 'Learn more about the people behind Show Me Tours.',
  url: `https://${info.client.website}/about`,
}

export const metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    siteName: 'Show Me Tours',
    images: '/assets/images/about.jpeg',
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
  metadataBase: new URL(meta.url)
}

export default function AboutPage() {

  const schema = [
    addLogo, addLocalBusiness
  ]

  return (
    <div>
      <script type={`application/ld+json`}
            dangerouslySetInnerHTML={{__html: JSON.stringify(schema.map(s => s))}}/>
      <HeroSectionOne
        firstHeader={`About ${info.client.name}`}
        heroContent="Show Me Tours is a small family business, whose mission is providing excellent service in personalizing trips to New York City, Boston and/or Washington DC for your family or group. Whether you are a big school theater group that wants to learn all about Broadway in New York City, or you are a family that wants to delve deep into the history of Washington DC, we will customize everything according to your interests and needs with a personal touch that will make you feel like family."
        image={bg}
        viewHeight={500}
        backgroundPosition="center"
        backgroundSize={`cover`}
        includeButtons={true}
        roundedButtons={false}
        includePrimaryButton={true}
        includeSecondaryButton={false}
        buttonLayout={`space-evenly`}
        href={`contact`}
        textAlign={`left`}
      />
      <AboutSection
        aboutTitle={`MEET OUR STAFF`}
      />
    </div>
  )
}
