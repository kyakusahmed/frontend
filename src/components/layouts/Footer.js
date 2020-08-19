import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, List, Grid, Header, Segment } from "semantic-ui-react";

export class Footer extends Component {
  render() {
    return (
      <Segment inverted color="brown" vertical style={{ padding: "3em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row
              style={{
                justifyContent: "center",
              }}
            >
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Pages" />
                <List link inverted>
                  <List.Item as={Link} to="/">
                    Home
                  </List.Item>
                  <List.Item as={Link} to="/sign-up">
                    Sign Up
                  </List.Item>
                  <List.Item as={Link} to="/sign-in">
                    Sign in
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Outside Catering</List.Item>
                  <List.Item as="a">Door to Door Delivery</List.Item>
                  <List.Item as="a">Take aways</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as="h4" inverted>
                  Contact us.
                </Header>
                <div>
                  <p>
                    Tel: <strong>+256-706-196611</strong>
                  </p>
                </div>
                <div>
                  <p>
                    Email: <strong>info@fastfoodfast.com</strong>
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
