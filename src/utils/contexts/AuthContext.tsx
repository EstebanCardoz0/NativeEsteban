import { View, Text } from 'react-native'
import React, {createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

//crear contexto con valores por defecto
const AuthContext = createContext(
   {
    user: null,
    singIn: async (username) => {},
    singOut: async () => {},
  }
);

//crear el provider que envolverá la app y brindara acceso al contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //verificar si hay un usuario en el almacenamiento local
  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setUser(JSON.parse(user));
      }
    };
    getUser();
  }, []);

  //funcion para iniciar sesion
  const singIn = async (username) => {
    const user = { username };
    setUser(username);
    await AsyncStorage.setItem('user', JSON.stringify(username));
  };

  //funcion para cerrar sesion
  const singOut = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };
  return (
    <AuthContext.Provider value={{ user, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
}





export default AuthContext;