import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../util/colors";

const styles = StyleSheet.create({
  conversionItem: {
    backgroundColor: '#FF85A1',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    height: 100
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
})

const ConversionItem = ({ flag, currency, toCurrency, rate }) => {
    return (
      <LinearGradient colors={[colors.bgColor, colors.themeIndigo]} style={styles.conversionItem}>
        <Text style={styles.flag}>{flag}</Text>
        <Text style={styles.currency}>{`${currency} > ${toCurrency}`}</Text>
        <Text style={styles.rate}>{rate}</Text>
      </LinearGradient>
    );
  };

  export default ConversionItem