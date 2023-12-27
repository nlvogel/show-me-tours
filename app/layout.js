'use client'

import NavItemsToLeft, {NavItemsToRight} from "../components/nav";
import {FooterOne, FooterTwo} from "../components/footer";
import styles from './globals.css'
import {GoogleTagManager} from '@next/third-parties/google'
import {client} from './client.js'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body>
      <NavItemsToRight/>
      {children}
      <FooterOne/>
      <GoogleTagManager gtmId={client.trackingCode} />
      </body>
    </html>
  )
}
