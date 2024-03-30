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
} from "react-native";
import { appStyles } from "../../../utils/AppStyles";

import { useNavigation } from "@react-navigation/native";

import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/colors";

const OnBoarding = () => {
  const navigation: any = useNavigation();

  return (
    <ImageBackground 
    source={images.carback}
    style={appStyles.main}>
      <View style={{ flex: 1, alignItems: "center", padding: scale(20) }}>
        <Spacer height={windowHeight/8} />
        <Image style={{ width: windowWidth/2.5, height: windowHeight/3.5 }}
        resizeMode="contain"
         source={images.logo} />
        <Spacer height={windowHeight/4} />

        <CustomButton
          text="S’inscrire"
          width={"100%"}
          onPress={() => navigation.navigate("Signup")}

          // fontWeight={"500"}
          textColor={colors.black}
          bgColor={colors.white}
        />
        <Spacer height={verticalScale(15)} />
        
      </View>
    </ImageBackground>
  );
};

export default OnBoarding;
