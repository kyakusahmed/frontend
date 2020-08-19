import { createMedia } from "@artsy/fresnel";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Item, Responsive, Button } from "semantic-ui-react";
//import cars from "../../assets/Images/lam.png";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920,
  },
});

export class Home extends Component {
  render() {
    return (
      <Container
        style={{
          height: "90vh",
          margin: "0 10em 1em 10em",
          width: "25%",
        }}
      >
        <Responsive>
          <Item.Group divided>
            <Button as={Link} to="/post-advert" style={{ margin: "2em" }}>
              Post Advert
            </Button>

            <Item
              as={Link}
              to="/sign-up"
              style={{
                margin: "0em",
                justifyContent: "center",
              }}
            >
              <p style={{ margin: "auto" }}>ahmed</p>
            </Item>

            <Item
              as={Link}
              to="/sign-up"
              style={{
                margin: "0em",
                justifyContent: "center",
              }}
            >
              <p style={{ margin: "auto" }}>IT and Computers</p>
            </Item>

            <Item
              as={Link}
              to="/sign-up"
              style={{
                margin: "0em",
                justifyContent: "center",
              }}
            >
              <p style={{ margin: "auto" }}>ahmed</p>
            </Item>

            <Item
              as={Link}
              to="/sign-up"
              style={{
                margin: "0em",
                justifyContent: "center",
              }}
            >
              <p style={{ margin: "auto" }}>Electronics</p>
            </Item>
          </Item.Group>
        </Responsive>
      </Container>
    );
  }
}

export default Home;
