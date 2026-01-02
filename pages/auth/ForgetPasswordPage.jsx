import useForm from "../../hooks/useForm";
import { toast } from "react-toastify";
import { PasswordResApi, requestPassRestOTPApi } from "../../services/authApi.js";
import { useNavigate } from "react-router-dom";


const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  otp: "",
};


const ForgetPasswordPage = () => {
  const { form, handleOnchange } = useForm(initialState);
  const navigate = useNavigate()
  const handleRequestOTP = async (e) => {
    e.preventDefault();

    if (!form.email) {
      toast.error("Email is required");
      return;
    }
    const pendingToast = toast.info("Please wait...", { autoClose: false });
    try {
      const response = await requestPassRestOTPApi({ email: form.email });
      console.log(response);
      toast.dismiss(pendingToast);
      toast.success("OPT is sent to your email");
    } catch (error) {
      toast.dismiss(pendingToast);
      toast.error("Failed to send the OTP");
      console.log(error);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const payload = {
      email:form.email,
      otp : form.otp,
      password: form.password
    }
    const response = await  PasswordResApi(payload)
    console.log(response)
    if(response?.status === "success"){

      //redirect to login page
      setTimeout(()=>navigate("/login"),3000);
    }
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    toast.success("Password reset successful");
  };

  return (
    <div className="login-page">
      <div className="login-overlay">
        <div className="login-card">
          <h3 className="text-center mb-2 text-danger">Forget the Password?</h3>
          <p className="text-center">Don’t worry, just send your email!</p>
          <hr />

          {/* Request OTP */}

          <form onSubmit={handleRequestOTP}>
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

            <p className="bg-success text-white p-2 rounded">
              We will send an OTP to your email. Please check your spam folder.
            </p>

            <button type="submit" className="btn btn-primary w-100 mt-2">
              Request OTP
            </button>
          </form>

          <hr />

          {/* Reset Password */}
          <form onSubmit={handleResetPassword}>
            <div className="mb-3">
              <label className="form-label">OTP</label>
              <input
                type="string"
                name="otp"
                className="form-control"
                value={form.otp}
                onChange={handleOnchange}
                required
              />
            </div>
          </form>
          <form onSubmit={handleResetPassword}>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleOnchange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={form.confirmPassword}
                onChange={handleOnchange}
                required
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
  );
};

export default ForgetPasswordPage;
