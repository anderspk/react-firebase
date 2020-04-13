import React, { createContext, useState, useEffect } from 'react';
import { auth, generateUserDocument } from '../firebase';

export const UserContext = createContext({ user: null });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      setUser(user);
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
