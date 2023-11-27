import { View, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
  
  export default function Landing({ navigation }) {
    const logouri =  require('../../media/logo.jpg')
    const loginIcon = require('../../media/loginicon.png');
    const signupIcon = require('../../media/signupicon.png');

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.hero}>
          <Image
            source={logouri}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.title}>
              Welcome to the
              <View style={styles.appName}>
                <Text style={styles.appNameText}>Dab</Text>
              </View>
            </Text>
          </View>
  
          <TouchableOpacity
            onPress={() => {navigation.navigate("Login")
            }}>
            <View style={styles.button}>
                <Image source={loginIcon} style={styles.icon} />
                <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {navigation.navigate("Register")
            }}>
            <View style={styles.button}>
                <Image source={signupIcon} style={styles.icon} />
                <Text style={styles.buttonText}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    hero: {
      backgroundColor: '#d8dffe',
      margin: 12,
      borderRadius: 16,
      padding: 16,
      height: "50%"
    },
    heroImage: {
      width: '100%',
      borderRadius: 10,
      height: "100%"
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
      paddingVertical: 24,
      paddingHorizontal: 24,
    },
    contentHeader: {
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 28,
      fontWeight: '500',
      color: '#281b52',
      textAlign: 'center',
      marginBottom: 12,
      lineHeight: 40,
    },
    appName: {
      backgroundColor: '#C495F0',
      borderRadius: 50,
      transform: [
        {
          rotate: '-20deg',
        },
      ],
      paddingHorizontal: 6,
    },
    appNameText: {
      fontSize: 32,
      fontWeight: '700',
      color: '#281b52',
      textAlign : "justify"
    },
    text: {
      fontSize: 15,
      lineHeight: 24,
      fontWeight: '400',
      color: '#9992a7',
      textAlign: 'center',
    },
    buttonText: {
      fontSize: 20,
      fontWeight: '500',
      color: '#fff',
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#56409e',
        paddingVertical: 15,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginBottom: 20,
      },
      icon: {
        width: 10,
        height: 15, 
        marginRight: 10, 
      },
  });
  
  
