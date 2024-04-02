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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import CustomSearch from "../../../components/CustomSearch";
import { appStyles } from "../../../utils/AppStyles";
import CustomButton from "../../../components/CustomButton";
import NextContainer from "../../../components/NextContainer";
import NewsCard from "./NewsCard";
import CreationCard from "../../../components/CreationCard";

const Explore = () => {
  const navigation: any = useNavigation();
  const [activeFilter,setActiveFilter]=useState(0)

  return (
    <>
      <View style={{backgroundColor:colors.white,flex:1}}>
        <ImageBackground
          style={{ width: "100%", height: verticalScale(250) ,}}
          source={images.defBackground2}
        >
          <View
            style={{
              flex: 1,
              paddingHorizontal: scale(20),
              paddingTop: verticalScale(20),
            }}
          >
            <View
              style={{
                width: scale(45),
                height: scale(45),
                borderRadius: scale(50),
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={images.profileDefault}
              />
            </View>
            <Spacer height={20} />
            <View style={{flex:1,justifyContent:"space-between"}}>
              <View>
              <CustomText text={"Bonjour Name,"} color={colors.white} size={16} />
            <CustomText
              text={"Find your ...."}
              color={colors.white}
              fontWeight="100"
              size={28}
            />

              </View>
            <CustomSearch />
            <View style={{ ...appStyles.row,alignItems:"flex-end" }}>
              {["Acceuil", "Other", "Other"].map((item, index) => {
                return (
                  <CustomButton
                    text={item}
                    height={37}
                    onPress={()=>setActiveFilter(index)}
                    bgColor={activeFilter==index?colors.secondary:"transparent"}
                    width={scale(65)}
                    borderRadius={1}
                    size={16}
                    style={{
                      marginRight: scale(20),
                      borderTopLeftRadius: scale(10),
                      borderTopRightRadius: scale(10),
                    }}
                 

                    textColor={colors.white}
                  />
                );
              })}
            </View>

            </View>
           
          </View>
        </ImageBackground>
        <View style={{paddingHorizontal:scale(20),paddingTop:verticalScale(20)}}>
          <NextContainer
          />

         



        </View>
        <View >
        <FlatList
              data={[1,2]}
              horizontal
              showsHorizontalScrollIndicator={false}
              // style={{marginRight:10}}
           
              contentContainerStyle={{
                gap: 20,
                paddingHorizontal: 20,
              }}
              renderItem={({ item, index }) => {
                return (
                  <NewsCard/>

                
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />

        </View>

        <View style={{paddingHorizontal:scale(20),paddingVertical:verticalScale(10)}}>
          
          <NextContainer
          txt={"Last Creation"}
          />



         



        </View>
        <FlatList
              data={[1,2]}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              // style={{marginRight:10}}
           
              contentContainerStyle={{
                gap: 20,
               
                paddingHorizontal: 20,
              }}
              renderItem={({ item, index }) => {
                return (
                  <View style={{paddingRight:scale(10)}}>
                                      <CreationCard/>

                    </View>

                
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
        
        {/* <CustomText
          text={"Inscription"}
          color={colors.secondary}
          fontWeight="400"
          // style={{textAlign:"center",marginBottom:verticalScale(20)}}
          size={20}
        /> */}
      </View>
    </>
  );
};

export default Explore;

const styles = StyleSheet.create({
  line: {
    width: "32%",
    height: 3,
    borderRadius: 30,
  },
});
