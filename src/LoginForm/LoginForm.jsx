// LoginForm.js
import { useContext } from 'react';
import { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { AuthContext } from '../AuthContext';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});
const LoginForm = () => {
  const { users, setUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(window.location.pathname==="login"){
    localStorage.clear()}
  })

  return (
    <div className="container">
      <div className="login-form">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          validateOnChange={false}
          validateOnBlur={true}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            const user = users.find(
              (user) => user.email === values.email && user.password === values.password
            );
            if (user) {
              setUserInfo({
                name: user.name,
                email: values.email
              });
              
              localStorage.setItem("Email", values.email);
              navigate('/');
            } else {
              setErrors({ email: 'Invalid email or password' });
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="field">
                <label htmlFor="email" className="label">Email</label>
                <Field type="email" name="email" className="input" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="field">
                <label htmlFor="password" className="label">Password</label>
                <Field type="password" name="password" className="input" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <button type="submit" disabled={isSubmitting} className="button">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
