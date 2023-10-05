import info from '../../client.json'
import Image from "next/image";
import classes from './index.module.css'

export function Plan() {
  return (
    <div>
      <div className={`text-field max-width`}>
        <div className={`header-section`}>
          <h2>TOURS TAILOR-MADE FOR YOU</h2>
        </div>
        <p>Show Me Tours works with you individually to customize your tour of New York City exactly like you want it.
          Our
          expert tour guides work with you from start to finish to ensure that your trip to New York is an experience
          you
          won’t forget. With 150+ 5-star reviews, we are confident that you will love our customized plans.</p>
        <p>Tired of cookie-cutter vacations? Try a tour of New York City tailor-made just for you and your group!</p>
      </div>
      <section className={`plan max-width`}>
        {
          info.plan
            .map((planNo, k) =>
              <div className={`plan-container ${k + 1 === info.plan.length && k % 2 === 0 ? `col-last-child` : ``}`}
                   key={k}>
                <Image src={planNo.imageUrl} alt={planNo.imageDescription} width={100} height={100}/>
                <h3 className={classes.planHeader}>{planNo.title}</h3>
                <p className={classes.planText}>{planNo.description}</p>
              </div>
            )
        }
      </section>
    </div>)
}
