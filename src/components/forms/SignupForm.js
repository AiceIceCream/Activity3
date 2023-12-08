import { View, StyleSheet, Image, ToastAndroid } from "react-native";
import React from "react";
import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import fetchServices from "../Service/fetchServices";

export default function LoginForm({ navigation }) {

  const [isError, setIsError] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRepassword] = React.useState('');
  const [name, setName] = React.useState('');

  const showToast = (message = "Something went Wrong") => {
    ToastAndroid.show(message,  3000);
  };

  const [showPass, setShowPass] = React.useState(false);

  const logouri =  require('../../media/logo.jpg')

  const handleRegistration = async () => {
    try{

      if(name === '' || email === '' || password === '' || repassword === ''){
        showToast("Please input required data");
        setIsError(true);
        return false;
      }

      if(password === '' != repassword === ''){
        showToast("Please match password");
        setIsError(true);
        return false;
      }

      const url = 'http://192.168.43.240:8000/api/v1/register';

      const data = {
        name,
        email,
        password,
        password_confirmation: repassword,
      }

      const result = await fetchServices.postData(url, data);

      console.debug(result);

      if(result?.message != null){
        showToast(result?.message); 
      }else{
        navigation.navigate("Login")
      }
    }catch(e){
      showToast(e.toString());
    }
  }

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
        value={name}
        onChangeText={setName}
        error={isError}
      />
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 , bottom: 20}}
        value={email}
        onChangeText={setEmail}
        error={isError}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={showPass}
        style={{ marginTop: 10, bottom: 20 }}
        value={password}
        onChangeText={setPassword}
        error={isError}
      />
      <TextInput
        mode="outlined"
        placeholder="Retype Password"
        label="Retype Password"
        secureTextEntry={showPass}
        style={{ marginTop: 10, bottom: 20 }}
        value={repassword}
        onChangeText={setRepassword}
        error={isError}
      />
      <View style={{bottom: 10}}>
      <Button style={styles.button} onPress={handleRegistration}>
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