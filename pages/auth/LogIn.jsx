import React from "react";
import useForm from "../../hooks/useForm.js";
import { signInUserApi } from "../../services/authApi.js";
//import { fetchUserApi } from "../../feature/user/userApi.jsx";
import { useDispatch } from "react-redux";
import { fetchUserAction } from "../../feature/user/userAction.jsx";
const initialState = {
  email: "",
  password: "",
};

const LogIn = () => {
  const { form, handleOnchange } = useForm(initialState);
  const dispatch = useDispatch()
  const handleOnSubmit = async(e) => {
    e.preventDefault();
  console.log(form);

  // intergrating the login- form 
  if(form.email && form.password){
    const {payload} = await signInUserApi(form);
    if(payload?.accessJWT){
    sessionStorage.setItem('accessJWT',payload.accessJWT)
     localStorage.setItem('refreshJWT',payload.refreshJWT)
     
     //call api to fech the user 
    dispatch(fetchUserAction());
    }
    // storing the tokens in sessionStorage and localstorage
    
     
     //TODO: get user to redirecting to the dashboard
    
  }else{
    console.log("Both input must be filled")
  }

  };

  return (
    <div className="login-page">
      <div className="login-overlay">
        <div className="login-card">
          <h3 className="text-center mb-4">
            Welcome Back to Library Community
          </h3>
          <hr />

          <form onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
                value={form.email}
                onChange={handleOnchange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                required
                value={form.password} 
                onChange={handleOnchange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2">
              Login
            </button>
          </form>

          <div className="mt-3 text-center text-decoration-underline text-danger">
            Forget Password?
            <a href="/forget-password" className="ms-2">
              Reset Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
