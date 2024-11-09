import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const EmployeeScreen = () => {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const addEmployee = () => {
    if (name && phone && email) {
      setEmployees([...employees, { id: Date.now().toString(), name, phone, email }]);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kelola Pegawai</Text>
      <TextInput style={styles.input} placeholder="Nama" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="No Telepon" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Button title="Tambah Pegawai" onPress={addEmployee} />
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.employeeItem}>
            <Text style={styles.employeeText}>Nama: {item.name}</Text>
            <Text style={styles.employeeText}>No Telepon: {item.phone}</Text>
            <Text style={styles.employeeText}>Email: {item.email}</Text>
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
  employeeItem: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  employeeText: {
    fontSize: 16,
  },
});

export default EmployeeScreen;
