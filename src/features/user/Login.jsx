import { Form, Formik, Field } from 'formik';
import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(loginform) => (
          <Form onSubmit={loginform.handleSubmit}>
            <Field name="username" type="text"/>
            <Field name="password" type="password" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
