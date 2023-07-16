import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const Authentification = ({isAuthentificated,setAuthentificate,setRegistr,setUserId}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const getToken = async (token) => {
        try{
            const response = await fetch('http://10.2.0.59:8101/api/users/me',{
                headers: {
                    Authorization:`Bearer ${token}`
                }
            });
            const json = await response.json()
            setUserId(json.id)
            setAuthentificate(true);
        }
        catch (error) {
          alert(error)
        }
      }

    const signInApi = async () => {
        try {
            const response = await fetch('http://10.2.0.59:8101/api/auth/login',{
                method:'post',
                body: JSON.stringify({login:login,password:password}),
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            console.log(json.accessToken)
            getToken(json.accessToken)
        } catch (error) {
            alert(error);
        }
    }

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("./assets/trainLogo.png")} />
  
        {/* <StatusBar style="auto" /> */}
          <View style={styles.inputView}>
              <TextInput
                  style={styles.TextInput}
                  placeholder="Логин"
                  placeholderTextColor="#003f5c"
                  onChangeText={(login) => setLogin(login)}
              />
          </View>
  
          <View style={styles.inputView}>
              <TextInput
                  style={styles.TextInput}
                  placeholder="Пароль"
                  placeholderTextColor="#003f5c"
                  secureTextEntry={true}
                  onChangeText={(password) => setPassword(password)}
              />
          </View>
  
          <View style={styles.step}>
            <TouchableOpacity style={styles.loginBtn} onPress={() => setRegistr(true)}>
                <Text style={styles.loginText}>ЗАРЕГИСТРИРОВАТЬСЯ</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.loginBtn} onPress={() => signInApi(login,password)}>
                <Text style={styles.loginText}>ВОЙТИ</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 10,
      width:"100%",
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: "#D9D9D9",
    },
  
    image: {
      position:'relative',
      width:"50%",
      height:220,
      top:-20,
      marginBottom:20,
      resizeMode:'contain',
    },
  
    inputView: {
      marginTop:10,
      shadowColor:"#000",
      shadowOffset:{
          width:0,
          height:3,
      },
      shadowOpacity:0.3,
      shadowRadius:10,
      elevation:10,
      width:"75%",
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 0,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'white',
    },
  
    TextInput: {
      width:"100%",
      color:'black',
      marginLeft: 20,
      textAlign:"left",
      height:50,
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
  
    step: {
      marginTop:50,
    },
  
    loginBtn: {
  
      marginTop:10,
      shadowColor:"#000",
      shadowOffset:{
          width:0,
          height:3,
      },
      shadowOpacity:0.3,
      shadowRadius:10,
      elevation:10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'white',
      borderRadius:39,
    },
  });
  
  export {Authentification}