import type { User, UserCredential } from 'firebase/auth';

export interface AuthContextType {
  user: User | null;
  googleLogin: () => Promise<UserCredential>;
  logOut: () => Promise<void>;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}