import info from '../client.json'
import {HeroSectionOne} from "./heroSections";

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
                <div className={`reviewer`}>
                  <small>{r.name}</small>
                </div>
              </div>
            )}
          </div>
        </section>
      </>
    )
}
