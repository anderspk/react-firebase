import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./SignIn/SignIn";

const Application = () => {
  const user = null;
  return user ? (
    <div>Profile page</div>
  ) : (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="signUp" element={<div>SignUp</div>} />
      <Route path="passwordReset" element={<div>passwordReset</div>} />
    </Routes>
  );
};

export default Application;
