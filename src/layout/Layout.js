import Sidebar from "./Sidebar";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { NavMenu } from "../components/NavMenu/";

function Layout({ children, ...props }) {
  return (
    <MDBContainer className="wrapper-app">
      <MDBRow>
        <MDBCol size="12" sm="12" md="2" xl="1" className="navmenu-mobile">
          <NavMenu />
        </MDBCol>
        <MDBCol size="12" sm="12" md="10" xl="4">
          <Sidebar />
        </MDBCol>
        <MDBCol size="12" sm="12" md="12" xl="7">
          {children}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Layout;
