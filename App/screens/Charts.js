import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { colors } from "../util/colors";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const data = {
  labels: ["Jan", "Feb", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2, // optional
    },
  ],
};

const chartConfig = {
  backgroundColor: colors.primaryColor, // Purple background: ;
  backgroundGradientFrom: colors.primaryColor, // Gradient start (also purple)
  backgroundGradientTo: colors.primaryColor, // Gradient end (also purple)
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(234, 34, 233, ${opacity})`,
  labelColor: (opacity = .5) => `rgba(255, 255, 255, ${opacity})`,
};
const Charts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>🇨🇭</Text>
        <MaterialCommunityIcons name="swap-vertical" size={24} color="white" />
        <Text>🇬🇧</Text>
      </View>
      <View style={styles.conversion}>
        <Text style={styles.conversionText}>1 USD = 0.92 CHF</Text>
        <Text style={styles.changeText}>+ 0.0211% past month</Text>
      </View>
      <View style={styles.chart}>
        <LineChart
          data={data}
          width={screenWidth * .8}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: screenHeight,
    borderWidth: 3,
    flex: 1,
    backgroundColor: colors.primaryColor, // Replace with the actual background color of the component
    justifyContent: "center",
    alignItems: 'center',
    alignContent: 'center',
    gap: 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.themeIndigo, // Replace with the actual header background color: ;
    marginTop: 50
  },
  conversion: {
    padding: 10,
    borderWidth: 2,
    borderColor: colors.themeIndigo,
    backgroundColor: colors.secondaryColor,
    borderRadius: 10,
    height: screenHeight * .2,
    width: screenWidth * .8,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  conversionText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  changeText: {
    fontSize: 16,
    color: "white",
  },
  chart: {
    // Chart styling would be implemented here
    flex: 1,
    marginTop: 50
  },
});

export default Charts;
