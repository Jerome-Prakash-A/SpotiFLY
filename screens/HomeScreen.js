import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {FontAwesome,AntDesign, Feather, FontAwesome5,Entypo, Ionicons} from '@expo/vector-icons';





export default function HomeScreen({navigation}) {

    const { styles } = useStyle();
    useLayoutEffect(() => { 
        navigation.setOptions({
        headerShown: false,
        

        });                    
                
       
    },[]); 

    const GotoItemsScreen = () =>{
        navigation.navigate('ItemsScreen');
    }

    return (

        <View style={styles.entireScreen}>
            <StatusBar style="auto" />
            <View style={styles.adminsearchcontainer}>         
        
                <View style={{paddingTop:7}}>
                    <Text style={{fontSize:14, fontWeight:'bold', color:'white'}}>HOME</Text>
                </View>
               
    
            </View>
            
            {/* <ScrollView style={styles.Content}>

            </ScrollView>
            <Text style={styles.WhatText}>
                What your Wnat?
            </Text> */}
            <View style={styles.row}>
                <TouchableOpacity style={styles.imageandText} onPress={GotoItemsScreen}>
                    <View style={{flex:3, }}>
                      <Image source={require('../assets/images/waterand_snacks.png')} style={styles.image}/>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={{fontSize:15}}>Waterand & snacks</Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageandText} onPress={GotoItemsScreen}>
                    <View style={{flex:3, }}>
                      <Image source={require('../assets/images/recycle.png')} style={styles.image}/>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={{fontSize:15}}>Daily waste </Text>

                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.imageandText} onPress={GotoItemsScreen}>
                    <View style={{flex:3, }}>
                      <Image source={require('../assets/images/firstaid.png')} style={styles.image}/>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={{fontSize:15}}>Emergency Kit   </Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageandText} onPress={GotoItemsScreen}>
                    <View style={{flex:3, }}>
                      <Image source={require('../assets/images/coolDrinks.png')} style={styles.image}/>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={{fontSize:15}}>Cool Drinks</Text>

                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.imageandText} onPress={GotoItemsScreen}>
                    <View style={{flex:3, }}>
                      <Image source={require('../assets/images/FruitsandVegtable.png')} style={styles.image}/>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={{fontSize:15}}>Fruitsand Vegtable</Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageandText} onPress={GotoItemsScreen}>
                    <View style={{flex:3, }}>
                      <Image source={require('../assets/images/waterand_snacks.png')} style={styles.image}/>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={{fontSize:15}}>safsad</Text>

                    </View>
                </TouchableOpacity>
            </View>
        </View> 
    )
}

const useStyle = () => {
    const dimensions = useWindowDimensions();
    

    const styles = StyleSheet.create({
        entireScreen:{
            flex:1
        },
        adminsearchcontainer:{
            backgroundColor:'blue',
            paddingTop:40,
            flexDirection:'row',
            justifyContent:'center',
            paddingBottom:10,
            alignItems:'center',
            borderBottomColor:'black',
            borderBottomWidth:.4
          },
          Content:{
            flex:1
          },
          WhatText:{
            fontSize:19,
            backgroundColor:'lightblue',
             margin:18,
              width:165,
              padding:9,
              borderRadius:15,
              position:'absolute',
              top: dimensions.height/9
            },
            row:{
                flexDirection:'row',
                width:'99%',
                height:dimensions.height/4.5,
                marginTop:20,
                marginLeft:2,
                alignItems:'center',
                justifyContent:'center'
            },
            imageandText:{
                backgroundColor:'lightblue',
               flex:1,
               margin:10,
               borderRadius:20,
                alignItems:'center',
                justifyContent:'center'
            },
            image:{
               width:100,
               height:100
            }
        
        

      
    })
    return { styles }
}
  