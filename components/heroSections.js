import styles from "./heroSections.module.css"
import PrimaryButton, {SecondaryButton} from "./button";

export function HeroSectionOne(props) {
    return <div>
        <div>
            <div className={styles.heroSection} style={{
                background: `url(${props.image.src}) rgba(0,0,0,0.5) no-repeat ${props.backgroundPosition}`,
                backgroundBlendMode: "overlay",
                backgroundSize: `${props.backgroundSize}`,
                // height: `${props.viewHeight}px`,
                minHeight: `${props.viewHeight}px`,
            }}>
                <div className={`${styles.heroText} max-width`}>
                    <h1 className={styles.heroHeader}>{props.firstHeader}</h1>
                    <h2>{props.secondHeader}</h2>
                    <p className={`${styles.heroContent} ${props.textAlign === 'center' ? `text-center` : props.textAlign === 'left' ? `text-left` : `text-center`}`}>{props.heroContent}</p>
                    {props.includeButtons &&
                    <>
                        <div className={`flex ${props.buttonLayout} mb-2`}>
                            {props.includePrimaryButton && <PrimaryButton href={props.href} additionalClass={props.roundedButtons ? 'rounded' : ''}>{props.primaryCTA ? props.primaryCTA : `PLAN A TRIP`}</PrimaryButton>}
                            {props.includeSecondaryButton && <SecondaryButton href2={props.href2} additionalClass={props.roundedButtons ? 'rounded' : ''}>{props.secondaryCTA ? props.secondaryCTA : `CONTACT`}</SecondaryButton>}
                        </div>
                        {props.includeAccountLink && 
                        <div className={`text-center`}>
                            <a 
                                href={props.accountLinkHref} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{
                                    color: 'white',
                                    textDecoration: 'underline',
                                    fontSize: '1.1rem',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                                    fontWeight: '500'
                                }}
                                aria-label="Access your Show Me Tours account"
                            >
                                Access your account
                            </a>
                        </div>
                        }
                    </>
                    }
                </div>
            </div>
        </div>
    </div>
}
