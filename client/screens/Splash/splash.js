import { StyleSheet,Text ,View } from "react-native";
import React, { useEffect } from "react";

const Splash =({navigation})=>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Entry')
        },2000)
    },[])
    
    return(
        <View style={{backgroundColor:"black", flex:1,justifyContent:"center",alignItems:"center" }}>
            <Text style={{color:"white",fontSize:36,fontWeight:'800'}}>Skillswap</Text>
        </View>
    )
}

export default Splash;