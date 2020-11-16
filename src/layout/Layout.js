import Sidebar from './Sidebar';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {NavMenu} from '../components/NavMenu/';

function Layout ({ children, ...props}) {
    
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="1" md="1">
          <NavMenu />
        </MDBCol>
        <MDBCol size="4" md="4">
            <Sidebar />            
        </MDBCol>
        <MDBCol size="7" md="7">
          {children}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Layout;