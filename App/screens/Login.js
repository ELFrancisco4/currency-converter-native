import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { colors } from '../util/colors';
import {CurrencyDollarIcon} from "react-native-heroicons/solid"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bgColor,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },
    logo: {
      fontWeight: 'bold',
      fontSize: 50,
      color: colors.secondaryColor,
      marginBottom: 40,
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
      width: '80%',
      backgroundColor: colors.inputColor,
      borderRadius: 25,
      height: 50,
      marginBottom: 30,
      justifyContent: 'center',
      alignContent: 'center',
      color: colors.black,
      paddingLeft: 15
    },
    label: {
        color: colors.inputColor,
        fontSize: 20
    },
    forgotButton: {
      height: 30,
      marginBottom: 30,
      color: colors.white,
      fontSize: 15
    },
    loginButton: {
      width: '80%',
      backgroundColor: colors.secondaryColor,
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 10,
    },
    loginButtonText: {
      color: colors.white,
      fontSize: 20,
      fontWeight: 'bold'
    },
    signupButton: {
      height: 30,
      display: 'flex',
      color: colors.white,
      fontSize: 15,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      gap: 20
    },
    passwordValidationText: {
      color: colors.inputColor
    },
    signUpText:{
      color: colors.lemon,
    },
  });
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const validatePassword = (password) => {
    const rules = {
      minLength: 8,
      hasNumber: /\d/,
      hasUpper: /[A-Z]/,
      hasLower: /[a-z]/,
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/
    };

    return {
      minLength: password.length >= rules.minLength,
      hasNumber: rules.hasNumber.test(password),
      hasUpper: rules.hasUpper.test(password),
      hasLower: rules.hasLower.test(password),
      hasSpecialChar: rules.hasSpecialChar.test(password)
    };
  };

  const passwordRules = validatePassword(password);
  return (
    <KeyboardAvoidingView       
      behavior={Platform.OS === "ios" ? "padding" : "height"}
       style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.logoContainer}>
              <CurrencyDollarIcon size={70} color={'#fff'}/>
              <Text style={styles.logo}>CC0nv3rter</Text>
          </View>
          <Text style={styles.label}>Username</Text>
              <TextInput
                value={username}
                onChangeText={(val) => setUsername(val)}
                style={styles.input}
                placeholder='John Doe'
              />
              <Text style={styles.label}>Password</Text>
              <TextInput
                value={password}
                placeholder='Password'
                onChangeText={(pass) => setPassword(pass)}
                style={styles.input}
                secureTextEntry
              />
            {/* <Text>At least one uppercase letter: {passwordRules.hasUpper ? '✅' : '❌'}</Text>
            <Text>At least one lowercase letter: {passwordRules.hasLower ? '✅' : '❌'}</Text>
            <Text>At least one special character: {passwordRules.hasSpecialChar ? '✅' : '❌'}</Text> */}
            <TouchableOpacity>
              <Text style={styles.forgotButton}>Forgot Password?</Text>
            </TouchableOpacity>
            <Text style={styles.passwordValidationText}>Password must contain:</Text>
            <Text style={styles.passwordValidationText}>Minimum 8 characters: {passwordRules.minLength ? '✅' : '❌'}</Text>
            <Text style={styles.passwordValidationText}>At least one number: {passwordRules.hasNumber ? '✅' : '❌'}</Text>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.signupButton}>Don't have an account? {' '}
                  <Text style={styles.signUpText}>Sign up</Text>
              </Text>
            </TouchableOpacity>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;