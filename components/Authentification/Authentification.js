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

const Authentification = ({isAuthentificated,setAuthentificate,setRegistr}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const signInApi = async () => {
        try {
            const response = await fetch('http://10.2.0.59:8101/api/auth/signin',{
                method:'post',
                body: JSON.stringify({login:login,password:password})
            });
            const json = await response.json();
            console.log(json)
        } catch (error) {
            alert(error);
        }
    }

  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/log2.png]")} /> */}

      {/* <StatusBar style="auto" /> */}
        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Login"
                placeholderTextColor="#003f5c"
                onChangeText={(login) => setLogin(login)}
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={() => signInApi(login,password)}>
            <Text style={styles.loginText}>ВОЙТИ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={() => setRegistr(true)}>
            <Text style={styles.loginText}>ЗАРЕГЕСТРИРОВАТЬСЯ</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    width:"100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
  },

  image: {
    //marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent:'center'
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});

export {Authentification}