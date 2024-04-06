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
import { windowWidth } from "../../../utils/Dimensions";

const UserProfile = () => {
  const navigation: any = useNavigation();

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <View  style={{paddingBottom:verticalScale(30)}}>
        <Image
          style={{
            width: windowWidth,
            // alignSelf:"center",
            height: verticalScale(280),
            backgroundColor: "#f1f1f1",
          }}
          resizeMode="cover"
          source={images.userProfile}
        />

<TouchableOpacity
          // onPress={handleHeartPress}
          style={{
            ...styles.uploadBtn,

            backgroundColor: colors.secondary,
            position: "absolute",
            bottom: 10,
            right: scale(40),
          }}
        >
          <Image
            style={{ width: 22, height: 22 }}
            resizeMode="contain"
            source={images.upload}
          />
        </TouchableOpacity>

        </View>
       
        <ScrollView
          style={{
            paddingHorizontal: scale(30),
            flex: 1,
            backgroundColor: colors.white,
          }}
        >
            <View style={{flex:1,}}>
              <View style={appStyles.rowjustify}>
              <CustomText
            text={"Good Name"}
            color={colors.black}
            fontWeight="100"
            size={26}
          />
             <View style={{...appStyles.row,marginTop:verticalScale(20)}}>
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

              </View>


            <View
            style={{
              ...appStyles.row,
              marginHorizontal: scale(20),
              marginTop: verticalScale(20),
              marginBottom: verticalScale(10),

            }}
          >
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
          <Spacer height={verticalScale(10)} />

          <CustomText
            text={"Description"}
            color={colors.black}
            fontWeight="100"
            // style={{margin}}
            size={18}
          />
          <CustomText
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque  scelerisque sem odio, ut congue sapien placerat sed. Proin id turpis  vitae enim molestie porttitor. Mauris porttitor pellentesque orci, nec  bibendum dui porttitor vel. Vestibulum et rutrum dolor, vel bibendum  mauris. Nam imperdiet accumsan eros, a ornare magna suscipit nec. Nam  sed augue sapien. Aenean accumsan a nunc vel volutpat. Mauris sit amet  risus eu leo porta posuere. Integer euismod neque vi.   See More..."
            }
            color={colors.grey}
            fontWeight="100"
            size={13}
          />

            </View>
            
        

          <View
            style={{
              ...appStyles.row,
              marginVertical: verticalScale(20),
              alignSelf: "center",
            }}
          >
            <CustomButton
              text="Contacter"
              width={"55%"}
              onPress={() => navigation.navigate("UserSetting")}
              // fontWeight={"500"}
              textColor={colors.white}
              // bgColor={colors.white}
            >
              <Image
                style={{
                  height: verticalScale(15),
                  width: scale(25),
                  marginLeft: scale(20),
                }}
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

export default UserProfile;

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
  uploadBtn: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
