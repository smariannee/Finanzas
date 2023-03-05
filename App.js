import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { initializeApp } from "firebase/app"; //importar componentes de react
import Login from './modules/auth/adapters/screens/Login'; //importar componentes export default function, para reconocer por nombramiento default para una y sin default para muchas
import Navigation from './config/navigation/Navigation';
import { app } from './config/utils/firebase';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
