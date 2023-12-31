import PrimaryButton from "./button";

export function ContactForm(props) {
  return (
    <div className={`form-container ${props.contactPage ? 'contact-form-container' : 'max-width'} ${props.className}`}>
      <h2>{props.formTitle}</h2>
      <form name={`contact-form`} data-netlify={true} method={`POST`}>
        <input type="hidden" name="form-name" value="contact-form"/>
        <input aria-label="first name" name="firstName" placeholder="First Name*" type="text" tabIndex="1" required/>
        <input aria-label="last name" name="lastName" placeholder="Last Name*" type="text" tabIndex="2" required/>
        <input aria-label="size of group" name="groupSize" placeholder="How many people are in your group?*"
               type="number" tabIndex="3" min={1} required/>
        <input aria-label="email" name="email" placeholder="Email Address*" type="email" tabIndex="4"
               required/>
        <input aria-label="phone number" name="phone" placeholder="Phone Number*" type="tel"
               tabIndex="5" required/>
        <input aria-label="estimated trip date" name="tripDate" placeholder="Estimated Trip Dates*" type="text"
               tabIndex="6" required/>
        <select className={`select-grid`} aria-label={`location dropdown`} name={`location`} required tabIndex={7}>
          <option defaultValue>Where would you like to go?</option>
          <option value={`New York City`}>New York City</option>
          <option value={`Boston`}>Boston</option>
          <option value={`Washington, D.C.`}>D.C.</option>
        </select>
        <textarea aria-label="write your message" name="message"
                  placeholder="Please leave any details you think I need to know"
                  tabIndex="8"/>
        <button name="submit" type="submit" id="contact-submit" className={`form-button cursor-pointer`}
                data-submit="Sending...">Submit
        </button>
      </form>
    </div>
  )
}
