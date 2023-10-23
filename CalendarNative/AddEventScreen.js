import React, { useState } from 'react';
import { View, Button, TextInput, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Calendar from 'expo-calendar';

const AddEventScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const addEventToIOSCalendar = async () => {
    const { status } = await Calendar.requestCalendarPermissionsAsync();

    if (status === 'granted') {
      const calendars = await Calendar.getCalendarsAsync();
      const defaultCalendar = calendars.find(calendar => calendar.title === 'tomas.avola@gmail.com');

      if (defaultCalendar) {
        const eventDetails = {
          title,
          startDate,
          endDate,
          calendarId: defaultCalendar.id,
        };

        try {
          await Calendar.createEventAsync(defaultCalendar.id, eventDetails);
          Alert.alert('Éxito', 'El evento se ha agregado al calendario de iOS correctamente.');
        } catch (error) {
          console.error('Error al agregar el evento al calendario de iOS:', error);
          Alert.alert('Error', 'Hubo un problema al agregar el evento al calendario de iOS.');
        }
      } else {
        Alert.alert('Error', 'No se encontró el calendario predeterminado en tu dispositivo.');
      }
    } else {
      Alert.alert('Error', 'No se concedieron los permisos de calendario.');
    }
  };

  const showStartDatePickerModal = () => {
    setShowStartDatePicker(true);
  };

  const showEndDatePickerModal = () => {
    setShowEndDatePicker(true);
  };

  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(Platform.OS === 'ios'); // Si es iOS, muestra un modal
    setStartDate(currentDate);
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(Platform.OS === 'ios'); // Si es iOS, muestra un modal
    setEndDate(currentDate);
  };

  const navigateToViewEvents = () => {
    navigation.navigate('ViewEvents');
  };

  return (
    <View>
      <TextInput
        placeholder="Event title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Button title="Seleccionar Fecha de Inicio" onPress={showStartDatePickerModal} />
      <Button title="Seleccionar Fecha de Fin" onPress={showEndDatePickerModal} />
      <Button title="Add Event to iOS Calendar" onPress={addEventToIOSCalendar} />
      <Button title="Ver Eventos" onPress={navigateToViewEvents} />

      {showStartDatePicker && (
        <DateTimePicker
          value={startDate}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={onStartDateChange}
        />
      )}

      {showEndDatePicker && (
        <DateTimePicker
          value={endDate}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={onEndDateChange}
        />
      )}
    </View>
  );
};

export default AddEventScreen;
