// AuthContext.js
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const initialUsers = [
  { email: 'samahzein@gmail.com', password: 'password123', name: "samah" },
  { email: 'user2@example.com', password: 'password456', name: "sos" },
];

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers);
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });

  useEffect(() => {
    const email = localStorage.getItem("Email");
    if (email) {
      const foundObject = initialUsers.find(obj => obj.email === email);
      if (foundObject) {
        setUserInfo({
          name: foundObject.name,
          email: foundObject.email
        });
      }
      else{
        setUserInfo({
          name:"",
          email: ""
        });
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ users, setUsers, setUserInfo, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
