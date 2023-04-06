import { Alert, Image, StyleSheet,ActivityIndicator, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import MpaView from 'react-native-maps';
import MapView, {Marker,Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY} from '@env';

export default function MapScreen({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,     
          
        })
    
        alert("")
        Alert.alert(
            'On The Way!',
            'Your Prouduct is Coming To your current Loction, Stay there!',
            [
                   {text: 'OK'},
            ]
        )
       
      },[])

    const { styles } = useStyle();
    const [origin,setOrigin] = useState({
        latitude:9.925000,
        longitude:78.119000
    })
  
   


    return (

        <View style={styles.entireScreen}>
            <StatusBar style="auto" />
            <MapView 
                style={styles.map} 
                initialRegion={{
                    latitude:origin.latitude,
                    longitude:origin.longitude,
                    latitudeDelta:0.15,
                    longitudeDelta:0.15,
                }}
               
            >   
            
                <Marker coordinate = {{latitude: 10.0474,longitude:  78.0904}}
                    pinColor = {"red"} // any color
                    
                >
                    <View style={styles.drone} >
                        <Image source={require('../assets/images/currentloactaion.png')} style={styles.iamgedrone} />
                    </View>
                </Marker>
                  

                <Marker coordinate = {{latitude:  9.9377,longitude: 78.1443}}
                   
                    title={"Vishalde mall"}
                    description={"Food & entertainment"}
                >
                    <View style={styles.drone} >
                        <Image source={require('../assets/images/drone.png')} style={styles.iamgedrone} />
                    </View>
                </Marker>
                <Marker coordinate = {{latitude:  9.9383,longitude: 78.1259}}
                   
                    title={"Vishalde mall"}
                    description={"Food & entertainment"}
                >
                    <View style={styles.drone} >
                        <Image source={require('../assets/images/drone.png')} style={styles.iamgedrone} />
                    </View>
                </Marker>
                <Marker coordinate = {{latitude:  9.929,longitude: 78.1059}}
                   
                    title={"Vishalde mall"}
                    description={"Food & entertainment"}
                >
                    <View style={styles.drone} >
                        <Image source={require('../assets/images/drone.png')} style={styles.iamgedrone} />
                    </View>
                </Marker>
                <Marker coordinate = {{latitude:  9.9007,longitude: 78.1250}}
                   
                    title={"Vishalde mall"}
                    description={"Food & entertainment"}
                >
                    <View style={styles.drone} >
                        <Image source={require('../assets/images/drone.png')} style={styles.iamgedrone} />
                    </View>
                </Marker>
                <Marker coordinate = {{latitude:  9.9377,longitude: 78.1443}}
                   
                    title={"Vishalde mall"}
                    description={"Food & entertainment"}
                >
                    <View style={styles.drone} >
                        <Image source={require('../assets/images/drone.png')} style={styles.iamgedrone} />
                    </View>
                </Marker>
                {/* <MapViewDirections 
                    origin={{latitude:  9.9000,longitude: 78.1100}}
                    destination={{latitude:  9.9007,longitude: 78.1250}}
                    apikey={GOOGLE_MAPS_KEY}
                    strokeColor='red'
                    strokeWidth={8}
                /> */}
                <Polyline
                    coordinates={[{latitude:  10.0474,longitude: 78.0904},
                        {latitude:  9.9383,longitude: 78.1259}]}
                    strokeColor='blue'
                    strokeWidth={8}
                    lineDashPattern={[14,12]}
                />


            </MapView>
        </View> 
    )
}

const useStyle = () => {
    const dimensions = useWindowDimensions();
    

    const styles = StyleSheet.create({
        entireScreen:{
            flex:1
        },
        map:{
            width:'100%',
            height:'100%',
        },
        drone:{
            height:67,
            width:67
        },
        iamgedrone:{
            height:67,
            width:67
        }

      
    })
    return { styles }
}
  