import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import CalendarEvents from 'react-native-calendar-events';

export default function Pantalla1() {
  const [evento, setEvento] = useState({
    title: '',
    startDate: '',
    endDate: '',
    location: '',
    notes: '',
  });

  const handleGuardarEvento = async () => {
    try {
      await CalendarEvents.requestPermissions(); // Solicitar permisos
      await CalendarEvents.saveEvent('Agregar evento', evento);
      Alert.alert('Evento agregado con éxito');
    } catch (error) {
      console.error('Error al agregar el evento:', error);
      Alert.alert('Error al agregar el evento');
    }
  };

  const handleAsyncStorage = async () => {
    // Tu código para manejar AsyncStorage
    // ...
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen1</Text>
      <TextInput
        style={styles.input}
        placeholder="Título del evento"
        value={evento.title}
        onChangeText={(text) => setEvento({ ...evento, title: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de inicio (yyyy-mm-dd HH:mm:ss)"
        value={evento.startDate}
        onChangeText={(text) => setEvento({ ...evento, startDate: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de finalización (yyyy-mm-dd HH:mm:ss)"
        value={evento.endDate}
        onChangeText={(text) => setEvento({ ...evento, endDate: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Ubicación"
        value={evento.location}
        onChangeText={(text) => setEvento({ ...evento, location: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Notas"
        value={evento.notes}
        onChangeText={(text) => setEvento({ ...evento, notes: text })}
      />
      <Button title="Guardar Evento" onPress={handleGuardarEvento} />
      <Button title="Ver datos" onPress={handleAsyncStorage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
