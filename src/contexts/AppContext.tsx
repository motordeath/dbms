import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AppContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'operator' | 'driver';
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // In a real application, this would connect to a backend auth service
  const login = async (email: string, password: string) => {
    // Mock successful login
    setUser({
      id: '1',
      name: 'Admin User',
      email: email,
      role: 'admin',
    });
  };
  
  const logout = () => {
    setUser(null);
  };
  
  return (
    <AppContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};