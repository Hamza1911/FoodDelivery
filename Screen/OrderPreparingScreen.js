import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderPreparingScreen = () => {
    const navigation=useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Delivery")
        },3000)
    },[])
  return (
    <View className="flex-1 items-center justify-center bg-white"> 
    <Image source={require("../assets/images/delivery.gif")} className="h-80 w-80"/>
    </View>
  )
}

export default OrderPreparingScreen

const styles = StyleSheet.create({})