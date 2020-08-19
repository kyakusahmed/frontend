import React, { Component } from "react";
import { registerUser } from "../../actions/authAction";
import { connect } from "react-redux";
import SignUpForm from "./SignUpForm";
import { Container, Segment, Grid } from "semantic-ui-react";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      loading: false,
      registerSuccess: null,
    };
  }
  handleSubmit = () => {
    this.setState({ allError: null, passwordError: null });
    const { firstName, lastName, email, password } = this.state;
    if (firstName || lastName || email || password) {
      if (password.length > 7) {
        this.setState({ loading: true });
        const user = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        };
        this.props.registerUser(user);
      } else {
        this.setState({
          passwordError: "Password must be at least 8 characters",
          registerSuccess: null,
        });
      }
    } else {
      this.setState({
        allError: "All fields are required.",
        registerSuccess: null,
      });
    }
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      loading: false,
      allError: null,
      passwordError: null,
    });
  };

  componentWillReceiveProps(nextprops) {
    this.setState({ loading: false, allError: null, passwordError: null });
    if (nextprops.error) {
      this.setState({ allError: nextprops.error });
    }
    if (nextprops.user.message === "user created") {
      this.setState({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        registerSuccess:
          "Registration successful, Please login to your account",
      });
    }
    if (nextprops.user.message === "email is already registered") {
      this.setState({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        allError: "email is already registered",
        registerSuccess: null,
      });
    }
  }

  render() {
    const { passwordError, allError, loading, registerSuccess } = this.state;
    return (
      <Container>
        <Grid centered stackable>
          <Grid.Column width={6}>
            <Segment style={{ margin: "5em 0em", padding: "2em 1em" }}>
              <SignUpForm
                handleSubmit={this.handleSubmit}
                handleOnChange={this.handleOnChange}
                passwordError={passwordError}
                allError={allError}
                loading={loading}
                registerSuccess={registerSuccess}
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
const mapStatetoProps = (state) => ({
  error: state.authReducer.registerErrors,
  user: state.authReducer.registerUser,
});

export default connect(mapStatetoProps, { registerUser })(SignUp);
