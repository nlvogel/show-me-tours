import info from '../client.json'
import {nav} from "../utils/nav";
import Link from "next/link";
import Address from "./address";

export function FooterOne() {
    return <footer>
        <div className={`footer-top`}>
            <div className={`footer-nav`}>
                <div className={`footer-nav-items`}>
                    {
                        Object.keys(nav)
                            .map(key =>
                                <Link className={`footer-nav-item`} key={key} href={nav[key].slug}>{nav[key].text}</Link>)
                    }
                </div>
            </div>
            <div className={`footer-logo-container`}>
                <Link href="/">
                    <div className={`footer-logo`}/>
                </Link>
            </div>
            <div className={`footer-contact`}>
                {/*<Address />*/}
                <div>
                    <a className={`block`} href={`mailto:${info.client.email}`}>{info.client.email}</a>
                    <a className={`block`} href={`tel:${info.client.phone}`}>{info.client.phoneFmt}</a>
                  <a className={`block`} href={`tel:${info.client.phone2}`}>{info.client.phoneFmt2}</a>
                </div>
            </div>
        </div>
        <div className={`footer-bottom`}>
            <div className={`footer-info`}>{info.client.name} © {new Date().getFullYear()}</div>
            {/*<div className={`footer-social`}>Social links</div>*/}
            <div className={`footer-designed-by`}>Designed and maintained by <a href={`#`}>Midlo Web Design</a></div>
        </div>
    </footer>
}

export function FooterTwo() {
    return <footer>
        <address>
            {info.client.name} <br/>
            {info.client.address.lineOne} <br/>
            {info.client.address.lineTwo !== "" ? info `${info.client.address.lineTwo} <br/>` : ""}
            {info.client.address.city}, {info.client.address.state} {info.client.address.zip} <br/>
        </address>
    </footer>
}
