import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { featured } from "../Constants/";
import { themeColor } from "../Theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../Slice/restaurantSlice";
import { removeFromCart, selectCartItems, selectCartTotal } from "../Slice/CartSlice";
import { urlFor } from "../Sanity";

const CartScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectRestaurant)
  const CartItems =useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const [groupItem ,setGroupItem]=useState({})
  const dispatch =useDispatch()
  const deliveryfee=2
  useEffect(()=>{
    const items=CartItems.reduce((group,item)=>{
      if(group[item._id]){
        group[item._id].push(item)

      }else{group[item._id]=[item]}
      return group
    },[])
    setGroupItem(items)

  },[CartItems])
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
      <View
        className="flex-row px-4 items-center"
        style={{ backgroundColor: themeColor.bgColor(0.2) }}
      >
        <Image
          source={require("../assets/images/bikeGuy.png")}
          className="w-20 h-40"
        />
        <Text className="flex-1 pl-4">Delivery in 20-30 min</Text>
        <Pressable>
          <Text className="font-bold" style={{ color: themeColor.text }}>
            {" "}
            Change
          </Text>
        </Pressable>
      </View>
      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {Object.entries(groupItem).map(([key ,items]) => {
          const dish =items[0]
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-sm"
            >
              <Text className="font-bold" style={{ color: themeColor.text }}>
                {items.length}
              </Text>
              <Image className="h-14 w-14 rounded-full" source={{uri:urlFor(dish.image).url()}} />
              <Text className="font-bold flex-1 text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold  text-base">${dish.price}</Text>
              <Pressable
              onPress={()=>dispatch(removeFromCart({id:dish.id}))}
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColor.bgColor(1) }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={"white"}
                />
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
      <View style={{backgroundColor:themeColor.bgColor(0.2)}} className="p-6 px-8 rounded-t-3xl space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-gray-700">SubTotal</Text>
          <Text className="text-gray-700">${cartTotal}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">${deliveryfee}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">${deliveryfee+cartTotal}</Text>
        </View>
        <View>
          <Pressable onPress={()=>navigation.navigate("OrderPreparing")}style={{backgroundColor:themeColor.bgColor(1)}} className="p-3 rounded-full">
            <Text className="text-white text-center font-bold text-lg">Place Order</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
