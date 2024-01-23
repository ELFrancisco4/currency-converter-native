import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="notifications-outline" size={24} color="white" />
        <Text style={styles.userName}>Mario Smith</Text>
        <Text style={styles.welcomeText}>Hi there, welcome back!</Text>
        <TouchableOpacity style={styles.balanceButton}>
          <Text style={styles.balanceText}>Account Balance</Text>
          <Text style={styles.amountText}>$500.00 USD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.conversionSection}>
        <Text style={styles.popularConversionsText}>Popular Conversions</Text>
        <View style={styles.conversionList}>
          {/* Map through your conversion data here */}
          <ConversionItem flag="🇨🇦" currency="USD" toCurrency="CAD" rate="1.26" />
          <ConversionItem flag="🇨🇭" currency="USD" toCurrency="CHF" rate="0.92" />
          <ConversionItem flag="🇬🇧" currency="USD" toCurrency="GBP" rate="0.72" />
        </View>
      </View>
      <View style={styles.navigation}>
        {/* Your navigation bar component */}
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9E4BFF',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  userName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  welcomeText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 16,
  },
  balanceButton: {
    backgroundColor: '#FF616D',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 10,
  },
  balanceText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  amountText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  conversionSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  popularConversionsText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  conversionList: {
    // Add styles for your conversion list if needed
  },
  conversionItem: {
    backgroundColor: '#FF85A1',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    // Add styles for your conversion item
  },
  flag: {
    fontSize: 24,
    marginRight: 8,
  },
  currency: {
    color: 'white',
    fontSize: 16,
    flex: 1,
  },
  rate: {
    color: 'white',
    fontSize: 16,
  },
  navigation: {
    // Add your navigation styles here
  },
});

export default Profile;
