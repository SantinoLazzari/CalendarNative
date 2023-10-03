import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotonReutilizable = ({ onPress, style, texto }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, style]}
    >
      <Text style={styles.buttonText}>{texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 12,
    marginTop: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

const obtenerFechaYHora = () => {
  const fechaYHora = new Date();
  return fechaYHora.toLocaleString(); // Convierte la fecha y hora en una cadena legible
};

const envolverOnPress = (componente, onPress) => {
  return () => {
    console.log(`Clic realizado en ${obtenerFechaYHora()}`);
    onPress();
  };
};

/*const componenteConFechaYHora = envolverOnPress({}, miMetodoOnPress);

const Boton = () => {
   miMetodoOnPress = () => {
    console.log("Método onPress ejecutado.");
    // Coloca aquí el código que deseas ejecutar cuando se realice el clic.
  };
*/
  



export default BotonReutilizable;
