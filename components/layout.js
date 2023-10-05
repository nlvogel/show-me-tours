import {Fragment} from "react";
import NavItemsToLeft, {NavItemsToRight} from "./nav";
import {FooterOne, FooterTwo} from "./footer";

export default function Layout(props) {
    return <Fragment>
        <NavItemsToRight />
        <main>
            {props.children}
        </main>
        <FooterOne />
    </Fragment>
}
