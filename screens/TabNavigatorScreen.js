import React, { useLayoutEffect } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import  {MaterialIcons,MaterialCommunityIcons,Ionicons, FontAwesome} from 'react-native-vector-icons';
import MapScreen from './MapScreen';
import HomeStack from '../navigations/HomeStack';






export default function TabNavigatorScreen({navigation}) {
    const Tab = createBottomTabNavigator();

    useLayoutEffect(() => { 
      navigation.setOptions({
      headerShown: false,
      

      });                    
              
     
  },[]); 

  return ( 

      <Tab.Navigator
       
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          headerShown: false,   
          tabBarStyle: {
            backgroundColor:'blue',         
            shadowColor:'#171717',
            height:53,
            // borderTopRightRadius:19,
            // borderTopLeftRadius:20,
            elevation:19,
           
            
            
          },       
          
          tabBarshowLabel:false,
          tabBarHideOnKeyboard: true,

          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'HomeStack'){
              iconName= focused ? "ios-home-sharp" : "md-home-outline";
              return <Ionicons name={iconName} size={26} color={'white'} />
            }else if(route.name === 'MapScreen'){
              iconName= focused ? "map-marker-radius" : "map-marker-radius-outline";
              return <MaterialCommunityIcons name={iconName} size={26} color={'white'} />
            }
            
          },
        
        })}
      >
        <Tab.Screen name='HomeStack' component={HomeStack}/>     
        <Tab.Screen name='MapScreen'component={MapScreen} /> 
        
        


        
        


      </Tab.Navigator>
     
    
 
  )
}

