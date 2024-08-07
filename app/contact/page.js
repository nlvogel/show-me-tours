import info from '../../client.json'
import {HeroSectionOne} from "../../components/heroSections";
import bg from "../../public/assets/images/book-a-trip.jpeg";
import {ContactForm} from "../../components/form";
import Address from "../../components/address";
import {Reviews} from "../../components/reviews";
import classes from './contact.module.css'
import {addLocalBusiness, addLogo} from "../../components/Schema";

const meta = {
  title: 'Contact Show Me Tours',
  description: 'Contact Show Me Tours to start planning your perfect vacation.',
  url: `https://${info.client.website}/contact`,
}

export const metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    siteName: 'Show Me Tours',
    images: '/assets/images/book-a-trip.jpeg',
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

export default function ContactPage() {

  const schema = [
    addLogo, addLocalBusiness
  ]

  return (
    <>
      <script type={`application/ld+json`}
            dangerouslySetInnerHTML={{__html: JSON.stringify(schema.map(s => s))}}/>
      <div>
        <HeroSectionOne
          firstHeader={`Book a Tour with ${info.client.name}`}
          secondHeader="Since our tours are completely customized, we need a little more information from you than just the dates you want to travel. Please take some time to fill out the form below so we can set up a time to talk about what your perfect vacation looks like!"
          image={bg}
          viewHeight={600}
          backgroundPosition="center"
          backgroundSize={`cover`}
          includeButtons={true}
          roundedButtons={true}
          includePrimaryButton={false}
          includeSecondaryButton={false}
          buttonLayout={`flex-start`}
          href={`contact`}
        />
      </div>
      <div className={`contact-grid-container`}>
        <div className={`contact-container`}>
          <h2>Get in Touch</h2>
          <div className={`contact-grid`}>
            <div className={`contact-info`}>
              <p>{info.client.email}</p>
              <a className={classes.block} href={`tel:${info.client.phone}`}>{info.client.phoneFmt}</a>
              <a className={classes.block} href={`tel:${info.client.phone2}`}>{info.client.phoneFmt2}</a>
              {/*<Address />*/}
            </div>
          </div>
        </div>
        <ContactForm
          formTitle={`Book a Tour`}
          contactPage={true}
        />
      </div>
      <Reviews/>
    </>
  )
}
