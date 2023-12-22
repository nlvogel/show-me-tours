import Image from "next/image";
import PropTypes from "prop-types";
import classes from './index.module.scss'
import Link from "next/link";
import {Suspense} from "react";
import {addImage} from "../../../Schema";
import {Authors} from "../../../Authors";

export const MediaFallback = () => {
    return <div className={classes.card}>
        <div className={classes.innerFeatured}>
            <div className={classes.thumbnail}>
            </div>
            <div className={classes.messageDetails}>
                <div className={classes.mainInfo}>
                    <p className={`${classes.title}`}></p>
                </div>
            </div>
        </div>
        <div className={classes.cardFooter}>

        </div>
    </div>
}

export const FeaturedFallback = () => {
    return <div className={classes.featuredCard}>
        <div>
            <div className={classes.thumbnail}>
            </div>
            <div className={classes.messageDetails}>
                <div className={classes.mainInfo}>
                    <p className={`${classes.title}`}></p>
                </div>
            </div>
        </div>
        <div className={classes.cardFooter}>

        </div>
    </div>
}

export async function MediaCard({slug, src, width, height, alt, title, featured = false, cta, summary, imagePosition, embedded = false, label, author}) {

    const schema = addImage({image: src})

    return <Suspense fallback={featured ? <FeaturedFallback /> : <MediaFallback />}>
        <div className={featured ? classes.featuredCard : embedded ? classes.embedded : classes.card}><Link
            href={`/reviews${slug}`}>
            <script type={`application/ld+json`}
                    dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
            <div className={featured ? classes.innerFeatured : undefined}>
                {src && <div className={classes.thumbnail}>
                    {imagePosition ? <Image
                        className={`ratio ratio-16x9 ${featured ? classes.featuredImage : classes.image}`}
                        src={src}
                        width={width}
                        height={height}
                        alt={alt || ``}
                        style={{objectPosition: imagePosition}}
                        priority={featured}
                    /> : <Image
                        className={`ratio ratio-16x9 ${featured ? classes.featuredImage : classes.image}`}
                        src={src}
                        width={width}
                        height={height}
                        alt={alt || ``}
                        priority={featured}

                    />}
                </div>}
                <div className={classes.messageDetails}>
                    <div className={classes.mainInfo}>
                        <p className={`${classes.title}`}>{title}</p>
                      {author && <Authors
                            className={classes.author}
                            speakerList={author}
                            activeLinks={false}
                        />}
                    </div>
                    {summary && <p className={classes.summary}>{summary}</p>}
                </div>
            </div>
        </Link>
                <div className={classes.cardFooter}>
                    {cta && <Link href={`/reviews${slug}`} className={classes.externalCta} aria-label={label}>{cta}</Link>}
                </div>
        </div>
    </Suspense>
}

export function MediaCardNoLink({src, width, height, alt, overlayText, title, speakerList, date, endDate, categories,
                                    featured = false, disabled}) {
    const MediaCardNoLinkFallback = () => {
        return <div className={`${classes.disabledCard}`}>
            <div className={classes.thumbnail}>
            </div>
            <div className={classes.messageDetails}>
                <div className={classes.mainInfo}>
                    <p className={classes.title}></p>
                </div>
            </div>
        </div>
    }

    return <Suspense fallback={<MediaCardNoLinkFallback/>}>
        <div className={`${featured ? classes.featuredCard : disabled ? classes.disabledCard : classes.card}`}>
            {src && <div className={classes.thumbnail}>
                <Image
                    className={`ratio ratio-16x9 ${featured ? classes.featuredImage : classes.image}`}
                    src={src}
                    width={width}
                    height={height}
                    alt={alt || ``}
                />
            </div>}
            <div className={classes.messageDetails}>
                <div className={classes.mainInfo}>
                    <p className={classes.title}>{title}</p>
                </div>
            </div>
        </div>
    </Suspense>
}

export function ExternalLinkCard({root, slug, src, title, url, cta}) {
    return <div className={classes.card}><Link href={`${slug}`}>
        {src && <div className={classes.thumbnail}>
            <Image
                className={`ratio ratio-16x9 ${classes.image}`}
                src={src}
                width={356}
                height={200}
                alt={`An image with information about ${title} at Local Vineyard.`}
            />
        </div>}
        <div className={classes.messageDetails}>
            <div className={classes.groupInfo}>
                <p className={classes.groupTitle}>{title}</p>
            </div>
        </div>
    </Link>
        <div className={classes.cardFooter}>
            <Link target={`_blank`} href={`${root}/${slug}`} className={classes.externalCta}>{cta}</Link>
            <Link href={url}>MORE INFO</Link>
        </div>
    </div>
}

ExternalLinkCard.propTypes = {
    url: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.string,
    schedule: PropTypes.string,
}

MediaCard.propTypes = {
    root: PropTypes.string,
    slug: PropTypes.string.isRequired,
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string,
    overlayText: PropTypes.string,
    title: PropTypes.string,
    speakerList: PropTypes.array,
    date: PropTypes.string,
    categories: PropTypes.array,
    featured: PropTypes.bool,
}

MediaCardNoLink.propTypes = {
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string,
    overlayText: PropTypes.string,
    title: PropTypes.string,
    speakerList: PropTypes.array,
    date: PropTypes.string,
    categories: PropTypes.array,
    featured: PropTypes.bool,
    disabled: PropTypes.bool
}
