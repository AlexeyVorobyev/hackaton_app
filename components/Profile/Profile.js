import { StyleSheet, Text, View,Pressable,Image,TouchableOpacity, ScrollView } from 'react-native';
import { Button } from '../Button/Button';
import { CustomText } from '../CustomText/CustomText';
import React from 'react';
import { Orders } from '../Orders/Orders';


const Profile = ({userId}) => {

    const [userData,setUserData] = React.useState([])

    const [router,setRouter] = React.useState([true,false,false,false,false])

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
        <Text style={styles.profText}>Профиль</Text>
      </View>
      <View style={styles.ProfileBody}>
        {router[0] && <View style={styles.CardHuman}>
            <View style={styles.head_div}>

            </View>
            <Text style={styles.name}>{userData.fullName}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.loginText}>Мои поездки</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.loginText}>Билеты</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setRouter([false,false,false,true,false])}>
                <Text style={styles.loginText}>Мои заказы</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.loginText}>Персональные акции</Text>
            </TouchableOpacity>
        </View>}
        {router[3] && <View>
            <ScrollView>
                <Orders userId={userId}></Orders>
            </ScrollView>
        </View>}
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
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity:0.3,
        shadowRadius:10,
        elevation:10,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    },
    ProfileBody: {
        width:"100%",
        flex:0.93,
    },
    CardHuman:{
        flex:1,
        flexDirection:'column',
        alignItems:"center",
        width:"100%",
    },
    button:{
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
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        borderRadius:39,
    },
    head_div:{
        marginTop:35,
        width:190,
        height:190,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:3,
        },
        backgroundColor:"#DDD",
        shadowOpacity:0.3,
        shadowRadius:10,
        borderRadius:200,
    },
    name: {
        marginTop:20,
        fontSize:40,
        fontWeight: 700,
    },
    profText: {
        fontSize:30,
        fontWeight:700
    }
})

export {Profile}