import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather"
import { themeColor } from "../Theme";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../Sanity";


const ResturantCard = ({ item }) => {
    const navigation=useNavigation()
   
    
    // console.log("Image URL", item.image);
  
    
  return (
    <TouchableWithoutFeedback onPress={()=> navigation.navigate("Resturant",{...item})}>
      <View className="mr-6 bg-white rounded-3xl shadow-lg" style={{shadowColor:themeColor.bgColor(0.2),shadowRadius:7}}>
        <Image className="h-36 w-63 rounded-t-3xl " source={{uri: urlFor(item.image).url()}} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              className="h-4 w-4"
              source={require("../assets/images/fullStar.png")}
            />
            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>
              <Text className="text-gray-700">({item.reviews} review).</Text>
              <Text className="font-semibold">({item?.type?.name})</Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15}/>
            <Text className="text-gray-700 text-xs">Nearby.{item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResturantCard;

const styles = StyleSheet.create({});
