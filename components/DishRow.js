import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { themeColor } from "../Theme";
import * as Icon from "react-native-feather";

const DishRow = ({ item }) => {
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl "
        style={{ height: 100, width: 100 }}
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text>{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">${item.price}</Text>
          <View className="flex-row items-center">
            <Pressable
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColor.bgColor(1) }}
            >
              <Icon.Minus strokeWidth={2} height={20} width={20} stroke={"white"}/>
            </Pressable>
            <Text className="px-3">{2}</Text>
            <Pressable
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColor.bgColor(1) }}
            >
              <Icon.Plus strokeWidth={2} height={20} width={20}  stroke={"white"}/>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;

const styles = StyleSheet.create({});
