import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const AttendanceScreen = () => {
  const [attendance, setAttendance] = useState([]);
  const [date, setDate] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const addAttendance = () => {
    if (date && checkIn && checkOut) {
      setAttendance([...attendance, { id: Date.now().toString(), date, checkIn, checkOut }]);
      setDate('');
      setCheckIn('');
      setCheckOut('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kelola Absensi</Text>
      <TextInput style={styles.input} placeholder="Tanggal (YYYY-MM-DD)" value={date} onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Jam Masuk (HH:MM)" value={checkIn} onChangeText={setCheckIn} />
      <TextInput style={styles.input} placeholder="Jam Keluar (HH:MM)" value={checkOut} onChangeText={setCheckOut} />
      <Button title="Tambah Absensi" onPress={addAttendance} />
      <FlatList
        data={attendance}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.attendanceItem}>
            <Text style={styles.attendanceText}>Tanggal: {item.date}</Text>
            <Text style={styles.attendanceText}>Jam Masuk: {item.checkIn}</Text>
            <Text style={styles.attendanceText}>Jam Keluar: {item.checkOut}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  attendanceItem: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  attendanceText: {
    fontSize: 16,
  },
});

export default AttendanceScreen;
