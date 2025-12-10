import React from 'react'

const LogIn = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <div className="border p-4 rounded shadow-sm" style={{ width: "350px" }}>
        
        <h3 className="text-center mb-4">Login</h3>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        {/* Login button */}
        <button type="button" className="btn btn-primary w-100 mt-2">
          Login
        </button>

      </div>
    </div>
  )
}

export default LogIn
