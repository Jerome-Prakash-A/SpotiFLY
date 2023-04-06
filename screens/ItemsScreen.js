import { Image, ScrollView, StyleSheet, Text,TouchableOpacity,useWindowDimensions, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';


export default function ItemsScreen({navigation}) {

    const { styles } = useStyle();
    
    useLayoutEffect(() => {

        navigation.setOptions({
          // headerShown: false,     
          title: '', 
          headerStyle:{
            backgroundColor:'blue'
          },
        })
    
        
      },[])

      const gotToPayment =() => {
        navigation.navigate("PaymentScreen");
      }
  return (
    <View style={styles.entireScreen}>
            <StatusBar style="auto" />
            <ScrollView style={{flex:1}}>
                <View style={styles.row}>
                    <View style={styles.card}>
                        <View style={styles.imageView}>
                            <Image  source={require('../assets/images/waterand_snacks.png')} style={styles.image} />
                        </View>
                        <View style={styles.Details}>
                            <Text style={styles.itemName}>WaterBootle</Text>
                            <Text style={styles.itemquantity}>1.5 Litre</Text>
                            <Text style={styles.itemprize}>Rs.25</Text>                            
                        </View>
                        <TouchableOpacity style={styles.orderBTN} onPress={gotToPayment}>
                            <Text style={{fontSize:17,color:'white'}}>Order</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.imageView}>
                            <Image  source={require('../assets/images/waterand_snacks.png')} style={styles.image} />
                        </View>
                        <View style={styles.Details}>
                        <Text style={styles.itemName}>WaterBootle</Text>
                            <Text style={styles.itemquantity}>1.5 Litre</Text>
                            <Text style={styles.itemprize}>Rs.25</Text>                           
                        </View>
                        <TouchableOpacity style={styles.orderBTN} onPress={gotToPayment}>
                            <Text style={{fontSize:17,color:'white'}}>Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.card}>
                        <View style={styles.imageView}>
                            <Image  source={require('../assets/images/waterand_snacks.png')} style={styles.image} />
                        </View>
                        <View style={styles.Details}>
                            <Text style={styles.itemName}>WaterBootle</Text>
                            <Text style={styles.itemquantity}>1.5 Litre</Text>
                            <Text style={styles.itemprize}>Rs.25</Text>                            
                        </View>
                        <TouchableOpacity style={styles.orderBTN} onPress={gotToPayment}>
                            <Text style={{fontSize:17,color:'white'}}>Order</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.imageView}>
                            <Image  source={require('../assets/images/waterand_snacks.png')} style={styles.image} />
                        </View>
                        <View style={styles.Details}>
                        <Text style={styles.itemName}>WaterBootle</Text>
                            <Text style={styles.itemquantity}>1.5 Litre</Text>
                            <Text style={styles.itemprize}>Rs.25</Text>                           
                        </View>
                        <TouchableOpacity style={styles.orderBTN} onPress={gotToPayment}>
                            <Text style={{fontSize:17,color:'white'}}>Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.card}>
                        <View style={styles.imageView}>
                            <Image  source={require('../assets/images/waterand_snacks.png')} style={styles.image} />
                        </View>
                        <View style={styles.Details}>
                            <Text style={styles.itemName}>WaterBootle</Text>
                            <Text style={styles.itemquantity}>1.5 Litre</Text>
                            <Text style={styles.itemprize}>Rs.25</Text>                            
                        </View>
                        <TouchableOpacity style={styles.orderBTN} onPress={gotToPayment}>
                            <Text style={{fontSize:17,color:'white'}}>Order</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.imageView}>
                            <Image  source={require('../assets/images/waterand_snacks.png')} style={styles.image} />
                        </View>
                        <View style={styles.Details}>
                        <Text style={styles.itemName}>WaterBootle</Text>
                            <Text style={styles.itemquantity}>1.5 Litre</Text>
                            <Text style={styles.itemprize}>Rs.25</Text>                           
                        </View>
                        <TouchableOpacity style={styles.orderBTN} onPress={gotToPayment}>
                            <Text style={{fontSize:17,color:'white'}}>Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.card}>
                        <View style={styles.imageView}>
                            <Image  source={require('../assets/images/waterand_snacks.png')} style={styles.image} />
                        </View>
                        <View style={styles.Details}>
                            <Text style={styles.itemName}>WaterBootle</Text>
                            <Text style={styles.itemquantity}>1.5 Litre</Text>
                            <Text style={styles.itemprize}>Rs.25</Text>                            
                        </View>
                        <TouchableOpacity style={styles.orderBTN} onPress={gotToPayment}>
                            <Text style={{fontSize:17,color:'white'}}>Order</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.imageView}>
                            <Image  source={require('../assets/images/waterand_snacks.png')} style={styles.image} />
                        </View>
                        <View style={styles.Details}>
                        <Text style={styles.itemName}>WaterBootle</Text>
                            <Text style={styles.itemquantity}>1.5 Litre</Text>
                            <Text style={styles.itemprize}>Rs.25</Text>                           
                        </View>
                        <TouchableOpacity style={styles.orderBTN} onPress={gotToPayment}>
                            <Text style={{fontSize:17,color:'white'}}>Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ScrollView>
    </View>
  )
}



const useStyle = () => {
    const dimensions = useWindowDimensions();
    
    

    const styles = StyleSheet.create({
        entireScreen:{
            flex:1
        },
        row:{
            height:dimensions.height/3,
            width:'100%',
            flexDirection:'row',
            alignItems:'center',
            marginTop:20

        },
        card:{
           
            flex:1,
            alignItems:'center',
            padding:10,
            borderRadius:20,
            marginHorizontal:10,
            backgroundColor:'lightblue',

            

        },
        imageView:{
            flex:2,
            height:100,
            width:100
        
        },
        image:{
            height:100,
            width:100,
        },
        Details:{
            justifyContent:'center',
            alignItems:'center',
           
            

        },
        itemName:{
            fontSize:17
        },
        itemprize:{
            fontSize:19,
            padding:4
        },
        orderBTN:{
            backgroundColor:'blue',
            padding:7,
            paddingHorizontal:35,
            borderRadius:20
        }
        

      
    })
    return { styles }
}