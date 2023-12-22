import info from '../client.json'
import {HeroSectionOne} from "./heroSections";
import {Stars} from "./Stars";
import classes from './reviews.module.css'

export function Reviews() {
  return (
    <>
      <section className={`reviews max-width`}>
        <div className={`header-section`}>
          <h2>RAVE REVIEWS</h2>
          <h3>from our 150+ 5-star reviews</h3>
        </div>
        <div className={`reviews-container`}>
          {info.reviews.map((r, k) =>
            <div className={`review-box ${k + 1 === info.reviews.length && k % 2 === 0 ? `col-last-child` : ``}`}
                 key={k}>
              <p>{r.review}</p>
              {r.url && <a href={r.url} target={`_blank`} className={classes.seeMore}>read more...</a>}
              <div className={`reviewer`}>
                <small>{r.name}</small>
              </div>
              <div>
                <Stars/>
              </div>
            </div>
          )}
        </div>
        <a className={classes.seeMore}
           href={`https://www.tripadvisor.com/Attraction_Review-g60763-d2494116-Reviews-Show_Me_Tours-New_York_City_New_York.html`}
           target={`_blank`}>See more reviews</a>
      </section>
    </>
  )
}
