import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({updateUserDetails}) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const [err, setErr] = useState({});
  const [msg, setMsg] = useState({});

  const validate = () => {
    const errors = {};
    const messages = {};
    const { username, password } = formData;

    if (username.trim() === "") {
      errors.username = "Username is required";
    }
    if (password.trim() === "") {
      errors.password = "Password is required";
    }

    // Hardcoded login check
    if (username === "admin" && password === "1234") {
      updateUserDetails({
        username:"admin",
        password:"1234"
      })
      messages.success = "Login successful!";
    } else if (username && password && (username !== "admin" || password !== "1234")) {
      errors.invalid = "Invalid credentials";
    }

    setErr(errors);
    setMsg(messages);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("User logged in successfully");
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {err.username && <p style={{ color: "red" }}>{err.username}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {err.password && <p style={{ color: "red" }}>{err.password}</p>}
        </div>
        {err.invalid && <p style={{ color: "red" }}>{err.invalid}</p>}
        {msg.success && <p style={{ color: "green" }}>{msg.success}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
