import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { themeColor } from "../Theme";

const FeaturedRow = ({title, restaurants, description}) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <Pressable>
            <Text style={{color:themeColor.text}}>See ALL</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});
