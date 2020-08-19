import React, { Fragment } from "react";
import { Form, Button, Header, Icon, Input } from "semantic-ui-react";
import Alert from "../notifications/Alert";

const MyForm = ({
  handleSubmit,
  handleOnChange,
  passwordError,
  allError,
  registerSuccess,
  loading,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Header textAlign="center">Add Your Advert</Header>
      {passwordError || allError ? (
        <Alert message={passwordError || allError} type="negative" />
      ) : (
        ""
      )}
      {registerSuccess ? (
        <Alert message={registerSuccess} type="positive" />
      ) : (
        ""
      )}

      <Form.Field
        label="title"
        onChange={handleOnChange}
        name="title"
        control={Input}
        type="text"
        placeholder="title"
      />

      <Form.Field
        label="description"
        onChange={handleOnChange}
        name="description"
        control={Input}
        type="TextArea"
        placeholder="briefly describe the item"
      />

      <Form.Field
        label="AnyFault"
        onChange={handleOnChange}
        name="AnyFault"
        control={Input}
        type="TextArea"
        placeholder="Any Fault"
        style={{ height: "2.5em" }}
      />

      <Form.Field
        label="Location"
        onChange={handleOnChange}
        name="YourLocation"
        control={Input}
        type="Text"
        placeholder="Enter Your Location"
      />

      <Form.Field
        label="contact"
        onChange={handleOnChange}
        name="contact"
        control={Input}
        type="Text"
        placeholder="Contact"
      />

      <Form.Field
        label="Item In Return"
        onChange={handleOnChange}
        name="ExpectedItemInReturn"
        control={Input}
        type="Textarea"
        placeholder="Expected Item In Return"
        style={{ height: "2.5em" }}
      />

      <Form.Field
        label="Select Image"
        onChange={handleOnChange}
        name="productImage"
        control={Input}
        type="file"
        placeholder=""
      />

      <Button type="submit" color="brown" size="medium" fluid>
        {loading ? (
          <Fragment>
            <Icon loading name="spinner" />
            Adding...
          </Fragment>
        ) : (
          "Add Advert"
        )}
      </Button>
    </Form>
  );
};

export default MyForm;
