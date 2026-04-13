import React, { createContext, useContext, useState, useEffect } from "react";

interface UserContextType {
  isAnonymous: boolean;
  setIsAnonymous: (val: boolean) => void;
  role: 'client' | 'coach';
  setRole: (role: 'client' | 'coach') => void;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [isAnonymous, setIsAnonymous] = useState(() => {
    return localStorage.getItem("isAnonymous") === "true";
  });

  const [role, setRole] = useState<'client' | 'coach'>(() => {
    return (localStorage.getItem("userRole") as 'client' | 'coach') || 'client';
  });

  const user = {
    name: role === 'coach' ? "Coach Sharma" : "Sarah Jenkins",
    email: role === 'coach' ? "sharma.coach@lifeandyou.com" : "sarah.j@example.com",
    avatar: role === 'coach' ? "/img/about/account-02.jpg" : "/img/user/user8.jpg"
  };

  useEffect(() => {
    localStorage.setItem("isAnonymous", isAnonymous.toString());
  }, [isAnonymous]);

  useEffect(() => {
    localStorage.setItem("userRole", role);
  }, [role]);

  return (
    <UserContext.Provider value={{ isAnonymous, setIsAnonymous, role, setRole, user }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
