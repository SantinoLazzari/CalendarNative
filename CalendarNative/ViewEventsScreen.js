import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import * as Calendar from 'expo-calendar';

const ViewEventsScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();

      if (status === 'granted') {
        const calendarId = Calendar.DEFAULT;
        const startDate = new Date(); // Puedes personalizar la fecha de inicio según tus necesidades
        const endDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000); // 7 días después

        const events = await Calendar.getEventsAsync([calendarId], startDate, endDate);

        setEvents(events);
      }
    };

    getEvents();
  }, []);

  const navigateToAddEvent = () => {
    navigation.navigate('AddEvent');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Eventos del Calendario:</Text>
      <FlatList
        data={events}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.eventContainer}
            onPress={() => handleEventPress(item)}
          >
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDate}>
              Fecha: {new Date(item.startDate).toDateString()}
            </Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={navigateToAddEvent}>
        <Text style={styles.buttonText}>Agregar Evento</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDate: {
    color: '#666',
  },
  addButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ViewEventsScreen;
