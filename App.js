import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Button } from '../hackaton_app/components/Button/Button';
import { Profile } from './components/Profile/Profile';


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

const Page3 = () => {
  return (
    <Text>3</Text>
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
        {router[2] && <Page3/>}
        {router[3] && <Profile/>}
      </View>
      <View style={styles.navigation}>
        <Button 
          styleButton={styles.button}
          title=""
          onPress={() => setRouter([true,false,false,false])}
        />
        <Button 
          styleButton={styles.button}
          title=""
          onPress={() => setRouter([false,true,false,false])}
        />
        <Button 
          styleButton={styles.button}
          title=""
          onPress={() => setRouter([false,false,true,false])}
        />
        <Button 
          styleButton={styles.button}
          title=""
          onPress={() => setRouter([false,false,false,true])}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  navigation: {
    flex:1.4,
    padding:20,
    width:"100%",
    backgroundColor:'#000',
    flexDirection:"row",
    gap:20,
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
    width:64,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
});
