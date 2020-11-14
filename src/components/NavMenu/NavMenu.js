import Link from 'next/link'
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

const NavMenu = () => (
    <>
        <div className="one-page-menu-item">
        <Link href="/">
        <p className="icon ion-ios-person">
            <i className="fas fa-user-check"></i>
            <span className="navmenu-item">
                About
            </span>
        </p>            
        </Link>
        </div>

        <div className="one-page-menu-item">
        <Link href="/resume">
        <p className="icon ion-ios-person">
        <i className="fas fab fa-black-tie"></i>
            <span className="navmenu-item">
                Resume
            </span>
        </p>            
        </Link>
        </div>
        
        <div className="one-page-menu-item">
        <Link href="/portfolio">
        <p className="icon ion-ios-person">
        <i className="fas fa-briefcase"></i>
            <span className="navmenu-item">
                Portfolio
            </span>
        </p>            
        </Link>
        </div>
        
        
        <div className="one-page-menu-item">
        <Link href="/contacts">
        <p className="icon ion-ios-person">
        <i className="fas fa-address-card"></i>
            <span className="navmenu-item">
                Contacts
            </span>
        </p>            
        </Link>
        </div>

    </>
);

export default NavMenu;