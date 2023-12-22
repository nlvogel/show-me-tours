import Header from "../CustomHeader";
import classes from './index.module.css';
import Card from "../Card";

export default function CardSection({cards, cardLength, headerSection}) {
    return (
        <section className={`mWidth`}>
            <div>
                <Header className={`mb1 px1`} headerLevel={headerSection.headerLevel} children={headerSection.headerText}/>
            </div>
            <div className={classes.fluidContainer}>{cardLength === 4 &&
                <div className={`py1 ${classes.cardContainer}`}>
                    {cards.map((card, k) => (
                        <Card className={classes.cards4} key={k} card={card}/>
                    ))}
                </div>
            }
                {cardLength === 3 &&
                    <div className={`py1 ${classes.cardContainer} ${classes.cards}`}>
                        {cards.map((card, k) => (
                            <Card className={classes.cards3} key={k} card={card}/>
                        ))}
                    </div>
                }
                {cardLength === 2 &&
                    <div className={`py1 ${classes.cardContainer} ${classes.cards}`}>
                        {cards.map((card, k) => (
                            <Card className={classes.cards2} key={k} card={card}/>
                        ))}
                    </div>
                }</div>
        </section>
    )
}
