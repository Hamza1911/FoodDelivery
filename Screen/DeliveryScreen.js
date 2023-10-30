import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { featured } from "../Constants";
import { themeColor } from "../Theme";
import * as Icon from "react-native-feather"
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../Slice/restaurantSlice";
import { emptyCart } from "../Slice/CartSlice";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const dispatch=useDispatch()
  const cancelOrder=()=>{
    navigation.navigate("Home");
    dispatch(emptyCart())
  }
  return (
    <View className="flex-1">
      {/* MapView */}
      <MapView
        initialRegion={{
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColor.bgColor(1)}
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Time{" "}
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              {" "}
              20 -30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700  font-semibold">
              Your Order is own its way
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={require("../assets/images/bikeGuy2.gif")}
          />
        </View>
        <View
          style={{ backgroundColor: themeColor.bgColor(0.8) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View
            className="p-1 rounded-full "
            style={{ backgroundColor: "rgba(255,255,255,0.4" }}
          >
            <Image
              className="h-16 w-16 rounded-full"
              source={require("../assets/images/deliveryGuy.png")}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Hamza Javed</Text>
            <Text className="font-semibold text-white">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <Pressable className="bg-white p-2 rounded-full">
                <Icon.Phone stroke={themeColor.bgColor(1)} fill={themeColor.bgColor(1)}/>
            </Pressable>
            <Pressable onPress={cancelOrder} className="bg-white p-2 rounded-full">
                <Icon.X stroke={"red"} strokeWidth={4}/>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({});
