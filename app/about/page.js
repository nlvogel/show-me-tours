import info from '../../client.json'
import {HeroSectionOne} from "components/heroSections";
import bg from "../../public/assets/images/about.jpg";
import {TextField} from "components/explanation"
import Image from "next/image";
import AboutSection from "components/aboutSection";

export default function AboutPage() {
  return (
    <div>
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
