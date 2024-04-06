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
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import ImageSlider from "../../../components/ImageSlider";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import CustomButton from "../../../components/CustomButton";

const GoodDetail = () => {
  const navigation: any = useNavigation();

  return (
    <>
      <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
        <ImageSlider />
        <ScrollView style={{ paddingHorizontal: scale(20),flex:1,backgroundColor:colors.white }}>
          <CustomText
            text={"Good Name"}
            color={colors.black}
            fontWeight="100"
            size={26}
          />

          <View
            style={{
              ...appStyles.row,
              marginHorizontal: scale(20),
              marginVertical: verticalScale(10),
            }}
          >
            <View style={{ ...appStyles.row, marginRight: "30%" }}>
              <TouchableOpacity
              activeOpacity={0.6}
                style={{
                  ...styles.boxContainer,
                  borderColor: "#C4C4C4",
                  borderWidth: 1,
                }}
              >
                <Image
                  style={{ width: scale(20), height: scale(20) }}
                  source={images.Lieu}
                />
              </TouchableOpacity>
              <CustomText
                text={"Lieu"}
                color={colors.grey}
                fontWeight="100"
                style={{ marginLeft: scale(10) }}
                size={18}
              />
            </View>

            <View style={{ ...appStyles.row, marginRight: "30%" }}>
              <TouchableOpacity
                style={{
                  ...styles.boxContainer,
                  borderColor: "#C4C4C4",
                  borderWidth: 1,
                }}
              >
                <Image
                  style={{ width: scale(20), height: scale(20) }}
                  source={images.Discussion}
                />
              </TouchableOpacity>
              <CustomText
                text={"Discussion"}
                color={colors.grey}
                fontWeight="100"
                style={{ marginLeft: scale(10) }}
                size={18}
              />
            </View>
          </View>
          <Spacer height={verticalScale(10)}/>

          <CustomText
            text={"Description"}
            color={colors.black}
            fontWeight="100"
            // style={{margin}}
            size={18}
          />
           <CustomText
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque  scelerisque sem odio, ut congue sapien placerat sed. Proin id turpis  vitae enim molestie porttitor. Mauris porttitor pellentesque orci, nec  bibendum dui porttitor vel. Vestibulum et rutrum dolor, vel bibendum  mauris. Nam imperdiet accumsan eros, a ornare magna suscipit nec. Nam  sed augue sapien. Aenean accumsan a nunc vel volutpat. Mauris sit amet  risus eu leo porta posuere. Integer euismod neque vi.   See More..."}
            color={colors.grey}
            fontWeight="100"
            size={13}
          />

          <TouchableOpacity 
          activeOpacity={0.6}
          onPress={()=>navigation.navigate("UserProfile")}
          style={{...appStyles.rowjustify,borderRadius:scale(10),overflow:"hidden",backgroundColor:"#EEF0F2",height:verticalScale(65),marginVertical:verticalScale(15)}}>

            <View style={appStyles.row}>
            <Image
            style={{height:verticalScale(65),width:scale(70),}}
            source={images.defUser}
            />


          <View style={{marginLeft:scale(15)}}>
          <CustomText
            text={"Propriétaire"}
            color={colors.grey}
            fontWeight="100"
            // style={{margin}}
            size={16}
          />
          <Spacer height={verticalScale(5)}/>
           <CustomText
            text={"Name S.DF"}
            color={colors.black}
            fontWeight="100"
            // style={{margin}}
            size={18}
          />

          </View>

            </View>

            <View style={{...appStyles.row,marginRight:scale(20),marginTop:verticalScale(20)}}>
            <Image
            style={{height:verticalScale(15),width:scale(15),}}
            source={images.star}
            resizeMode="contain"
            />
          <Spacer width={verticalScale(5)}/>


          <CustomText
            text={"4.1"}
            color={colors.black}
            fontWeight="100"
            // style={{margin}}
            size={16}
          />
          <Spacer width={verticalScale(5)}/>
           <CustomText
            text={"(35)"}
            color={colors.grey}
            fontWeight="100"
            // style={{margin}}
            size={18}
          />


            </View>
           




          </TouchableOpacity>

          <View   style={{...appStyles.row,marginBottom:verticalScale(20)}}>

          <CustomText
            text={"10  MONEY"}
            color={colors.green}
            fontWeight="600"
            // style={{margin}}
            size={30}
          />
          <Spacer width={scale(20)}/>

        <CustomButton
          text="Contacter"
          width={"55%"}
          borderRadius={12}
          onPress={() => navigation.navigate("BottomTab")}

          // fontWeight={"500"}
          textColor={colors.white}
          // bgColor={colors.white}
        >
             <Image
            style={{height:verticalScale(15),width:scale(25),marginLeft:scale(20)}}
            source={images.next}
            resizeMode="contain"
            />
          </CustomButton>

          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default GoodDetail;

const styles = StyleSheet.create({
  line: {
    width: "32%",
    height: 3,
    borderRadius: 30,
  },
  boxContainer: {
    width: 45,
    height: 45,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
});
