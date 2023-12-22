import React from 'react'
import classes from './index.module.scss'
import PropTypes from "prop-types";


export default function Button({buttons, className, peopleForm = false}) {


    if (buttons.length > 1) {
        return <div className={`${classes.btnContainer} ${className}`}>{buttons.map((button) => (
            <a key={button.id} href={button.link} target={button.openInNewTab === 'Yes' ? '_blank' : undefined}
               className={`${classes.btn} ${button.isPrimary ? classes.btnPrimary : classes.btnSecondary}`}
            data-open-in-church-center-modal={"true"}
            >{button.title}</a>
        ))}
        </div>
    } else if (buttons.length === 1) {
        return <div className={`${classes.singleBtn} ${className}`}>{buttons.map((button) => (
            <a key={button.id} href={button.link} target={button.openInNewTab === 'Yes' ? '_blank' : undefined}
               className={`${classes.btn} ${button.isPrimary ? classes.btnPrimary : classes.btnSecondary}`}
                        data-open-in-church-center-modal={"true"}

            >{button.title}</a>
        ))}
        </div>
    } else if (buttons.length === 0) {

    } else {
        return (<div className={`${classes.singleBtn} ${className}`}>
            <a href={buttons.link} target={buttons.openInNewTab === 'Yes' ? '_blank' : undefined}
               className={`${classes.btn} ${buttons.isPrimary ? classes.btnPrimary : classes.btnSecondary}`}
                        data-open-in-church-center-modal={"true"}

            >{buttons.title}</a>
        </div>)
    }
}

export function ConnectButton({className}) {
    return (<div className={`${classes.btnContainer} ${className}`}>
        <a data-open-in-church-center-modal={"true"} href={`https://local.churchcenter.com/people/forms/115766`} target={'_blank'}
           className={`${classes.btn} ${classes.btnPrimary}`}>Made a decision to follow Jesus?</a>
        <a data-open-in-church-center-modal={"true"} href={`https://local.churchcenter.com/giving`} target={`_blank`} className={`${classes.btn} ${classes.btnSecondary}`}>
            Partner with us financially
        </a>
    </div>)
}
