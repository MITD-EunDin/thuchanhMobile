import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { CircleArrowLeft, ArrowRight } from 'lucide-react-native';

export default function Verification({ navigation }) {
  const [otp, setOtp] = useState('');
  const inputRef = useRef(null);

  const handleNext = () => {
    // Giả lập xác minh OTP thành công
    if (otp.length === 4) {
      navigation.navigate('SelectLocation');
    } else {
      alert('Please enter a valid 4-digit OTP');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <CircleArrowLeft size={40} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Enter your 4-digit code</Text>
        <Text style={styles.label}>Code</Text>
        <TouchableOpacity style={styles.inputContainer} onPress={() => inputRef.current.focus()}>
          <Text style={styles.otpText}>{otp.padEnd(4, '-').split('').join(' ')}</Text>
        </TouchableOpacity>
        <TextInput
          ref={inputRef}
          style={styles.hiddenInput}
          keyboardType="numeric"
          maxLength={4}
          value={otp}
          onChangeText={setOtp}
        />
        <TouchableOpacity>
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>
        {otp.length === 4 && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <ArrowRight size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputContainer: {
    alignSelf: 'center',
    width: '60%',
    borderBottomWidth: 2,
    borderColor: '#333',
    paddingBottom: 5,
  },
  otpText: {
    fontSize: 24,
    letterSpacing: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  hiddenInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
  resendText: {
    textAlign: 'center',
    color: '#28A745',
    fontSize: 14,
    marginTop: 20,
  },
  nextButton: {
    position: 'absolute',
    right: 20,
    bottom: 50,
    backgroundColor: '#28A745',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});