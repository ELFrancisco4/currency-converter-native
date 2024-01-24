import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const Charts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="flag" size={24} color="white" />
        <MaterialCommunityIcons name="swap-vertical" size={24} color="white" />
        <FontAwesome name="flag" size={24} color="white" />
      </View>
      <View style={styles.conversion}>
        <Text style={styles.conversionText}>1 USD = 0.92 CHF</Text>
        <Text style={styles.changeText}>+ 0.0211% past month</Text>
      </View>
      <View style={styles.chart}>
        {/* Chart implementation would go here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF00FF', // Replace with the actual background color of the component
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#800080', // Replace with the actual header background color
  },
  conversion: {
    padding: 10,
  },
  conversionText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  changeText: {
    fontSize: 16,
    color: 'white',
  },
  chart: {
    // Chart styling would be implemented here
    flex: 1,
  },
});

export default Charts;
