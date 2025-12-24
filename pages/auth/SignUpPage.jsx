import React from "react";
import useForm from "../../hooks/useForm.js";
import { signUpNewUserApi } from "../../services/authApi.js";

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpPage = () => {
  const { form, handleOnchange, passwordError } = useForm(initialState);

  // function to handle submit
  const handleOnSubmit = async (e) => {
  e.preventDefault();

  const { confirmPassword, fullName, ...rest } = form;

  if (confirmPassword !== rest.password) {
    return alert("Passwords do not match");
  }

  // Split fullName into fName and lName
  const nameParts = fullName.trim().split(" ");
  const fName = nameParts.shift(); // first word
  const lName = nameParts.join(" "); // remaining words

  // Construct payload for backend
  const payload = { fName, lName, ...rest };

  const result = await signUpNewUserApi(payload);
  console.log(result)
};
console.log(passwordError)
  return (
    <div className="signup-page">
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="signup-card border p-4 rounded shadow-sm">
          <h3 className="text-center mb-4">Join Our Library Community</h3>
          <hr />

          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={form.fullName}
              placeholder="Enter your full name"
              onChange={handleOnchange}
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={form.phone}
              placeholder="Enter your number"
              onChange={handleOnchange}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email *</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              placeholder="Enter your email"
              onChange={handleOnchange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password *</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={form.password}
              placeholder="Enter your password"
              onChange={handleOnchange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label">Confirm Password *</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={form.confirmPassword}
              placeholder="Confirm your password"
              onChange={handleOnchange}
              required
            />
          </div>

          

          <button
            onClick={handleOnSubmit}
            type="button"
            className="btn btn-primary w-100 mt-2"
          
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
