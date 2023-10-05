import Link from "next/link";

export default function PrimaryButton(props) {
    return <Link href={`contact`} className={`btn primary-button ${props.additionalClass}`}>
        <button aria-label={props.ariaLabel} className={`cursor-pointer`}>PLAN A TRIP</button>
    </Link>
}

export function SecondaryButton(props) {
    return <Link href={props.href} className={`btn secondary-button ${props.additionalClass}`}>
        <button aria-label={props.ariaLabel} className={`cursor-pointer`}>{props.children}</button>
    </Link>
}
