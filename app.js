import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import EmployeeScreen from './src/screens/EmployeeScreen';
import AttendanceScreen from './src/screens/AttendanceScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Beranda' }} />
        <Stack.Screen name="EmployeeScreen" component={EmployeeScreen} options={{ title: 'Pegawai' }} />
        <Stack.Screen name="AttendanceScreen" component={AttendanceScreen} options={{ title: 'Absensi' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
