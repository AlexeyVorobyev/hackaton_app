import { StyleSheet, Text, View,Pressable,Image,TouchableOpacity } from 'react-native';
import React from 'react';


const ShopCards = ({data,addCardElem,removeCardElem,updateCardElem,shopCardsDataInProcess}) => {

    const ShopCard = (info,index) => {

        const [amount,setAmount] = React.useState(0)

        React.useEffect(() => {
            res = undefined;
            for (let i = 0; i < shopCardsDataInProcess.length;i++) {
                if (shopCardsDataInProcess[i].dish.id == info.id) res = shopCardsDataInProcess[i]
            }
            if (res != undefined) setAmount(res.amount)
        },[shopCardsDataInProcess]) 
        
        return(
            <View style={styles.card} key={info.id} >
                <View style={styles.cardWrap_1}>
                    <Image style={styles.cardImg} source={{uri: info.image}}/>
                </View>
                <View style={styles.cardWrap_2}>
                    <Text style={styles.cardDescription_1}>{info.name}</Text>
                    <View style={styles.cardWrap_3}>
                        <View style={styles.cardWrap_4}>
                            <Text style={styles.cardDescription_2}>{info.description}</Text>
                            <Text style={styles.price}>{info.price + " Р"}</Text>
                        </View>
                        <View style={styles.cardWrap_5}>
                            <View style={styles.cardWrap_6}>
                                {amount != 0 && <TouchableOpacity style={styles.button} onPress={() => 
                                {
                                    if (amount == 1) {
                                        removeCardElem(info.id);
                                    }
                                    else {
                                        updateCardElem(info.id,amount - 1);
                                    }
                                    setAmount(amount-1)
                                }}>
                                    <Image source={require('./assets/minus.png')} alt='hovno' style={styles.buttonImg}/>
                                </TouchableOpacity>}
                                {amount != 0 && <Text style={styles.cardAmount}>{amount}</Text>}
                                <TouchableOpacity style={styles.button} onPress={() => 
                                {
                                    if (amount == 0) {
                                        addCardElem(info.id);
                                    }
                                    else {
                                        updateCardElem(info.id, amount + 1);
                                    }
                                    setAmount(amount+1)
                                }}>
                                    <Image source={require('./assets/plus.png')} alt='hovno' style={styles.buttonImg} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
      <>
        {data.map((info,index) => {
            return ShopCard(info,index)
        })}
      </>
    )
}

const styles = StyleSheet.create({
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

export {ShopCards}