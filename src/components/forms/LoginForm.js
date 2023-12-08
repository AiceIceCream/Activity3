import React, { useState } from "react";
import { View, StyleSheet, Image, ToastAndroid } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import fetchServices from "../Service/fetchServices";
import { Formik } from "formik";
import * as Yup from "yup";
import {HelperText} from "react-native-paper";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  const logouri =  require('../../media/logo.jpg')
  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('admin');

  const showToast = (message = "Something went wrong") => {
    ToastAndroid.show(message, 3000);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  // const handleLogin = () => {
  //   const adminEmail = 'admin';
  //   const adminPassword = 'admin';

  //   if (email.trim() === adminEmail && password.trim() === adminPassword) {
  //     console.log('Login successful');
  //     navigation.navigate("Home")
  //   } else {
  //     console.log('Invalid credentials');
  //   }
  // };
  

  const handleLogin = async (values) => {
    try {
      const url = "http://192.168.43.240:8000/api/v1/login";
      const result = await fetchServices.postData(url, values);
      console.debug(result);
      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("Home");
      }
    } catch (e) {
      console.debug(e.toString());
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        await handleLogin(values);
      }}
      validationSchema={validationSchema}
    >
    {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        setTouched,
      }) => {
        return (
    <View styles={{ flex: 1 }}>
       <View style={styles.hero}>
          <Image
            source={logouri}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>
      <Text variant="displayMedium" style={{textAlign: "center", fontSize: 30, bottom: 20, color: "#3a2740"}}>Login</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 , bottom: 20}}
        defaultValue={values.email}
        value={values.email}
        keyboardType="email-address"
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        error={errors.email && touched.email}
        onFocus={() => setTouched({ email: true }, false)}
        />
        {errors.email && touched.email && (
        <HelperText type="error" visible={errors.email}>
        {errors.email}
        </HelperText>
        )}

      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={showPass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ marginTop: 10, bottom: 20 }}
        value={values.password}
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        error={errors.password && touched.password}
        onFocus={() => setTouched({ password: true }, false)}
      />
      {errors.password && touched.password && (
      <HelperText type="error" visible={errors.password}>
      {errors.password}
      </HelperText>
      )}

      <View style={{bottom: 10}}>
      <Button style={styles.button} loading={isSubmitting} disabled={isSubmitting} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </Button>

        <View style= {{alignItems: "center", marginBottom: 20}}>

          <Text>If you don't have an account please proceed to,</Text>
          <Button style={styles.green} onPress={() => navigation.navigate("Register")}>Signup</Button>

          <Text >or if you forgot your password kindly</Text>
          <Button style={styles.red} onPress={() => navigation.navigate("Recover")}>Recover Account</Button>
        </View>

      <Button style={styles.button} onPress={() => navigation.navigate("Landing")}>
      <Text style={styles.buttonText}>Go Back</Text>
      </Button>
      </View>
    </View>
    );
  }}
  </Formik>
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