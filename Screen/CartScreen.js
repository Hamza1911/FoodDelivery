import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { featured } from "../Constants/";
import { themeColor } from "../Theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const navigation = useNavigation();
  const resturant = featured.restaurants[0];
  return (
    <View className="bg-white flex-1">
      {/*back Button  */}
      <View className="relative py-4 shadow-sm">
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColor.bgColor(1) }}
          className="absolute z-10  rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
        </Pressable>
        <View>
          <Text className="text-center font-bold text-xl ">your Cart</Text>
          <Text className="text-center text-gray-500">{resturant.name}</Text>
        </View>
      </View>
      {/* delivery time */}
      <View className="flex-row px-4 items-center" style={{backgroundColor:themeColor.bgColor(0.2)}}>
     <Image source={require("../assets/images/bikeGuy.png")} className="w-20 h-40"/>
     <Text className="flex-1 pl-4">Delivery in 20-30 min</Text>
     <Pressable><Text className="font-bold" style={{color:themeColor.text}}></Text></Pressable>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
