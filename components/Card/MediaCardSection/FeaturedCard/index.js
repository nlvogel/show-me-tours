import classes from "./index.module.scss";
import Link from "next/link";
import {FeaturedMediaCardSectionFallback, MediaCardSection} from "@/components/Card/MediaCardSection";
import {Suspense} from "react";

export function FeaturedCard({root, slug, item, customTitle, isSeries = false}) {

    let title

    switch (root) {
        case 'messages':
            title = 'Message'
            break
        case 'series':
            title = 'Series'
            break
        case 'songs':
            title = 'Song'
            break
        case 'albums':
            title = 'album'
            break
        case 'events':
            title = 'Featured Event'
            break
        default:
            title = ''
    }

    return <Suspense fallback={<FeaturedMediaCardSectionFallback />}>
        <section className={classes.mostRecent}>
            <Link href={`/${root}/${slug}`} className={`text-center ${classes.mostRecentTitle}`}>
                <h2>{customTitle ? customTitle : root === 'events' ? title : `Most Recent ${title}`}</h2>
            </Link>
            <MediaCardSection includeCategory={true} items={item} featured={item}
                              contentType={`${root}`} isSeries={isSeries}/>
        </section>
    </Suspense>
}

export const FeaturedCardFallback = ({children}) => {
    return <section className={classes.mostRecent}>
        <a href={`#`} className={`text-center ${classes.mostRecentTitle}`}>
            <h2>Most Recent </h2>
        </a>
        {children}
    </section>
}