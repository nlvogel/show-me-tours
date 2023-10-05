import info from '../../client.json'
import {Reviews} from "components/reviews";
import bg from "../../public/assets/images/pexels-santiago-sauceda-gonzález-15688135.jpeg";
import {HeroSectionOne} from "components/heroSections";

export default function ReviewPage() {
  return (
    <div>
      <HeroSectionOne
        firstHeader={`Reviews for ${info.client.name}`}
        secondHeader="See reviews from our customers"
        image={bg}
        viewHeight={50}
        backgroundPosition="center"
        includeButtons={false}
        roundedButtons={false}
        includePrimaryButton={false}
        includeSecondaryButton={false}
        buttonLayout={`flex-start`}
      />
      <div className={`max-width review-section`}>
        <h2>See what people are saying about {info.client.name}</h2>
        <p>We're proud of the service we can provide to our partners/customers. See what are happy customers are saying about us.</p>
        <p>We can add as much copy here as we want. We can add as much copy here as we want. We can add as much copy here as we want. We can add as much copy here as we want. We can add as much copy here as we want. We can add as much copy here as we want. </p>
      </div>
      <Reviews/>
    </div>
  )
}
