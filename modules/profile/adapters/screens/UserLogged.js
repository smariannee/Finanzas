import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from '@rneui/base';
import Loading from '../../../../kernel/components/Loading';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Avatar } from '@rneui/themed';
import { getAuth, updateProfile } from "firebase/auth";
import * as Imagepicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import SuccessAlert from '../../../../kernel/components/SuccessAlert'
import ErrorAlert from '../../../../kernel/components/ErrorAlert'
import ConfirmationAlert from '../../../../kernel/components/ConfirmationAlert'

export default function UserLogged(props) {
  const auth = getAuth();
  const { user } = props;
  const [show, setShow] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showConfirmationAlert, setShowConfirmationAlert] = useState(false);

  const uploadImage = async (uri) => {
    const response = await fetch(uri); //obtenemos la imagen y la convertimos en un blob
    const { _bodyBlob } = response;
    const storage = getStorage();
    const storageRef = ref(storage, `profile_pictures/${user.uid}`);
    return uploadBytes(storageRef, _bodyBlob);
  }
  
  const uploadPhotoProfile = () => {
    setShowConfirmationAlert(false)
    const storage = getStorage();
    getDownloadURL(ref(storage, `profile_pictures/${user.uid}`))
      .then((url) => {
        updateProfile(auth.currentUser, {
          photoURL: url
        })
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 3000);
      })
      .catch((err) => {
        console.log("Error al obtener la imagen", err);
      });
  };

  const changeAvatar = async () => {
    const resultPermission = await Permissions.askAsync(Permissions.CAMERA);
    if (resultPermission.permissions.camera.status !== 'denied') {
      let result = await Imagepicker.launchCameraAsync({
        mediaTypes: Imagepicker.MediaTypeOptions.Images, //solo imagenes
        allowsEditing: true, //permite editar la imagen
        quality: 1,
        //base64: true, 
      })
      if (!result.canceled) {
        uploadImage(result.assets[0].uri)
        .then((response) => {
          setShowConfirmationAlert(true);
        }).catch((err) => {
          console.log("error al obtener imagen", err);
          setShowErrorAlert(true);
          setTimeout(() => {
            setShowErrorAlert(false);
          }, 3000);
        })
      }
    } else {
      console.log("Es necesario aceptar los permisos de la galeria");
    }
  }

  return (
    <View style={styles.container}>
      {user && (
        <View style={styles.infoContainer}>
          <Avatar
            size={'large'}
            rounded
            source={{ uri: user.photoURL }}
            containerStyle={styles.avatar}
          >
            <Avatar.Accessory
              size={26}
              onPress={changeAvatar}
            />
          </Avatar>
          <View>
            <Text style={styles.textEmail}>{user ? user.providerData[0].email : " "}</Text>
            <Text style={styles.textName}>{user ? user.providerData[0].displayName : " "}</Text>
          </View>
        </View>
      )}
      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btn}
        onPress={() => auth.signOut()}
      />
      <Loading show={show} text="Actualizando" />
      <SuccessAlert show={showSuccessAlert} text="Actualización exitosa" />
      <ErrorAlert show={showErrorAlert} text="Algo salió mal" />
      <ConfirmationAlert show={showConfirmationAlert} onConfirm={() => uploadPhotoProfile()} onCancel={() => setShowConfirmationAlert(false)} text="¿Seguro que desea realizar esta acción?"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#fff',
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },
  avatar: {
    marginRight: 16,
  },
  textEmail: {
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  btn: {
    width: '80%',
    marginTop: 50,
    alignSelf: 'center',
    backgroundColor: '#ff5a60',
    marginVertical: 20
  }
})