import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as Calendar from 'expo-calendar';

const ViewEventsScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();

      if (status === 'granted') {
        const calendarId = Calendar.DEFAULT;

        // Define una fecha de inicio (startDate) y una fecha de finalización (endDate)
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
    <View>
      <Text>View Events:</Text>
      {events.map(event => (
        <Text key={event.id}>{event.title}</Text>
      ))}
      <Button title="Add Event" onPress={navigateToAddEvent} />
    </View>
  );
};

export default ViewEventsScreen;
