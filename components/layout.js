import {Fragment} from "react";
import NavItemsToLeft, {NavItemsToRight} from "./nav";
import {FooterOne, FooterTwo} from "./footer";
import {addLocalBusiness, addLogo} from "./Schema";
import {Multiple} from "./Schema/Container";


export default function RootLayout(props) {
  return <Fragment>

    <NavItemsToRight/>
    <main>
      {props.children}
    </main>
    <FooterOne/>
  </Fragment>
}
