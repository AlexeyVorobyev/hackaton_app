import React from 'react';
import { StyleSheet, Text, View,Pressable,Image,TouchableOpacity } from 'react-native';

const Card = (food) => {
    food = food.food
    return (
        <View style={styles.card} key={food.dish.id} >
            <View style={styles.cardWrap_1}>
                <Image style={styles.cardImg} source={{uri: food.dish.image}}/>
            </View>
            <View style={styles.cardWrap_2}>
                <Text style={styles.cardDescription_1}>{food.dish.name}</Text>
                <View style={styles.cardWrap_3}>
                    <View style={styles.cardWrap_4}>
                        <Text style={styles.cardDescription_2}>{food.dish.description}</Text>
                        <Text style={styles.price}>{food.dish.price + " Р"}</Text>
                    </View>
                    <View style={styles.cardWrap_5}>
                        <View style={styles.cardWrap_6}>
                            <Text style={styles.cardAmount}>{food.amount} ШТ</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}


const Order = (info) => {
    console.log(info)
    return (
        <View style={styles.go}>
            <View>
                <Text style={styles.info}>{info.info.status.name} заказ {info.info.id}</Text>
                <Text style={styles.info}>Время: {info.info.time}</Text>
            </View>
            {info.info.items.map((food) => <Card food={food}></Card>)}
        </View>
    )
}


const Orders = ({userId}) => {

    const [ordersData,setOrdersData] = React.useState([]);

    const getOrdersData = async () => {
        try {
            const response = await fetch(`http://10.2.0.59:8101/api/users/${userId}/order`);
            const json = await response.json();
            setOrdersData(json)
        } catch (error) {
            alert(error);
        }
    };

    React.useEffect(() => {
        getOrdersData()
    },[])

    return(
        <View>
            {ordersData.map((elem) => <Order info={elem} key={elem.id}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    go:{
        flex:1,
        justifyContent:'center',
        padding:20,
        alignItems:'center'
    },
    info:{
        fontSize: 20,
        fontWeight: 600,
    },
    card:{
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
        paddingLeft:0,
        flexDirection:'row',
        gap:20,
    },
    cardWrap_1:{
        flex:0.3
    },
    cardImg: {
        flex:1,
        resizeMode:'contain'
    },
    cardWrap_2:{
        flex:0.7
    },
    cardWrap_3:{
        flex:1,
        paddingTop:40,
        flexDirection:"row"
    },
    cardWrap_4:{
        justifyContent:'space-between',
        flex:0.6,
    },
    cardWrap_5:{
        flex:0.4,
        flexDirection:'row',
        alignItems:"flex-end",
        justifyContent:"flex-end"
    },
    cardWrap_6:{
        marginLeft:10,
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    cardDescription_1:{
        fontSize: 20,
        fontWeight: 600,
        margin:0,
    },
    cardDescription_2:{
        color: "#A7A7A7",
        fontSize: 20,
        fontWeight: 600,
    },
    button:{
        backgroundColor:"#FF0B0B",
        borderRadius:20,
    },
    buttonImg:{
        width:30,
        height:30,
    },
    price: {
        fontSize: 20,
        fontWeight: 600,
        margin:0,
    },
    cardAmount:{
        marginLeft:5,
        marginRight:5,
        fontSize: 22,
        fontWeight: 700,
    }
})

export {Orders}