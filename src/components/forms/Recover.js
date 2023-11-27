import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function Recover({ navigation }) {

  const [showPass, setShowPass] = React.useState(false);
  const logouri =  require('../../media/logo.jpg')
  const loginIcon = require('../../media/loginicon.png');
  const signupIcon = require('../../media/signupicon.png');

  return (
    <View styles={{ flex: 1 }}>
       <View style={styles.hero}>
          <Image
            source={logouri}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>
      <Text variant="displayMedium" style={{textAlign: "center", fontSize: 30, bottom: 20, color: "#3a2740"}}>Account Recovery</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 , bottom: 20}}
        error={false}
      />
      <View style={{bottom: 10}}>
      <Button style={styles.button} onPress={() => navigation.navigate("")}>
        <Text style={styles.buttonText}>Send Email Confirmation</Text>
      </Button>

      <TextInput
        mode="outlined"
        placeholder="6-Digit OTP"
        label="OTP"
        style={{ marginTop: 20 , bottom: 20}}
        error={false}
      />
      <Text style={{textAlign: "center", bottom: 15}}>Kindly input the 6 digit OTP generated to your email.</Text>
      <Button style={styles.button} onPress={() => navigation.navigate("")}>
      <Text style={styles.buttonText}>Enter</Text>
      </Button>

      <Button style={styles.button} onPress={() => navigation.pop()}>
      <Text style={styles.buttonText}>Go Back</Text>
      </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    backgroundColor: '#d8dffe',
    margin: 1,
    borderRadius: 16,
    padding: 10,
    height: "30%",
    bottom: 20,
  },
  heroImage: {
    width: '100%',
    borderRadius: 10,
    height: "100%"
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
  },
  button: {
      flexDirection: 'row',
      backgroundColor: '#56409e',
      paddingVertical: 5,
      paddingHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      margin: 10,
    },
  fade:{
    opacity: '50%',
  },
  green: {
    textDecorationColor: "green",
    color: "green",
  },
  red: {
    textDecorationColor: "red",
    color: "red"
  },
});