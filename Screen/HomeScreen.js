import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColor } from "../Theme";
import Categorie from "../components/Categorie";
import { featured } from "../Constants";
import FeaturedRow from "../components/FeaturedRow";
import { getFeaturedResturants } from "../api";

const HomeScreen = () => {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);
  useEffect(() => {
    getFeaturedResturants().then((data) => {
    setFeaturedRestaurants(data);   
     });
    
  }, []);
 
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-3 ">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Resturants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text className="text-gray-600"> New York ,NYC</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColor.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>
      {/* Main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* catagories */}
        <Categorie />
        {/* featured */}
        <View className="mt-5">
          {featuredRestaurants?.map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.name}
                restaurants={item.restaurants}
                description={item.description}
                
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
