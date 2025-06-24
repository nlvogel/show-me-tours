import Link from "next/link";

export default function PrimaryButton(props) {
    return <Link href={props?.href || '/contact'} target={props.href?.includes('https') ? '_blank' : '_self'} className={`btn primary-button ${props.additionalClass}`}>
        <button aria-label={props.ariaLabel} className={`cursor-pointer`}>{props.children}</button>
    </Link>
}

export function SecondaryButton(props) {
    return <Link href={props?.href2 || '/'} target={props.href2?.includes('https') ? '_blank' : '_self'} className={`btn secondary-button ${props.additionalClass}`}>
        <button aria-label={props.ariaLabel} className={`cursor-pointer`}>{props.children}</button>
    </Link>
}
