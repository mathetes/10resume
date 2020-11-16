import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
} from "mdbreact";

export const PersonalCard = () => {
  return (
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay="white-slight"
              className="card-img-top"
              src="https://hsto.org/getpro/moikrug/uploads/user/929/774/969/avatar/3fc8edb4202c4f5c67d3eaf4efc9b641.jpg"
              alt="avatar"
              style={{ width: "100%" }}
            />
          </MDBView>

          <MDBCardBody cascade className="text-center">
            <MDBCardTitle className="card-title">
              <strong>Roman Ayapergenov</strong>
            </MDBCardTitle>

            <p className="font-weight-bold position-text">Web developer</p>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{" "}
            </MDBCardText>

            <MDBCol md="12" className="d-flex justify-content-center">
              <MDBBtn rounded color="fb">
                <MDBIcon size="lg" fab icon="facebook-f"></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded color="tw">
                <MDBIcon size="lg" fab icon="twitter"></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded color="dribbble">
                <MDBIcon size="lg" fab icon="dribbble"></MDBIcon>
              </MDBBtn>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
  );
};
