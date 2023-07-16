import React from 'react';
import { StyleSheet, Text, View,Pressable,Image,TouchableOpacity } from 'react-native';
import { ShopCards } from '../ShopCards/ShopCards';
import { ScrollView } from 'react-native';


const Main= ({userId}) => {

    const [userData,setUserData] = React.useState([])

    const signUpApi = async (userId) => {
        try {
            const response = await fetch(`http://10.2.0.59:8101/api/users/me/${userId}`)
            const json = await response.json();
            setUserData(json);
        } catch (error) {
            alert(error);
        }
    }

    React.useEffect(() => {
        signUpApi(userId)
    },[])

    return (
      <>
      <View style={styles.ProfileHeader}>
        <Text style={styles.profText}>Доброе утро {userData.fullName}</Text>
      </View>
      <View style={styles.ProfileBody}>
        <ScrollView style={styles.scroll}>
            <View style={styles.wrapper}>
                <Text style={styles.header}>Куда отправимся сегодня?</Text>
                <View style={styles.card}>
                    <Text style={styles.cardHeader}>Где провести лето?</Text>
                    <Text style={styles.cardParagraph}>Лучшие курорты России ждут вас!</Text>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('./assets/arrow.png')} style={styles.buttonImg} />
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardHeader}>Где провести лето?</Text>
                    <Text style={styles.cardParagraph}>Лучшие курорты России ждут вас!</Text>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('./assets/arrow.png')} style={styles.buttonImg} />
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardHeader}>Где провести лето?</Text>
                    <Text style={styles.cardParagraph}>Лучшие курорты России ждут вас!</Text>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('./assets/arrow.png')} style={styles.buttonImg} />
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardHeader}>Где провести лето?</Text>
                    <Text style={styles.cardParagraph}>Лучшие курорты России ждут вас!</Text>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('./assets/arrow.png')}  style={styles.buttonImg} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
      </View>
      </>
    )
}

const styles = StyleSheet.create({
    scroll: {
        flex:1
    },
    cardHeader:{
        color:"#9DC3E7",
        fontSize: 26,
        fontWeight: 700,
        marginTop:-10,
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
        backgroundColor: "#9DC3E7",
        borderRadius:50,
        justifyContent:'space-between',
        alignItems:'center',
        position:'absolute',
        bottom:20,
        right:20,
        padding:10,
    },
    header: {
        fontSize: 26,
        fontWeight: 500
    },
    card:{
        position:'relative',
        shadowColor:"#BBB",
        shadowOffset:{
            width:0,
            height:3,
        },
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor:"#000",
        elevation:10,
        flexDirection:"row",
        justifyContent:"space-between",
        shadowOpacity:0.1,
        shadowRadius:10,
        elevation:5,
        backgroundColor:"#fff",
        flex:1,
        marginTop:35,
        width:"100%",
        padding:25,
        paddingBottom:75,
        paddingTop:20,
        flexDirection:'column',
        gap:20,
        justifyContent:'center',
        alignItems:"center"
    },
    cardParagraph:{
        fontSize: 16,
        marginTop:-6,
    }
})

export {Main}