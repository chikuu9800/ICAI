import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  // ---------------- ADMIN USERS ----------------
  const adminUsers = [
    {
      email: "admin@icai.org",
      password: "admin",
      role: "admin",
    },
    {
      email: "editor@icai.org",
      password: "editor",
      role: "editor",
    },
    {
      email: "moderator@icai.org",
      password: "moderator",
      role: "moderator",
    }
  ];

  // ---------------- LOGIN FUNCTION ----------------
  const login = (email: string, password: string) => {
    const foundUser = adminUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) return false;

    setUser(foundUser);
    localStorage.setItem("adminUser", JSON.stringify(foundUser));

    return true;
  };

  // ---------------- LOGOUT FUNCTION ----------------
  const logout = () => {
    setUser(null);
    localStorage.removeItem("adminUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth anywhere in project
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
