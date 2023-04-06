import { StyleSheet, Text, ActivityIndicator, TouchableOpacity, View, useWindowDimensions, Image, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {AntDesign, MaterialIcons, EvilIcons,SimpleLineIcons, FontAwesome, Entypo,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import RadioGroup from 'react-native-radio-buttons-group';
import { StatusBar } from 'expo-status-bar';




export default function PaymentScreen({navigation}) {

  
  const { styles } = useStyle();

 


  const [radioButtons, setRadioButtons] = useState([
      {
          id: '1', // acts as primary key, should be unique and non-empty string
          label: 'Google Pay                                       ',
          value: 'gpay',
          color:'blue',
          onPress: () => {console.log('gpay')},
          labelStyle: {fontSize:19},
          containerStyle:{marginBottom:15},
          size:22

          
      },
      {
        id: '2',
        label: 'UPI                                                     ',
        value: 'upi' ,
        color:'blue',
        onPress: () => {console.log('upi')},
        labelStyle: {fontSize:19},
        containerStyle:{marginBottom:15},
        size:22,
        selected: true,




            
      },
      {
          id: '3',
          label: 'Pay tm                                              ',
          value: 'paytm' ,
          color:'blue',
          onPress: () => {console.log('paytm')},
          labelStyle: {fontSize:19},
          containerStyle:{marginBottom:15},
          size:22




              
      },
      {
        id: '4',
        label: 'Credit / Debit / Atm Card              ',
        value: 'atm' ,
        color:'blue',
        onPress: () => {console.log('credit')},
        labelStyle: {fontSize:19},
        containerStyle:{marginBottom:15},
        size:22



            
     },
     {
       id: '5',
       label: 'Net Banking                                    ',
       value: 'net' ,
       color:'blue',
       onPress: () => {console.log('netbanking')},
       labelStyle: {fontSize:19},
       containerStyle:{marginBottom:15},
       size:22



           
    },
    {
      id: '6',
      label: 'Cash on Delivery                           ',
      value: 'cod' ,
      color:'blue',
      onPress: () => {console.log('cashondelivery')},
      labelStyle: {fontSize:19},
      containerStyle:{marginBottom:15},
      size:22



          
   }
       ]);



  useLayoutEffect(() => {
    navigation.setOptions({
      // headerShown: false,     
      title: 'Payment ', 
      headerStyle:{
        backgroundColor:'blue'
      },
      
    })

    
   
  },[])

  const onPressRadioButton = (radioButtonsArray) => {
    setRadioButtons(radioButtonsArray);
  }

  

  const goToMapSCreen = () => {
    navigation.navigate("PaymentProcess");

  }

 
  

  return (
    <View  style={styles.WholeScreen}>
        <StatusBar style="auto" />

       <ScrollView style={styles.ScrollContent}>

        <View  style={styles.topLevel}>

          <View style={styles.containerRound}>
            <EvilIcons name='check' color={'blue'} size={40}/>
            <Text style={{fontSize:12}}>Details</Text>

          </View>
          

          <View style={styles.lineLevel}></View>

          <View style={styles.containerRound}>
            <EvilIcons name='check' color={'blue'} size={40}/>
            <Text style={{fontSize:12}}>Summary</Text>

          </View>

          <View style={styles.lineLevel}></View>


          <View style={styles.containerRound}>
            <View style={styles.round}>
              <Text style={{fontSize:12}}>3</Text>
            </View>
            <Text style={{fontSize:13, fontWeight:'bold'}}>Payment</Text>

          </View>

        </View>

        <View style={styles.optionText}> 
          <Text style={{fontSize:14}}>All Payment Options</Text>

        </View>
        <View style={styles.radioButtons}>
          <RadioGroup 
              radioButtons={radioButtons} 
              onPress={onPressRadioButton} 
              
              
          />
        </View>

        <View style={styles.PrizeDetails}>
          <View>
            <Text style={{fontSize:17, fontWeight:'bold', marginBottom:17}}>Price Details:</Text>
          </View>
          
          <View style={styles.textandvalue}>
            <Text style={styles.detailsText}>Price items</Text>
            <Text style={styles.valueText}>Rs. 12 /- </Text>
          </View>

          <View style={styles.textandvalue}>
            <Text style={styles.detailsText}>Quantity</Text>
            <Text style={styles.valueText}>  x 1  </Text>
          </View>

          <View style={styles.textandvalue}>
            <Text style={styles.detailsText}>Offer</Text>
            <Text style={styles.valueText}>Rs.2  per/ peice</Text>
          </View>

          <View style={styles.textandvalue}>
            <Text style={styles.detailsText}>Delivery Charges</Text>
            <Text style={styles.valueText}>Free Delivery </Text>
          </View>
          
          <View style={styles.textandvalue}>
            <Text style={styles.detailsText}>Secured Packaging</Text>
            <Text style={styles.valueText}>Rs.23/- </Text>
          </View>

          <View style={[styles.textandvalue,{borderWidth:0.2,paddingHorizontal:12}]}>
            <Text style={{fontSize:17, fontWeight:'bold', marginVertical:17}}>Total Amount</Text>
            <Text style={styles.valueText}>Rs. 12 /- </Text>
          </View>

        </View>



        



        </ScrollView>



      <View style={styles.bottomBar}>
        <View style={styles.add2cart}>
          <View  style={{flexDirection:'row', alignItems:'center'}}> 
              <FontAwesome name='rupee' size={19} />
              <Text style={styles.pirze}>43 /-</Text>

            </View>
            <TouchableOpacity style={{}}>
              <Text style={styles.prizeText}>View Prize Details</Text>

            </TouchableOpacity>
          

        </View>
        <TouchableOpacity style={styles.buyNow} onPress={goToMapSCreen}>
          <Text style={styles.textBottombar}>Pay Now</Text>
        </TouchableOpacity>
      </View>

      

    </View>
  )
}
const useStyle = () => {
  const dimensions = useWindowDimensions();
  const styles = StyleSheet.create({
    WholeScreen:{
      flex:1
    },
    ScrollContent:{
      flex:1,
      backgroundColor: '#BCBFBE'
    },
    round:{
      borderRadius:150,
      height: dimensions.height/23,
      backgroundColor: 'blue',
      width: dimensions.width/ 13,
      alignItems:'center',
      justifyContent:'center',


    },
    topLevel:{
      backgroundColor: 'white',
      paddingVertical: 10,
      width: dimensions.width,
      height: dimensions.height/12,
      borderBottomColor:'grey',
      borderBottomWidth:1,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
      paddingBottom:5
    },
    lineLevel:{
      width:'15%',
      height:2,
      backgroundColor:'blue',
      marginHorizontal:10
      },

    containerRound:{
        alignItems:'center'
      },
    bottomBar:{
      width:'100%',
      height:69,
      flexDirection:'row',
      alignItems:'center',
      borderTopWidth:0.2,
      paddingBottom:1,
      backgroundColor:'white'
      
    },
    add2cart:{
      flex:3,
      alignItems:'flex-start',
      backgroundColor:'white',
      paddingLeft:15
      
      
    },
    buyNow:{
      flex:2,
      alignItems:'center',
      backgroundColor:'blue',
      margin:4,


    },
    textBottombar:{
      paddingVertical:10,
      fontWeight:'700',
      fontSize:14,
      color:'white'
      
    },
    pirze:{
      fontSize:18,
      fontWeight:'700'
    },
    prizeText:{
      paddingVertical:2,
      fontWeight:'500',
      fontSize:10,
      color:'blue'
  
    },  
    radioButtons:{
      marginTop:2,
        backgroundColor:'white',             
        height: dimensions.height/2 ,
        width: dimensions.width,
        alignItems:'center',
        justifyContent:'center'
    },
    optionText:{
        marginTop:5,
        backgroundColor:'white',             
        height: dimensions.height/16 ,
        width: dimensions.width,
        justifyContent:'center',
        paddingHorizontal:22

    },
    PrizeDetails:{
      marginTop:5,
      backgroundColor:'white',           
      height: dimensions.height/2.8 ,
      width: dimensions.width,
      paddingHorizontal:20,
      paddingVertical:10

    },
    textandvalue:{
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:"center",
      marginBottom:8
    },
    detailsText:{
      fontSize:15
    },
    valueText:{
      color:'green',
      fontSize:15

    },
    blurLoading:{
      opacity: 0.6  ,
      backgroundColor:'lightgrey',
      position:'absolute',
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      height:'100%'
    }
  })

  return { styles }
}
  