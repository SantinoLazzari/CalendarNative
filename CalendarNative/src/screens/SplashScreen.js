import { Text, View, ActivityIndicator, SafeAreaView, Image, StyleSheet} from 'react-native'
import React, { Component, useEffect } from 'react'
import UsuarioService from '../../services/usuarios-service';


export default function SplashScreen({navigation}) {

  const verificarInicioSesion = async() => {
    if( await UsuarioService.automaticLogin()){
      navigation.navigate("Pantalla1");
    }else{
      navigation.navigate("Login");
    }
  };

  useEffect(() => {
    setTimeout(verificarInicioSesion, 3000);
  }, [])

  return (
    <SafeAreaView style={[styles.container]}>
      <Image source={'./../../assets/lagar.png'} style={styles.Image}/>
      <ActivityIndicator size="large"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '75%',
    height: '40%',
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});