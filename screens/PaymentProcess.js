import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function PaymentProcess({navigation}) {
    
    useLayoutEffect(() => {
        navigation.setOptions({
          // headerShown: false,     
          title: '', 
          headerStyle:{
            backgroundColor:'blue'
          },
          
        })
    
        
       
      },[])
  return (
    <View style={styles.wholeScreen}>
      <Text style={styles.Textt}>Payment Successfull!</Text>
      <TouchableOpacity style={styles.buyNow} onPress={() => navigation.navigate("MapScreen")}>
          <Text style={styles.textBottombar}>Pay Now</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    wholeScreen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Textt:{
        fontSize:25,
        color:'green'
    },
    buyNow:{
        backgroundColor:'blue',
        width:'80%',
        alignItems:"center",
        height:40,
        borderRadius:20,
        marginTop:12,
        justifyContent:'center'
    },
    textBottombar:{
        fontSize:17,
        color:'white'
    }
})