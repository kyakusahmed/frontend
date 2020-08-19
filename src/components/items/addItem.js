import React, { Component } from "react";
import { postAdvert } from "../../actions/itemAction";
import { connect } from "react-redux";
import { Container, Segment, Grid } from "semantic-ui-react";
import MyForm from "./advertForm";

export class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      title: null,
      description: null,
      AnyFault: null,
      YourLocation: null,
      contact: null,
      ExpectedItemInReturn: null,
      loading: false,
      registerSuccess: null,
    };
  }
  handleSubmit = () => {
    this.setState({ allError: null, passwordError: null });
    const {
      title,
      description,
      AnyFault,
      YourLocation,
      contact,
      ExpectedItemInReturn,
    } = this.state;
    if (
      title ||
      description ||
      AnyFault ||
      YourLocation ||
      contact ||
      ExpectedItemInReturn
    ) {
      const post = {
        title: title,
        description: description,
        AnyFault: AnyFault,
        YourLocation: YourLocation,
        contact: contact,
        ExpectedItemInReturn: ExpectedItemInReturn,
      };
      this.props.postAdvert(post);
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
      this.setState({
        registerSuccess: null,
        allError: "all fields are required",
      });
    }
    if (nextprops.post.message === "advert added successfully") {
      this.setState({
        title: null,
        description: null,
        AnyFault: null,
        YourLocation: null,
        Contact: null,
        ExpectedItemInReturn: null,
        allError: null,
        registerSuccess: "advert added successfully",
      });
    }
  }

  render() {
    const { passwordError, allError, loading, registerSuccess } = this.state;
    return (
      <Container>
        <Grid centered stackable>
          <Grid.Column width={6}>
            <Segment style={{ margin: "1em 0em 2em 0em", padding: "2em 1em" }}>
              <MyForm
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
  error: state.itemReducer.error,
  post: state.itemReducer.post,
});

export default connect(mapStatetoProps, { postAdvert })(CreateItem);
