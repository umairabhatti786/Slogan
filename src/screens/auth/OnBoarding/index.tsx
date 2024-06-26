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
import { appStyles } from "../../../utils/AppStyles";

import { useNavigation } from "@react-navigation/native";

import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/colors";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "../../../components/CustomText";

const OnBoarding = () => {
  const navigation: any = useNavigation();

  return (
    <>
       <StatusBar
        animated={true}
        backgroundColor="#212D3D"
       
      />
     <LinearGradient 
    start={{x: 0, y: 0}} end={{x: 0, y: 0.9}} colors={['#022726', '#022726', '#212D3D']}
    style={appStyles.main}>
      <SafeAreaView style={{ flex: 1, padding: scale(20) }}>
        <Spacer height={verticalScale(10)} />
        <View style={appStyles.rowjustify}>
          <View style={{...styles.line,backgroundColor:colors.primary}}/>
          <View style={{...styles.line,backgroundColor:colors.secondary}}/>
          <View style={{...styles.line,backgroundColor:colors.primary}}/>


        </View>
        <Spacer height={verticalScale(10)} />


        <CustomText
        text={"App"}
        color={colors.white}
        size={60}
        />
          <CustomText
        text={"Slogan"}
        color={colors.secondary}
        fontWeight="100"
        size={30}
        />
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>  

        <Image style={{ width: windowWidth/2, height: windowHeight/3,alignSelf:"center" }}
        resizeMode="contain"
         source={images.house} />

        </View>
        <CustomText
        text={"Inscription"}
        color={colors.secondary}
        fontWeight="400"
        style={{textAlign:"center",marginBottom:verticalScale(20)}}
        size={20}
        />

      

        <CustomButton
          text="S’inscrire"
          width={"100%"}
          onPress={() => navigation.navigate("Signup")}

          // fontWeight={"500"}
          textColor={colors.white}
          // bgColor={colors.white}
        />
        <Spacer height={verticalScale(15)} />
        
      </SafeAreaView>
    </LinearGradient>
 </>
   
  );
};

export default OnBoarding;

const  styles=StyleSheet.create({
  line:{
    width:"32%",
    height:3,
    borderRadius:30
    
  }
  
})
