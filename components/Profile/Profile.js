import { StyleSheet, Text, View,Pressable,Image } from 'react-native';
import { Button } from '../Button/Button';
import { CustomText } from '../CustomText/CustomText';


const Profile = () => {

    // React.useEffect(() => {
    //     fetch('https://reqres.in/api/users')
    //     .then(res => res.json())
    //     .then(json => {
    //         setUsers(json.data);
    //         setLoading(false);
    //     })
    //     .catch(err => {
    //         setLoading(true);
    //         console.log(err);
    //         alert("Ошибка при получении пользователя.");
    //     })
    // },[])

    return (
      <>
      <View style={styles.ProfileHeader}>
        <CustomText style={styles.profText}>Профиль</CustomText>
        <Image
            source={require('./assets/rzd.jpg')}
        />
      </View>
      <View style={styles.ProfileBody}>
        <View style={styles.CardHuman}>
            <View style={styles.head_div}>

            </View>
            <CustomText style={styles.name}>Иван Попов</CustomText>
            <Button 
                styleButton={styles.button}
                title="Мои поездки"
            />
            <Button
                styleButton={styles.button}
                title="Билеты"
            />
            <Button
                styleButton={styles.button}
                title="Мои заказы"
            />
        </View>
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
    head: {
        width:245,
        height:24
    },
    head_div:{
        marginTop:35,
        width:245,
        height:245,
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