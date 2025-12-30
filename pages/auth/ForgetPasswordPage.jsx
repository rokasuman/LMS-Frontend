import React, { useRef } from "react";
import useForm from "../../hooks/useForm";

const initialState = {};

const ForgetPasswordPage = () => {
  const {form,handleOnchange} = useForm(initialState);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordref = useRef()


   const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value)
    console.log(confirmPasswordref.current.value)
  
  };

  return (
    <>
      <div className="login-page">
        <div className="login-overlay">
          <div className="login-card">
            <h3 className="text-center mb-2 text-danger">
              Forget the Password ?
            </h3>
            <p className="text-center">Do not worry just send the email !</p>
            <hr />

            <form onSubmit={handleOnSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  className="form-control"
                 required
                  value={form.email}
                 onChange={handleOnchange}
                />
              </div>
             <p className="bg-success text-white p-2 rounded">You will send you the OPT in your email.Please check your junk/spam folder. </p>
              <button type="submit" className="btn btn-primary w-100 mt-2">
                Request OTP
              </button>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  ref={passwordRef}
                  type="password"
                  name="password"
                  className="form-control"
                 onChange={handleOnchange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  ref={confirmPasswordref}
                  type="password"
                  name="password"
                  className="form-control"
                 onChange={handleOnchange}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-2">
                Reset Password
              </button>
            </form>
            <p className="text-center mt-2">
              <a href="/login">Back to Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordPage;
