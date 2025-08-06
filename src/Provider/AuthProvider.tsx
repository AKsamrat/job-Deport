/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, useEffect, useState, type ReactNode } from 'react';
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,

} from 'firebase/auth';
import type { User } from 'firebase/auth';
import app from '../Firebase/Firebase.config';
import type { AuthContextType } from './AuthContext.types';



// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  console.log(reload)
  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logOut = () => {
    return signOut(auth);
  };

  const allInfo: AuthContextType = {
    user,
    googleLogin,
    logOut,
    loading,
    setUser,
    setReload,
    setLoading,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={allInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
