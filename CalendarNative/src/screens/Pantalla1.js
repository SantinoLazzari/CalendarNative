import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../components/Navigation';
import UsuarioService from '../../services/usuarios-service';
import BotonReutilizable from './../components/BotonReutilizable';
import { Alert } from 'react-native';
import MessageConstants from '../MessageConstants';

  export default function Pantalla1({navigation}) {

    const handleAsyncStorage = async () => {
    let datos = await UsuarioService.obtenerDatos();
    Alert.alert(MessageConstants.MSG_MOSTRAR_DATOS, JSON.stringify(datos));
  };
  return(
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Screen1</Text>
      <BotonReutilizable
        onPress={handleAsyncStorage}
        style={styles.logoutDiferente}
        texto="Ver datos"

        />
      <Menu navigation={navigation}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'white'
    }
  });
