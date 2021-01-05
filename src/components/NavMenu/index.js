import Link from 'next/link'
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

const menu = [
  {
    id: 1,
    link: "/",
    name: "About",
    classicon: "fas fa-user-check",
  },
  {
    id: 2,
    link: "/resume",
    name: "Resume",
    classicon: "fas fab fa-black-tie",
  },
  {
    id: 3,
    link: "/portfolio",
    name: "Portfolio",
    classicon: "fas fa-briefcase",
  },
  {
    id: 4,
    link: "/contacts",
    name: "Contacts",
    classicon: "fas fa-address-card",
  },
];

const menuItems = menu.map((item) => (
  <div className="one-page-menu-item" key={item.id}>
    <Link href={item.link}>
      <p className="icon ion-ios-person">
        <i className={item.classicon}></i>
        <span className="navmenu-item">{item.name}</span>
      </p>
    </Link>
  </div>
));

export const NavMenu = () => <>{menuItems}</>;