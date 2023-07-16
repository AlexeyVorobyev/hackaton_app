import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Pressable,Image, TouchableOpacity } from 'react-native';
import { Profile } from './components/Profile/Profile';
import { Shop } from './components/Shop/Shop';
import { Authentification } from './components/Authentification/Authentification';
import { Registration } from './components/Registration/Registration';
import { Main } from './components/Main/Main';
import { Train } from './components/Train/Train';

const Authentificated = ({userId}) => {

  const [router,setRouter] = React.useState([true,false,false,false])

  return (
    <>
    <View style={styles.body}>
        {router[0] && <Main/>}
        {router[1] && <Train/>}
        {router[2] && <Shop userId={userId} setRouter={setRouter}/>}
        {router[3] && <Profile userId={userId}/>}
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
    </>
  )
}

export default function App() {

  const [isAuthentificated,setAuthentificate] = React.useState(false);
  const [isRegistr,setRegistr] = React.useState(false);
  const [userId,setUserId] = React.useState(undefined);

  return (
    <View style={styles.container}>
      <View style={styles.upper}/>
      {isAuthentificated  && <Authentificated userId={userId}/>}
      {!isAuthentificated && <>
        {!isRegistr && <Authentification 
          isAuthentificated={isAuthentificated} 
          setAuthentificate={setAuthentificate}
          setRegistr={setRegistr}
          setUserId={setUserId}
        />}
        {isRegistr && <Registration 
          isAuthentificated={isAuthentificated} 
          setAuthentificate={setAuthentificate}
          setRegistr={setRegistr}
          setUserId={setUserId}
        />}
      </>}
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
    backgroundColor:"#fff",
    flex:1.4,
    paddingLeft:25,
    paddingRight:25,
    paddingTop:10,
    paddingBottom:10,
    width:"100%",
    flexDirection:"row",
    justifyContent:'space-between',
    shadowColor:"#555",
    shadowOffset:{
        width:0,
        height:4,
    },
    shadowOpacity:0.1,
    shadowRadius:10,
    elevation:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor:"#000",
    elevation:10,
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10,
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
    height:40,
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
