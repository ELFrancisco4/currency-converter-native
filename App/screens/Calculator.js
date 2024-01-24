import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CalculatorScreen = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    // Implement the logic to handle input and calculations
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {['C', '%', '⌫', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='].map((button) => (
          <TouchableOpacity key={button} style={styles.button} onPress={() => handlePress(button)}>
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 20,
  },
  resultText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'right',
    marginRight: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  inputText: {
    fontSize: 24,
    color: 'black',
    textAlign: 'right',
    marginRight: 20,
  },
  buttonContainer: {
    flex: 5,
    margin: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '22%',
    backgroundColor: '#ee82ee',
    marginBottom: 20,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default CalculatorScreen;
