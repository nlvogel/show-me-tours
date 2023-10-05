import info from '../client.json'

export function Pricing() {
    return (
        <section className={`pricing max-width`}>
            <h2>Pricing</h2>
            <div className={`price-container`}>
                {info.pricing.map((price, k) =>
                    <div className={`price-col ${k + 1 === info.pricing.length && k % 2 === 0 ? `col-last-child` : ``}`} key={k}>
                        <h3 className={`price-title`}>{price.title}</h3>
                        <div className={`price-info`}>
                            <p className={`price`}>{price.cost}</p>
                            {price.frequency && <small className={`price-freq`}>{price.frequency}</small>}
                        </div>
                        <ul className={`price-bullet-group`}>
                            {price.bullets.map((bullet, k) =>
                                <li className={`price-bullet-individual`} key={k}>
                                    {bullet}
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    )
}
