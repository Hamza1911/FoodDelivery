import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { themeColor } from "../Theme";
import ResturantCard from "./ResturantCard";

const FeaturedRow = ({ title, restaurants, description }) => {

  
 
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <Pressable>
          <Text style={{ color: themeColor.text }}>See ALL</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible py-5"
      >
        {restaurants.map((restaurant ,index)=>{
          return(
            <ResturantCard item={restaurant} key={index}/>
          )
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});
