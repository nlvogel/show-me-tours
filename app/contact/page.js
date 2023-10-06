import info from '../../client.json'
import {HeroSectionOne} from "components/heroSections";
import bg from "../../public/assets/images/book-a-trip.jpeg";
import {ContactForm} from "components/form";
import Address from "components/address";
import {Reviews} from "../../components/reviews";

export default function ContactPage() {
    return (
        <>
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
                            <p>{info.client.phoneFmt}</p>
                            <Address />
                        </div>
                    </div>
                </div>
                <ContactForm
                    formTitle={`Form Title`}
                    contactPage={true}
                />
            </div>
          <Reviews />
        </>
    )
}
