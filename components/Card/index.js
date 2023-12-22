import Image from "next/image";
import Button from "../Buttons";
import classes from './index.module.css'
import Link from "next/link";
import {addImage} from "../Schema";
import {Individual} from "../Schema/Container";

export default function Card({card, className}) {
    const featuredImage = card.featuredImage
    const imageSchema = addImage({image: `${process.env.CLOUDFLARE_BUCKET}/${featuredImage.image.filename}`})
    return (
        <div className={`${classes.cardContainer} py0 ${className}`}>
            <Individual schema={imageSchema} />
            <div className={classes.card}>
                <div className={classes.cardImageContainer}>
                    {card.includeButton && !card.buttons.openInNewTab ?
                        <Link href={card.buttons.link}>
                            <Image className={classes.cardImage}
                                   src={`${process.env.CLOUDFLARE_BUCKET}/${featuredImage.image.filename}`}
                                   alt={featuredImage.altDescription}
                                   width={featuredImage.image.width}
                                   height={featuredImage.image.height}
                            />
                        </Link> : card.includeButton && card.buttons.openInNewTab ?
                            <a href={card.buttons.link} target={`_blank`}>
                                <Image className={classes.cardImage}
                                       src={`${process.env.CLOUDFLARE_BUCKET}/${featuredImage.image.filename}`}
                                       alt={featuredImage.altDescription}
                                       width={featuredImage.image.width}
                                       height={featuredImage.image.height}
                                />
                            </a> :
                            <Image className={classes.cardImage}
                                   src={`${process.env.CLOUDFLARE_BUCKET}/${featuredImage.image.filename}`}
                                   alt={featuredImage.altDescription}
                                   width={featuredImage.image.width}
                                   height={featuredImage.image.height}
                            />
                    }
                </div>
                <div className={classes.cardBody}>
                        <h3>{card.cardHeader}</h3>
                        <SerializeLexical nodes={card.cardText?.root?.children}/>
                </div>
                <div>{card.includeButton && <Button buttons={card.buttons}/>}</div>
            </div>
        </div>
    )

}
