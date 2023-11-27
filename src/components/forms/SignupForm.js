import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginForm({ navigation }) {

  const [showPass, setShowPass] = React.useState(false);
  const logouri =  require('../../media/logo.jpg')

  return (
    <View styles={{ flex: 1 }}>
       <View style={styles.hero}>
          <Image
            source={logouri}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>
      <Text variant="displayMedium" style={{textAlign: "center", fontSize: 30, bottom: 20, color: "#3a2740"}}>Create an Account</Text>
      <TextInput
        mode="outlined"
        placeholder="Username"
        label="Username"
        style={{ marginTop: 10 , bottom: 20}}
        error={false}
      />
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 , bottom: 20}}
        error={false}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={showPass}
        style={{ marginTop: 10, bottom: 20 }}
      />
      <TextInput
        mode="outlined"
        placeholder="Retype Password"
        label="Retype Password"
        secureTextEntry={showPass}
        style={{ marginTop: 10, bottom: 20 }}
      />
      <View style={{bottom: 10}}>
      <Button style={styles.button} onPress={() => navigation.navigate("")}>
        <Text style={styles.buttonText}>Register</Text>
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