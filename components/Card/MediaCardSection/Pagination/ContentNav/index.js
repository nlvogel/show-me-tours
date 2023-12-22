import PropTypes from "prop-types";
import Link from "next/link";
import classes from './index.module.scss'
import _ from "lodash"


export function ContentNav({next, prev, contentType, className, secondaryRoot}) {

    let root
    let nextLink
    let prevLink
    switch (contentType) {
        case 'Song':
            root = 'songs'
            nextLink = `${next.docs[0]?.meta?.album?.slug}`
            prevLink = `${prev.docs[0]?.meta?.album?.slug}`
            break;
        case 'Album':
            root = 'albums'
            break;
        case 'Message':
            root = 'messages'
            nextLink = `${next.docs[0]?.meta?.series?.slug}`
            prevLink = `${prev.docs[0]?.meta?.series?.slug}`
            break;
        case 'Series':
            root = 'series'
            break;
        default:
            root = 'messages'
            nextLink = `${next.docs[0]?.meta?.series?.slug}`
            prevLink = `${prev.docs[0]?.meta?.series?.slug}`
    }

    if (prev?.docs || next?.docs) {
        return <div className={`${classes.nav} ${className}`}>
            {prev.totalDocs > 0 && <Link className={next.docs.length < 1 ? classes.prev : undefined}
                                           href={`/${root}/${secondaryRoot && prev?.docs[0]?.meta?.series || prev?.docs[0]?.meta?.album ? `${prevLink}/` : ''}${prev.docs[0].slug}`}>Previous {contentType}</Link>}
            {next.totalDocs > 0 && (next.docs[0].sidebar?.status === "Published" || next.docs[0].status === "Published") &&
                <Link className={prev.docs.length < 1 ? classes.next : undefined}
                      href={`/${root}/${secondaryRoot  && next?.docs[0]?.meta?.series || next?.docs[0]?.meta?.album ? `${nextLink}/` : ''}${next.docs[0].slug}`}>Next {contentType}</Link>}
        </div>
    } else {
        return <div className={`${classes.nav} ${className}`}>
            {prev && <Link className={next ? classes.prev : undefined}
                                           href={`${_.kebabCase(prev.attributes.name)}`}>Previous {contentType}</Link>}
            {next && <Link className={prev ? classes.next : undefined}
                      href={`${_.kebabCase(next.attributes.name)}`}>Next {contentType}</Link>}
        </div>
    }
}

ContentNav.propTypes = {
    next: PropTypes.object.isRequired,
    prev: PropTypes.object.isRequired,
    contentType: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export const ContentNavFallback = () => {
        return <div className={`${classes.nav}`}>
            <a className={classes.prev} href={`#`}>Loading Previous</a>
            <a className={classes.next} href={`#`}>Loading Next</a>
        </div>
}