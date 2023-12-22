import PropTypes from "prop-types";
import {MediaCard, MediaCardNoLink} from "./MediaCard";
import classes from './index.module.scss'

export const MediaCardSectionFallback = ({children}) => {
    return <section className={`${classes.container}`}>
        {children}
    </section>
}

export const FeaturedMediaCardSectionFallback = ({children}) => {
    return <section className={`${classes.featuredContainer}`}>
        {children}
    </section>
}

export function MediaCardSection({items, featured, className, disabled = false, embedded}) {
     if (!featured && !disabled) {
        return <section className={`${classes.container} ${className}`}>
          {items
            .map((item, i) => (
                <MediaCard
                    key={i}
                    item={item}
                    slug={item.slug}
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.image.altDescription}
                    title={item.name}
                    link={item.link || ``}
                    cta={item.cta}
                    embedded={embedded}
                    label={item.label}
                    author={item.author}
                />
            ))}</section>
    } else if (featured) {
        let position
        switch (featured.featuredImage.imagePosition) {
            case 'backgroundTop':
                position = `top`
                break
            case 'backgroundLeft':
                position = `left`
                break
            case 'backgroundBottom':
                position = `bottom`
                break
            case 'backgroundRight':
                position = `right`
                break
            default:
                position = `center`
                break
        }

        return <section className={`${classes.featuredContainer} ${className}`}>
            <MediaCard
                item={featured}
                slug={featured.slug}
                src={`${process.env.CLOUDFLARE_BUCKET}/${featured.featuredImage.image.filename}`}
                width={featured.featuredImage.image.width}
                height={featured.featuredImage.image.height}
                alt={featured.featuredImage.altDescription}
                title={featured.name}
                featured={true}
                cta={featured.cta}
                rsvp={featured.link}
                summary={featured.summary}
                imagePosition={position}
                label={featured.label}
                author={featured.author}
            />
        </section>
    } else if (disabled) {
        return <section className={`${className}`}>{items
            .map((item, i) => (
                <MediaCardNoLink
                    disabled={disabled}
                    key={i}
                    item={item}
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.altDescription}
                    title={item.name}
                />
            ))}</section>
    }
}

MediaCardSection.propTypes = {
    items: PropTypes.array.isRequired,
    featured: PropTypes.object,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    secondaryRoot: PropTypes.any,
}
