import React from 'react';
import { StyleSheet, Text, View,Pressable,Image,TouchableOpacity } from 'react-native';
import { ShopCards } from '../ShopCards/ShopCards';
import { ScrollView } from 'react-native';


const Shop = ({userId,setRouter}) => {

    const [shopCardsData,setShopCardsData] = React.useState([]);
    const [shopCardsDataInProcess,setShopCardsDataInProcess] = React.useState([]);
    const [price,setPrice] = React.useState(0);

    const getDishesApi = async () => {
        try {
            const response = await fetch('http://10.2.0.59:8101/api/dish');
            const json = await response.json();
            setShopCardsData(json);
        } catch (error) {
            alert(error);
        }
    };

    const calculatePrice = async (items) => {
        let sum = 0;
        for (let i = 0; i < items.length;i++) {
            sum+=items[i].amount*items[i].dish.price
        }
        setPrice(sum.toFixed(2));
    }

    const getCardsData = async () => {
        try {
            const response = await fetch(`http://10.2.0.59:8101/api/users/${userId}/card`);
            const json = await response.json();
            setShopCardsDataInProcess(json.items)
            calculatePrice(json.items)
        } catch (error) {
            alert(error);
        }
    };

    const addCardElem = async (dishId) => {
        try {
            const response = await fetch(`http://10.2.0.59:8101/api/users/${userId}/card/add/${dishId}`,{
                method:'post',
            });
            getCardsData()
        } catch (error) {
            alert(error);
        }
    };

    const createCard = async () => {
        try {
            const response = await fetch(`http://10.2.0.59:8101/api/users/${userId}/card/create`,{
                method:'post',
            });
            getCardsData()
            setRouter([false,false,false,true])
        } catch (error) {
            alert(error);
        }
    };

    const removeCardElem = async (dishId) => {
        try {
            const response = await fetch(`http://10.2.0.59:8101/api/users/${userId}/card/remove/${dishId}`,{
                method:'post',
            });
            getCardsData()
        } catch (error) {
            alert(error);
        }
    };

    const updateCardElem = async (dishId,amount) => {
        try {
            const response = await fetch(`http://10.2.0.59:8101/api/users/${userId}/card/update/${dishId}`,{
                method:'post',
                body:JSON.stringify({amount:amount}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            getCardsData()
        } catch (error) {
            alert(error);
        }
    };

    React.useEffect(() =>{
        getDishesApi();
        getCardsData();
    },[])

    return (
      <>
      <View style={styles.ProfileHeader}>
        <Text style={styles.profText}>Магазин</Text>
      </View>
      <View style={styles.ProfileBody}>
        <ScrollView style={styles.scroll}>
            <View style={styles.wrapper}>
                <ShopCards 
                    data={shopCardsData} 
                    addCardElem={addCardElem}
                    removeCardElem={removeCardElem}
                    updateCardElem={updateCardElem}   
                    shopCardsDataInProcess={shopCardsDataInProcess}
                />
            </View>
        </ScrollView>
      </View>
      <View style={styles.buttonZone}>
        <TouchableOpacity style={styles.button} onPress={() => {
            createCard();
        }}>
            <Text style={styles.buttonText}>Купить</Text>
            <Text style={styles.buttonText}>{Math.round(price,2)} Р</Text>
        </TouchableOpacity>
      </View>
      </>
    )
}

const styles = StyleSheet.create({
    ProfileHeader: {
        width:"100%",
        flex: 0.0776,
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
        flex:0.85,
    },
    profText: {
        fontSize:30,
        fontWeight:700
    },
    wrapper:{
        padding:10,
        paddingTop:0,
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
    buttonZone: {
        backgroundColor:"#fff",
        justifyContent:'center',
        alignItems:'center',
        flex:0.15,
        paddingLeft:46,
        paddingRight:46,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity:0.3,
        shadowRadius:10,
        elevation:5,
        padding:10,
    },
    buttonText: {
        fontSize:20,
        color:"#fff",
        fontWeight:700,
        marginBottom:4,
    },
    scroll: {

    },
})

export {Shop}