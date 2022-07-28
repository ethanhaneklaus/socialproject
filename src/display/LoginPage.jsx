import React, { useState, UserContext, useContext, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(UserContext);
  const passwordError = useMemo(
    () => password.length < 5 || password.length > 20,
    [password]
  );
  const usernameError = useMemo(
    () => username.length < 4 || username.length > 20,
    [username]
  );


  return (
    <div>
      <form>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">
            Username
          </label>
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
          />
          <div
            id="usernameHelp"
            className={usernameError ? "error form-text" : "form-text"}
          >
            Username Must Be between 4 and 20 characters
          </div>
        </div>
        <div>
          <label htmlFor="password">
            Password
          </label>
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            id="password"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowPassword((curr) => !curr);
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          <div
            id="passwordHelp"
            className={passwordError ? "error form-text" : "form-text"}
          >
            Password Must Be between 5 and 20 characters
          </div>
        </div>
        <button
          disabled={passError || usernameError}
          onClick={(e) => {
            e.preventDefault();
            if (!passError && !usernameError) {
              login(username);
              navigate("/search");
            }
          }}
          type="submit"
        >Submit</button>
        <h6>
          <NavLink to="/register">New User? Register here</NavLink>
        </h6>
      </form>
    </div>
  );
}

export default LoginPage;