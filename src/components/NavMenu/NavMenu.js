import Link from 'next/link'
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

const NavMenu = () => (
    <>
        <h2>
        <Link href="/">
            <a>Home</a>
        </Link>
        </h2>
        <h2>
        <Link href="/resume">
            <a>Resume</a>
        </Link>
        </h2>
        <h2>
        <Link href="/portfolio">
            <a>Portfolio</a>
        </Link>
        </h2>
        <h2>
        <Link href="/contacts">
            <a>Contacts</a>
        </Link>
        </h2>

    </>
);

export default NavMenu;