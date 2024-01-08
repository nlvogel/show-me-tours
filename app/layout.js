'use client'

import NavItemsToLeft, {NavItemsToRight} from "../components/nav";
import {FooterOne, FooterTwo} from "../components/footer";
import styles from './globals.css'
import {GoogleTagManager} from '@next/third-parties/google'
import {client} from './client.js'

export default function RootLayout({
                                     children,
                                   }) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href={`/favicon.ico`}
            sizes="any"/>
    </head>
    <body>
    <NavItemsToRight/>
    {children}
    <FooterOne/>
    <GoogleTagManager gtmId={client.trackingCode}/>
    </body>
    </html>
  )
}
