import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker từ thư viện mới

export default function SelectLocationScreen({ navigation }) {
  const [zone, setZone] = useState('Banashree');
  const [area, setArea] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn đia điểm của bạn</Text>
      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with what's happening in your area
      </Text>
      <Text style={styles.label}>Khu vực của bạn</Text>
      <Picker
        selectedValue={zone}
        style={styles.picker}
        onValueChange={(itemValue) => setZone(itemValue)}
      >
        <Picker.Item label="Banashree" value="Banashree" />
        <Picker.Item label="Other Zone" value="Other Zone" />
      </Picker>
      <Text style={styles.label}>Loại khu vực của bạn</Text>
      <Picker
        selectedValue={area}
        style={styles.picker}
        onValueChange={(itemValue) => setArea(itemValue)}
      >
        <Picker.Item label="Select Area" value="" />
        <Picker.Item label="Area 1" value="Area 1" />
        <Picker.Item label="Area 2" value="Area 2" />
      </Picker>
      <Button
        title="Submit"
        color="#28A745"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: 'gray', marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 5 },
  picker: { height: 50, width: '100%', marginBottom: 20 },
});