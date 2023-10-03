// LoginScreen.js
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import BotonReutilizable from './../components/BotonReutilizable';
import { Alert } from 'react-native';
import UsuarioService from '../../services/usuarios-service';
import MessageConstants from '../MessageConstants';



export default function Login({ navigation }){
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();

  const handleLogin = () => {
    if (mail == 'quindi' && password == 'rafael123'){
      UsuarioService.almacenarDatos(mail, password);
      navigation.navigate('Pantalla1');
      Alert.alert(MessageConstants.MSG_BIENVENIDAS);
      
    }else{
      Alert.alert(MessageConstants.MSG_USUARIO_O_CLAVE_INVALIDA);
    }
  };


  const handleOnPress = () => {
    console.log('handleOnPress');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./../../assets/cablo.png')} style={styles.image} />
      <View style={styles.form}>
        <Text>Usuario:</Text> 
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          value={mail}
          onChangeText={(text) => setMail(text)}
          returnKeyType='next'
          onSubmitEditing= {() => {passwordRef.current.focus();}}
        />
        <Text>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          ref={passwordRef}
        />
        <BotonReutilizable
        onPress={(handleLogin)}
        style={styles.logoutDiferente}
        texto="Iniciar sesión"
      /> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  form: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },

});


