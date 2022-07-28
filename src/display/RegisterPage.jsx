import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function RegisterPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const passwordError = useMemo(
        () => password.length < 5 || password.length > 20,
        [password]
    );
    const confirmError = useMemo(
        () => confirmPassword !== password || passError,
        [confirmPassword, password, passError]
    );
    const usernameError = useMemo(
        () => username.length < 4 || username.length > 20,
        [username]
    );

    return (
        <div>
            <form>
                <h1>Register</h1>
                <div >
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        id="password"
                    />
                    <div
                        id="passwordHelp"
                        className={passwordError ? "error form-text" : "form-text"}
                    >
                        Password Must Be between 5 and 20 characters
                    </div>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setShowPassword((curr) => !curr);
                        }}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                <div>
                    <label htmlFor="confirm">
                        Confirm Password
                    </label>
                    <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        id="confirm"
                    />
                    <div
                        id="userHelp"
                        className={confirmError ? "error form-text" : "form-text"}
                    >
                        Passwords Must Match
                    </div>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setShowPassword((curr) => !curr);
                        }}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        if (!confirmError && !passwordError && !usernameError) {
                            navigate("/login");
                        }
                    }}
                    type="submit"
                >Submit</button>
                <h6 className="text-center my-4">
                    <NavLink to="/login">Already have an account? Login here</NavLink>
                </h6>
            </form>
        </div>
    );
}

export default RegisterPage;
