import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Carrot, Eye, EyeOff } from 'lucide-react-native'; // Thêm Eye và EyeOff

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Trạng thái hiển thị/ẩn mật khẩu

  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        if (user.email === email && user.password === password) {
          navigation.navigate('Success');
        } else {
          alert('Invalid email or password');
        }
      } else {
        alert('No user found. Please sign up first.');
      }
    } catch (error) {
      console.log('Error logging in:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Carrot size={70} color="#F3603F" />
      </View>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Enter your emails and password</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="imshu097@gmail.com"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
          placeholder="********"
          secureTextEntry={!showPassword} // Chuyển đổi dựa trên trạng thái showPassword
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)} // Chuyển đổi trạng thái
        >
          {showPassword ? (
            <EyeOff size={24} color="#666" />
          ) : (
            <Eye size={24} color="#666" />
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      {/* <Button title="Log in" color="#53B175"  onPress={handleLogin} /> */}
      <Button title="Log in" color="#53B175"  onPress={() => navigation.navigate('MainTabs')} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>Don't have an account? SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  eyeIcon: {
    padding: 10,
  },
  forgotPassword: {
    color: 'blue',
    textAlign: 'right',
    marginBottom: 20,
  },
  signUpText: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 20,
  },
});