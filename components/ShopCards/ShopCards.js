import { StyleSheet, Text, View,Pressable,Image } from 'react-native';
import { Button } from '../Button/Button';
import { CustomText } from '../CustomText/CustomText';


const ShopCards = ({data}) => {

    data = [
        {
            name:"lipton",
            price:"123",
            amount:0,
            description:"dasdadasd"
        },
        {
            name:"lipton",
            price:"123",
            amount:0,
            description:"dasdadasd"
        },
        {
            name:"lipton",
            price:"123",
            amount:0,
            description:"dasdadasd"
        }
    ]

    const ShopCard = (info) => {
        
        return(
            <View style={styles.card} >
                <View style={styles.cardWrap_1}>
                    <Image style={styles.cardImg}/>
                </View>
                <View style={styles.cardWrap_2}>
                    <Text style={styles.cardDescription_1}>{info.name}</Text>
                    <View style={styles.cardWrap_3}>
                        <View style={styles.cardWrap_4}>
                            <Text style={styles.cardDescription_2}>{info.description}</Text>
                            <Text style={styles.price}>{info.price}</Text>
                        </View>
                        <View style={styles.cardWrap_5}>
                            <TouchableOpacity style={styles.button}>
                                <Image source={require('./assets/icons/user.png')} style={styles.buttonImg} />
                            </TouchableOpacity>
                            <Text style={styles.cardAmount}></Text>
                            <TouchableOpacity style={styles.button}>
                                <Image source={require('./assets/icons/user.png')} style={styles.buttonImg} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
      <>
        
      </>
    )
}

const styles = StyleSheet.create({
    card:{

    },
    cardWrap_1:{

    },
    cardWrap_2:{

    },
    cardWrap_3:{

    },
    cardWrap_4:{

    },
    cardWrap_5:{

    },
    cardDescription_1:{

    },
    cardDescription_2:{

    },
    cardImg:{

    },
    button:{
        
    },
    buttonImg:{

    },
    price: {

    },
    cardAmount:{

    }
})

export {ShopCards}