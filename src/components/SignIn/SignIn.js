import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <div className="sign-in">
      <h1>Sign in</h1>
      <div className="form-container">
        <form>
          <label htmlFor="userEmail">Email:</label>
          <input
            type="email"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange={onChangeHandler}
          />
          <label htmlFor="userPassword">Password:</label>
          <input
            type="password"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={onChangeHandler}
          />
          <button onClick={signInWithEmailAndPasswordHandler}>Sign in</button>
          <p>Or</p>
          <button>Sign in with Google</button>
          <p>
            Don't have an account?
            <Link to="signUp">Sign up here</Link>
            <Link to="passwordReset">Forgot Password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
