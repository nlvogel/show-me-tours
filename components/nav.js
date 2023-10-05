"use client"

import info from '../client.json'
import {nav} from '../utils/nav'
import Link from "next/link";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

export default function NavItemsToLeft() {
    const currentRoute = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    function clickHandler() {
        setIsOpen((current) => !current);
    }

    useEffect(() => {
        setIsOpen(false);
        window.onresize = function () {
            const w = window.outerWidth;
        if (w > 668) {
            setIsOpen(false);
        }}// Close the navigation panel
    }, [currentRoute]);

    return <nav className="navbar flex-start">
        <Link className="brand" href="/">
            <div className="logo"/>
        </Link>
        <div className="nav-menu" onClick={clickHandler}></div>
        <div className={`nav-items ${isOpen ? 'nav-active' : 'nav-hidden'}`}>
          {
            Object.keys(nav)
              .map(key =>
                <Link key={key} href={nav[key].slug}>{nav[key].text}</Link>)
          }
        </div>
    </nav>
}

export function NavItemsToRight() {
    const currentRoute = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    function clickHandler() {
        setIsOpen((current) => !current);
    }

    useEffect(() => {
        setIsOpen(false);
        window.onresize = function () {
            const w = window.outerWidth;
        if (w > 668) {
            setIsOpen(false);
        }}// Close the navigation panel
    }, [currentRoute]);

    return <nav className="navbar space-between">
        <Link href="/" className="brand">
          <div className="logo"></div>
        </Link>
        <div className={isOpen ? `nav-clicked` : `nav-menu`} onClick={clickHandler}></div>
        <div className={`nav-items ${isOpen ? 'nav-active' : 'nav-hidden'}`}>
            {
                Object.keys(nav)
                    .map(key =>
                        <Link className={`nav-item`} key={key} href={nav[key].slug}>{nav[key].text}</Link>)
            }
        </div>
    </nav>
}
