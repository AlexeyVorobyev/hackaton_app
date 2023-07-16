import { StyleSheet, Text, View,Pressable,Image,TouchableOpacity, ScrollView } from 'react-native';
import { Button } from '../Button/Button';
import { CustomText } from '../CustomText/CustomText';
import React from 'react';
import { Orders } from '../Orders/Orders';

const data = [
    {
        from:"Москва",
        to:"Краснодар",
        discount:25,
        deadline:"14.05.2024"
    },
    {
        from:"Москва",
        to:"Сыктывкар",
        discount:50,
        deadline:"05.09.2023"
    },
    {
        from:"Москва",
        to:"Пенза",
        discount:10,
        deadline:"24.02.2025+4"
    }
]

const Action = (info) => {
    info = info.info
    return (
        <View style={styles.card}>
            <View style={styles.wrap_2}>
                <Text style={styles.text1}>{info.from}</Text>
                <Text>       {"----------------------------------->"}       </Text>
                <Text style={styles.text1}>{info.to}</Text>
            </View>
            <Text style={styles.text} >Скидка: {info.discount}%</Text>
            <Text>Срок: {info.deadline}</Text>
        </View>
    )
}


const Actions = () => {
    return (
        <View style={styles.wrap}>
            {data.map((x) => <Action info={x}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
    },
    text1:{
        fontSize:15,
    },
    wrap_2:{
        flex:1,
        flexDirection:'row',
    },
    wrap:{
        padding:20,
        marginTop:-20,
    },
    card:{
        justifyContent:'center',
        alignItems:'center',
        shadowColor:"#999",
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity:0.1,
        shadowRadius:10,
        backgroundColor:"#fff",
        elevation:8,
        flex:1,
        marginTop:35,
        width:"100%",
        padding:25,
        flexDirection:'column',
        gap:20,
    },
})

export {Actions}