import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ProfilePage from './ProfilePage';
import { UserContext } from '../providers/UserProvider';
import PasswordReset from './PasswordReset';

const Application = () => {
  const user = useContext(UserContext);
  console.log(user);
  return user ? (
    <ProfilePage />
  ) : (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="passwordReset" element={<PasswordReset />} />
    </Routes>
  );
};

export default Application;
