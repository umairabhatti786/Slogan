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
  StatusBar,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { appStyles } from "../../../utils/AppStyles";

import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/colors";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "../../../components/CustomText";
import CustomTextInput from "../../../components/CustomTextInput";

const Signup = () => {
  const navigation: any = useNavigation();

  const [values,setValues]=useState({
    pseudo:"",
    email:"",
    password:"",
    confirmPassword:""


  })

  return (
    <>
       

       <StatusBar
        animated={true}
        backgroundColor="#212D3D"
       
      />
     <LinearGradient 
    start={{x: 0, y: 0}} end={{x: 0, y: 0.9}} colors={['#022726', '#022726', '#212D3D']}
    style={appStyles.main}>
           <ScrollView
                  style={{ flex: 1 }}
          >

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
        <View style={{flex:1,}}>  

        <CustomTextInput
              label="Pseudo"
              value={values.pseudo}
              onChangeText={(txt: string) => {
                setValues({ ...values, pseudo: txt });
              }}
              placeholder=""
            />
            <Spacer height={verticalScale(15)}/>
             <CustomTextInput
              label="Email"
              value={values.email}
              onChangeText={(txt: string) => {
                setValues({ ...values, email: txt });
              }}
              placeholder=""
            />
              <Spacer height={verticalScale(15)}/>
             <CustomTextInput
              label="Password"
              value={values.password}
              onChangeText={(txt: string) => {
                setValues({ ...values, password: txt });
              }}
              placeholder=""
            />
                   <Spacer height={verticalScale(15)}/>
             <CustomTextInput
              label="Confirm your Password"
              value={values.confirmPassword}
              onChangeText={(txt: string) => {
                setValues({ ...values, confirmPassword: txt });
              }}
              placeholder=""
            />

        </View>

        <Spacer height={verticalScale(60)}/>
      

      

        <CustomButton
          text="S’inscrire"
          width={"100%"}
          onPress={() => navigation.navigate("BottomTab")}

          // fontWeight={"500"}
          textColor={colors.white}
          // bgColor={colors.white}
        />
        <Spacer height={verticalScale(15)} />
        
      </SafeAreaView>
      </ScrollView>

    </LinearGradient>

 </>
   
  );
};

export default Signup;

const  styles=StyleSheet.create({
  line:{
    width:"32%",
    height:3,
    borderRadius:30
    
  }
  
})
