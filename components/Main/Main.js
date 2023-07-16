import React from 'react';
import { StyleSheet, Text, View,Pressable,Image,TouchableOpacity } from 'react-native';
import { ShopCards } from '../ShopCards/ShopCards';
import { ScrollView } from 'react-native';


const Main= () => {

    return (
      <>
      <View style={styles.ProfileHeader}>
        <Text style={styles.profText}>Доброе утро NAME</Text>
      </View>
      <View style={styles.ProfileBody}>
        <ScrollView style={styles.scroll}>
            <View style={styles.wrapper}>
                <Text style={styles.header}>Куда отправимся сегодня?</Text>
                <View style={styles.card}>
                    <Text>Где лучше провести лето?</Text>
                    <Text>Лучшие курорты России ждут вас!</Text>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('./assets/arrow.png')} alt='hovno' style={styles.buttonImg} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
      </View>
      </>
    )
}

const styles = StyleSheet.create({
    ProfileHeader: {
        width:"100%",
        flex: 0.07,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor:"#000",
        elevation:10,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    },
    ProfileBody: {
        width:"100%",
        flex:0.85,
    },
    profText: {
        fontSize:30,
        fontWeight:700
    },
    wrapper:{
        padding:15,
        paddingTop:20,
    },
    button: {
        width:"100%",
        flexDirection:'row',
        backgroundColor: "#FF0B0B",
        borderRadius:50,
        flex:0.5,
        justifyContent:'space-between',
        paddingLeft:30,
        paddingRight:30,
        alignItems:'center'
    },
    header: {
        marginTop:30,
        fontSize: 26,
        fontWeight: 500
    },
    card:{
        shadowColor:"#BBB",
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity:0.1,
        shadowRadius:10,
        elevation:5,
        backgroundColor:"#fff",
        flex:1,
        marginTop:35,
        width:"100%",
        padding:25,
        paddingLeft:0,
        flexDirection:'row',
        gap:20,
    },
})

export {Main}