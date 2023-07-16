import React from 'react';
import { StyleSheet, Text, View,Pressable,Image,TouchableOpacity } from 'react-native';
import { ShopCards } from '../ShopCards/ShopCards';
import { ScrollView } from 'react-native';


const Train= () => {

    return (
        <>
        <View style={styles.ProfileHeader}>
            <Text style={styles.profText}>Мой вагон</Text>
        </View>
        <View style={styles.ProfileBody}>
            <ScrollView style={styles.scroll}>
                <View style={styles.wrapper}>
                    <Image style={styles.lol}source={require('./assets/lolxd.png')}></Image>
                </View>
            </ScrollView>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    lol:{
        marginTop:-50,
        width:"100%",
        resizeMode:'contain'
    },
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
        flex:0.93,
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
        flexDirection:'row',
        backgroundColor: "#FF0B0B",
        borderRadius:50,
        justifyContent:'space-between',
        alignItems:'center',
        position:'absolute',
        bottom:20,
        right:20,
        padding:10,
    },
})

export {Train}