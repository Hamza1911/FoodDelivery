import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { startTransition, useEffect } from "react";
import { themeColor } from "../Theme";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, removeFromCart, selectCartItemsByID } from "../Slice/CartSlice";
import { urlFor } from "../Sanity";

const DishRow = ({ item }) => {
  const dispatch =useDispatch()
  const totalItems =useSelector(state=>selectCartItemsByID(state,item._id))
  const handleDecrease=()=>{
    dispatch(removeFromCart({id: item._id}))

  }
  const handleIncrease=()=>{
 dispatch(addtoCart({...item}))
  }

  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl "
        style={{ height: 100, width: 100 }}
        source={{uri:urlFor(item.image).url()}}
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
            onPress={handleDecrease}
            disabled={!totalItems.length}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColor.bgColor(1) }}
            >
              <Icon.Minus strokeWidth={2} height={20} width={20} stroke={"white"}/>
            </Pressable>
            <Text className="px-3">{totalItems.length}  </Text>
            <Pressable
            onPress={handleIncrease}
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
