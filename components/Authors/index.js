import Link from "next/link";
import PropTypes from "prop-types";
import classes from './index.module.scss'

export function Authors({speakerList, activeLinks = false, className}) {

    if (activeLinks) {
        return <div className={`${classes.container} ${className}`}>{speakerList.map((speaker, i) => (
            <span key={i}><Link href={`/speakers/${speaker.slug}`} className={classes.names}>{speaker.name}</Link>{speakerList.length > 1 && speakerList[speakerList.length - 1].slug !== speaker.slug && `, `}</span>
        ))}
        </div>
    } else {
        return <div className={`${classes.container} ${className}`}>{speakerList.map((speaker, i) => (
            <span key={i} className={classes.names}><p>{speaker.name}{speakerList.length > 1 && speakerList[speakerList.length - 1].slug !== speaker.slug && `, `}</p></span>
        ))}
        </div>
    }
}

Authors.propTypes = {
    speakerList: PropTypes.array.isRequired,
    activeLinks: PropTypes.bool
}
