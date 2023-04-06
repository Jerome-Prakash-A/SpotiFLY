import { Alert, Image, StyleSheet,ActivityIndicator, Text, TextInput, TouchableOpacity, useWindowDimensions, View, TextComponent } from 'react-native'
import React, { useLayoutEffect } from 'react';
import {FontAwesome,AntDesign, Feather, FontAwesome5,Entypo, Ionicons} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';





export default function LoginScreen({navigation}) {

    
     
    const { styles } = useStyle();

    useLayoutEffect(() => { 
        navigation.setOptions({
        headerShown: false,
        

        });                    
                
       
    },[]); 





    return (

        <View style={styles.entireScreen}>
            <StatusBar style="auto" />

            <Text style={{fontSize:45,fontStyle:'italic', color:'blue',marginBottom:70, fontWeight:'500'}}>
                SpotiFLY
            </Text>
            <View style={styles.imageView}>
                <Image source={require('../assets/images/drones.gif')} style={styles.image} />
            </View>


            <Text style={{fontSize:25, color:'blue', fontWeight:'500'}}>
                Login
            </Text>

            <View style={styles.inputField}>
                <TextInput 
                    placeholder='Enter your Email'
                    style={styles.inputEmail}
                    keyboardType='email-address'
                    underlineColorAndroid="blue"
                    autoCapitalize="none"
                   
                />  
                <Entypo name='check' color='blue' size={18} style={{position:'absolute', marginLeft:280}}/>                        

            </View>
            
            <View style={styles.inputField}>
                
                <TextInput 
                    placeholder='Enter your Password'
                    style={styles.inputpassword}
                    underlineColorAndroid="blue"
                    autoCapitalize="none"
                   
                    
                
                />
                <Entypo name='eye' color='blue' 
                 size={18} style={{position:'absolute', marginLeft:280}}/>                        

            </View>
            <TouchableOpacity style={styles.BTN} onPress={() => navigation.navigate('TabNavigatorScreen')}>
                <Text style={{fontSize:19,color:'white'}}>
                    Singup
                </Text>
            </TouchableOpacity>
            
        </View> 
    )
}

const useStyle = () => {
    const dimensions = useWindowDimensions();
    

    const styles = StyleSheet.create({
        entireScreen:{
            flex:1,
            justifyContent:'flex-end',
            alignItems:'center',
            backgroundColor:"white"
            
        },
        inputEmail:{
            width: dimensions.width/1.2,
            height: 40,
            fontSize:12,
            paddingBottom:9,
            paddingRight:20

        },
        inputpassword:{
            width: dimensions.width/1.2,
            height: 40,
            fontSize:12,
            paddingBottom:9,
            paddingRight:35,
            
            
          
        },
        inputField:{
            flexDirection:'row',
             alignItems:'center',
            backgroundColor:'white',
            marginTop:20,
            padding:7,
            borderRadius:16,
            shadowColor:'#171717',
            elevation:10,

        },
        BTN:{
            backgroundColor:"blue",
            width: dimensions.width/1.2,
            height: dimensions.height/13,
            shadowColor:'#171717',
            elevation:10,
            marginVertical:80,
            borderRadius:26,
            alignItems:'center',
            justifyContent:'center'

            
        },
        image:{
            height:120,
            width:120
        },
        imageView:{
            height:120,
            width:120
        }
        
        
        

      
    })
    return { styles }
}
  