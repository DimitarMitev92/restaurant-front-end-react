import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import {
  AuthContextType,
  AuthProviderProps,
  DecodedToken,
} from "../static/interfaces";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<{
    user: {
      firstName: string;
      lastName: string;
      email: string;
      locationId: string;
      rights: "ADMIN" | "CLIENT";
      accessToken: string;
    };
  } | null>(null);

  function isExpired(exp: number | undefined) {
    if (exp === undefined) {
      return false;
    }
    const currentTime = Date.now() / 1000;
    return exp < currentTime;
  }

  function isTokenValid(authToken: string) {
    try {
      const decodedToken = jwtDecode(authToken);
      return (
        decodedToken &&
        decodedToken.exp !== undefined &&
        !isExpired(decodedToken.exp)
      );
    } catch (error) {
      return false;
    }
  }

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const authToken = sessionStorage.getItem("access_token");
    const isValid = authToken && isTokenValid(authToken);
    return isValid ? true : false;
  });

  useEffect(() => {
    const checkTokenValidity = () => {
      const authToken = sessionStorage.getItem("access_token");
      if (authToken) {
        const decoded: DecodedToken = jwtDecode(authToken);
        if (decoded.exp !== undefined && decoded.exp * 1000 > Date.now()) {
          setIsAuthenticated(true);
          setUser(() => ({
            user: {
              firstName: decoded.firstName,
              lastName: decoded.lastName,
              email: decoded.email,
              locationId: decoded.locationId,
              rights: decoded.rights as "ADMIN" | "CLIENT",
              accessToken: authToken,
            },
          }));
        } else {
          sessionStorage.removeItem("access_token");
          setIsAuthenticated(false);
          setUser(null);
        }
      }
    };

    const tokenCheckInterval = setInterval(() => {
      checkTokenValidity();
    }, 1 * 60 * 1000);

    return () => {
      clearInterval(tokenCheckInterval);
    };
  }, [setUser, setIsAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        setUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export { AuthProvider };
