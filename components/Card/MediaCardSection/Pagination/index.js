"use client"

import PropTypes from "prop-types";
import classes from './index.module.scss'
import Link from "next/link";
import {Suspense} from "react";

// TODO add filters

export const PagePlaceholder = () => {
    return <div className={classes.container}>
            <a href={`#`}
                  className={`inactive`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                </svg>
            </a>
            <div>
                <p>Page ## of ##</p>
            </div>
            <a href={`#`}
                  className={`inactive`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
            </a>
        </div>
}

export function Pages({pageNo, root}) {


    return <Suspense fallback={<PagePlaceholder />}>
        <div className={classes.container}>
            <Link scroll={false} href={pageNo.page - 1 > 1 ? `?p=${pageNo.page - 1}` : `/${root}`}
                  className={pageNo.page - 1 < 1 ? `inactive` : undefined}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                </svg>
            </Link>
            <div>
                <p>Page {pageNo.page} of {pageNo.totalPages}</p>
            </div>
            <Link scroll={false} href={`?p=${pageNo.page + 1}`}
                  className={pageNo.page + 1 > pageNo.totalPages ? `inactive` : undefined}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
            </Link>
        </div>
    </Suspense>
}

Pages.propTypes = {
    pageNo: PropTypes.object.isRequired,
    root: PropTypes.string.isRequired,
}