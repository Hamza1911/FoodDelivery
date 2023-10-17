import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { themeColor } from "../Theme";
import { useNavigation } from "@react-navigation/native";

const CartIcon = () => {
    const navigation =useNavigation()
  return (
    <View className="absolute bottom-5 w-full z-50">
      <Pressable
      onPress={()=>navigation.navigate("Cart")}
        style={{ backgroundColor: themeColor.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="font-extrabold text-white text-lg">4</Text>
        </View>
        <Text className="font-extrabold flex-1 text-center text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold  text-white text-lg">
          ${23}
        </Text>
      </Pressable>
    </View>
  );
};

export default CartIcon;

const styles = StyleSheet.create({});
