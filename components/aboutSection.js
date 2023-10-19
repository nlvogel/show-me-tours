import PrimaryButton from "./button";
import {ContactForm} from "./form";
import classes from './aboutSection.module.css'


export default function AboutSection(props) {
  return (
    <section className={`max-width about-section`}>
      <div className={`header-section mb-1`}>
        <h2>{props.aboutTitle}</h2>
      </div>
      <div className={`header-section mb-1 ${classes.detailContainer}`}>
        <img className={classes.image} src={'/assets/images/about-sm.webp'} alt={`daniel`} />
        <div className={classes.details}>
          <h2>Daniel Ellis</h2>
          <h3>Founder and President</h3>
        </div>
      </div>
      <p>When I visited New York City with my senior class in high school back in the 80s, I fell in love with the city
        and knew it would be my next home. I originally moved to NYC to pursue an acting career, and with some moderate
        success, was getting burned out with the various jobs I had to take to survive. In 2000, I went on a trip to
        England, and I went on a Jack the Ripper Tour led by a local actress. The tour was fascinating and I realized I
        didn’t need to wait tables or do any other crazy jobs to live in the city and practice my craft of acting. With
        my B.A. in History Education and my love for people and for NYC, I knew this was my calling. After receiving my
        tour guide license, I started out on red Double Decker buses and then moved up to walking tours with various
        companies. Show Me Tours was created in 2001 when I realized I had a passion for creating better itineraries for
        those visiting the city as well as provide better, personalized service.</p>

      <div className={`header-section mb-1 ${classes.detailContainer}`}>
        <img className={classes.image} src={'/assets/images/gina-about-sm.webp'} alt={`gina`} />
        <div className={classes.details}>
          <h2>Gina Ellis</h2>
          <h3>Co-owner and Office Manager</h3>
        </div>
      </div>
      <p>While I was landing for the first time in New York City on November 1st, 2005, the Statue of Liberty was right
        outside my window. As I gazed on this important symbol of freedom, I said to myself “I’m going to stay in this
        city until I really get to know it.” Throughout my 20s, I had traveled to over 30 countries and lived at many
        different addresses. I had been so concentrated on working or studying, that I never really got to learn about
        the places where I had lived. Little did I know on that airplane, that I would meet Daniel and start working for
        Show Me Tours less than a year later. I got to know New York City significantly more than the average New
        Yorker. While we were dating, Daniel and I would often end up in some random neighborhood in NYC, he would stop
        dead in his tracks and say something like “I think this is where so and so did such and such in the year
        ______!” Oftentimes, this would be followed by a long pause, so he could look on his phone to make sure he was
        right (he always was!) and read more about the event or the neighborhood.</p>
      <p className={`mb-3`}>I have been the Office Manager for Show Me Tours since July 2006. I created systems for all
        the behind the
        scenes operations of the business. I have kept it going for almost 20 years now, through three children, three
        moves, and a pandemic.</p>
      <ContactForm className={`mt-2`} formTitle={`Book a Tour`}/>
    </section>
  )
}
