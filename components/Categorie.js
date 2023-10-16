import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { categories } from "../Constants";

const Categorie = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((catagory, index) => {
          let isActive = catagory.id == activeCategory;
          let btnClass = isActive ? " bg-gray-600" : " bg-gray-200";
          let textClass = isActive
            ? " font-semibold text-gray-800"
            : " text-gray-500";
          return (
            <View key={index} className="flex mr-6 justify-center items-center ">
              <Pressable
                onPress={() => setActiveCategory(catagory.id)}
                className={"p-1 rounded-full shadow" + btnClass}
              >
                <Image
                  styles={{ height: 45, width: 45 }}
                  source={catagory.image}
                />
              </Pressable>
              <Text className={"text-sm " + textClass}>{catagory.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categorie;

const styles = StyleSheet.create({});
