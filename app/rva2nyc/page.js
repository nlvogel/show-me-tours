import info from '../../client.json'
import {HeroSectionOne} from "../../components/heroSections";
import bg1 from "/public/assets/images/Picture3.webp"
import bg2 from "/public/assets/images/Picture2.webp"
import bg3 from "/public/assets/images/Picture1.webp"
import logo from "/public/assets/images/RVA2NYC-logo-FINAL.webp"
import {TextField} from "../../components/explanation";
import PrimaryButton, {SecondaryButton} from "../../components/button";
import {addLocalBusiness, addLogo} from "../../components/Schema";
import ContentWithMedia from "../../components/ContentWithMedia";
import Image from "next/image";

const meta = {
  title: 'Weekend getaways in New York City from Richmond, VA',
  description: 'See NYC your way with RVA2NYC.',
  url: `https://${info.client.website}/rva2nyc`,
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
  metadataBase: new URL(meta.url)
}

export default async function Page() {

  const schema = [
    addLogo, addLocalBusiness
  ]

  return (
    <div>
      <script type={`application/ld+json`}
              dangerouslySetInnerHTML={{__html: JSON.stringify(schema.map(s => s))}}/>
      <HeroSectionOne
        firstHeader="Weekend getaways in New York City from Richmond, VA"
        secondHeader="Forget the boring details and spend an amazing weekend in NYC!"
        image={bg1}
        viewHeight={600}
        backgroundPosition="bottom"
        includeButtons={true}
        roundedButtons={true}
        includePrimaryButton={true}
        includeSecondaryButton={true}
        buttonLayout={`space-evenly`}
        backgroundSize={`cover`}
        primaryCTA={'Register Your Group/Family Now'}
        secondaryCTA={'Register as an Individual Now'}
        href={'https://showmetours.campmanagement.com/group-register'}
        href2={'https://showmetours.campmanagement.com/individual-register'}
      />
      <div className={'px-1'}>
        <div style={{display: "flex", justifyContent: 'center'}}><Image src={logo.src} alt={''} width={250} height={250} layout={'responsive'}
                  style={{margin: '2rem auto 0', maxWidth: '50%'}}/></div>
        <TextField textFieldTitle={``}>
          <ContentWithMedia header={''} featuredImage={bg3} textPosition={'Right'} aspectRatio={'landscape'}
                            content={<p>Have you ever wanted to just forget everything for a couple of days and spend an
                              amazing weekend in New
                              York
                              City without having to plan all the boring details? This is your chance! Show Me Tours
                              welcomes you (and
                              your
                              friends or family!) to a NYC-weekend getaway YOUR way!</p>}/>
          <ContentWithMedia header={''} featuredImage={bg2} textPosition={'Left'} aspectRatio={'landscape'}
                            content={<p>You will take a private coach bus, leaving RVA mid-morning on Friday, and will
                              arrive in New York City in front of your hotel in the heart of Times Square! Enjoy 2
                              nights at the 4-star, Art Deco Hotel Edison, just steps away from all that Times Square
                              has to offer! You will leave New York City on Sunday late afternoon returning to RVA in
                              the evening.</p>}>
          </ContentWithMedia>
          <TextField>
            <p>While you are in New York City, you can either do your own thing, or add on some one-of-a-kind
            experiences
            with Daniel Ellis, owner of Show Me Tours. Daniel has the insider scoop on all things NYC. He lived in NYC
            for
            over 20 years and worked as a tour guide in the city for most of that time. Whether you’re traveling with
            family, friends, coworkers, or going solo, this getaway offers the perfect mix of convenience, adventure,
            and
            New York City charm.</p>
          </TextField>
        </TextField>
        <div className={`flex space-evenly mb-2`}>
          <PrimaryButton
            href={'https://showmetours.campmanagement.com/group-register'}
            additionalClass={`rounded`}>
            Register Your Group/Family Now
          </PrimaryButton>
          <SecondaryButton
            href2={'https://showmetours.campmanagement.com/individual-register'}
            additionalClass={`rounded`}>
            Register as an Individual Now
          </SecondaryButton>
        </div>
      </div>
    </div>
  )
}
