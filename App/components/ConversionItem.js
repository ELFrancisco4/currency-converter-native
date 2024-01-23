import React from "react";

const ConversionItem = ({ flag, currency, toCurrency, rate }) => {
    return (
      <View style={styles.conversionItem}>
        <Text style={styles.flag}>{flag}</Text>
        <Text style={styles.currency}>{`${currency} > ${toCurrency}`}</Text>
        <Text style={styles.rate}>{rate}</Text>
      </View>
    );
  };