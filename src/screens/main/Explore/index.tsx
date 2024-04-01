import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";

const Explore = () => {
  const navigation: any = useNavigation();

  return (
    <>
    <SafeAreaView>
    <CustomText
        text={"Inscription"}
        color={colors.secondary}
        fontWeight="400"
        // style={{textAlign:"center",marginBottom:verticalScale(20)}}
        size={20}
        />
      
    </SafeAreaView>
    </>

   
  );
};

export default Explore;

const  styles=StyleSheet.create({
  line:{
    width:"32%",
    height:3,
    borderRadius:30
    
  }
  
})
