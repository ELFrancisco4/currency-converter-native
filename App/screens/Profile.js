import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ConversionItem from "../components/ConversionItem";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../util/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9E4BFF",
  },
  header: {
    alignItems: "center",
    padding: 10,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: 30,
    gap: 20,
    // borderWidth: 3,
    width: '70%',
    alignSelf: 'center'
  },
  userName: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 8,
  },
  welcomeText: {
    color: "white",
    fontSize: 16,
    marginBottom: 16,
  },
  balanceButton: {
    backgroundColor: "#FF616D",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 10,
    width: '70%',
    alignSelf: 'center'
  },
  balanceText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  amountText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  conversionSection: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  popularConversionsText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  conversionList: {
    gap: 10,
  },
  navigation: {
    // Add your navigation styles here
  },
});
const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="notifications-outline" size={24} color="white" />
        <View>
          <Text style={styles.userName}>Mario Smith</Text>
          <Text style={styles.welcomeText}>Hi there, welcome back!</Text>
        </View>
      </View>
      <LinearGradient
        colors={[colors.secondaryColor, colors.themeIndigo]}
        style={styles.balanceButton}
      >
        <Text style={styles.balanceText}>Account Balance</Text>
        <Text style={styles.amountText}>$500.00 USD</Text>
      </LinearGradient>
      <View style={styles.conversionSection}>
        <Text style={styles.popularConversionsText}>Popular Conversions</Text>
        <View style={styles.conversionList}>
          {/* Map through your conversion data here */}
          <ConversionItem
            flag="🇨🇦"
            currency="USD"
            toCurrency="CAD"
            rate="1.26"
          />
          <ConversionItem
            flag="🇨🇭"
            currency="USD"
            toCurrency="CHF"
            rate="0.92"
          />
          <ConversionItem
            flag="🇬🇧"
            currency="USD"
            toCurrency="GBP"
            rate="0.72"
          />
        </View>
      </View>
      <View style={styles.navigation}>
        {/* Your navigation bar component */}
      </View>
    </ScrollView>
  );
};
export default Profile;
