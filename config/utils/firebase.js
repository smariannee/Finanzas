import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";

const firebaseConfig = {
    apiKey: "AIzaSyBSKlnHildOcamvVDVVGbV9cFmteXbPHro",
    authDomain: "finanzas-9c8c9.firebaseapp.com",
    projectId: "finanzas-9c8c9",
    storageBucket: "finanzas-9c8c9.appspot.com",
    messagingSenderId: "109361815384",
    appId: "1:109361815384:web:bb462392f37c6168b54f2d"
  };

  export const app = initializeApp(firebaseConfig); 
  export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });