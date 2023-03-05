import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loading from '../../../../kernel/components/Loading'
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'
import { useNavigation } from '@react-navigation/native'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (credential) => {
      setUser(credential);
      !credential ? setSession(false) : setSession(true);
    });
  }, [])

  if (user === null) return <Loading show={true} text="Cargando"/>
  return session ? (<UserLogged user={user} />) : (<UserGuest navigation={navigation} />);
}

const styles = StyleSheet.create({})