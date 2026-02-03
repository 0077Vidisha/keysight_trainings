import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // ⭐ connect AuthContext
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      // ⭐ VERY IMPORTANT (this updates navbar)
      login(email);

      alert("Login successful!");

      // go to dashboard
      navigate("/");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <br />

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <br />

        <button type="submit" style={{ width: "100%" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
