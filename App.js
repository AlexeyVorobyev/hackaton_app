import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Pressable,Image, TouchableOpacity } from 'react-native';
import { Button } from '../hackaton_app/components/Button/Button';
import { Profile } from './components/Profile/Profile';
import { Shop } from './components/Shop/Shop';
import Icon from 'react-native-vector-icons/Ionicons';


const Page1 = () => {
  return (
    <Text>1</Text>
  )
}

const Page2 = () => {
  return (
    <Text>2</Text>
  )
}

export default function App() {

  const [router,setRouter] = React.useState([true,false,false,false])

  return (
    <View style={styles.container}>
      <View style={styles.upper}/>
      <View style={styles.body}>
        {router[0] && <Page1/>}
        {router[1] && <Page2/>}
        {router[2] && <Shop/>}
        {router[3] && <Profile/>}
      </View>
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.button} onPress={() => setRouter([true,false,false,false])}>
          <Image source={require('./assets/icons/home.png')} style={styles.buttonImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setRouter([false,true,false,false])}>
          <Image source={require('./assets/icons/train.png')} style={styles.buttonImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setRouter([false,false,true,false])}>
          <Image source={require('./assets/icons/shop.png')} style={styles.buttonImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setRouter([false,false,false,true])}>
          <Image source={require('./assets/icons/user.png')} style={styles.buttonImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    alignItems: 'center',
  },
  navigation: {
    flex:1.4,
    paddingLeft:25,
    paddingRight:25,
    paddingTop:10,
    paddingBottom:10,
    width:"100%",
    flexDirection:"row",
    justifyContent:'space-between',
    shadowColor:"#000",
    shadowOffset:{
        width:0,
        height:3,
    },
    shadowOpacity:0.3,
    shadowRadius:10,
    elevation:10,
  },
  body: {
    width:"100%",
    flex:20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  upper: {
    flex:1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:0.2,
  },
  buttonImg: {
    width:50,
    height:50,
  }
});
