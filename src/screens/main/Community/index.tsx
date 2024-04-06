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
  ScrollView,
  TouchableOpacity,
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
import CreationCard from "../../../components/CreationCard";

const Community = () => {
  const navigation: any = useNavigation();
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <>
      <View style={{ backgroundColor: colors.white, flex: 1 }}>
        <ImageBackground
          style={{ width: "100%", height: verticalScale(180) }}
          source={images.communityBackground}
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
            <Spacer height={verticalScale(40)} />
            <View style={{ flex: 1, justifyContent: "space-between" }}>
              <View>
                <CustomText
                  text={"By the community"}
                  color={colors.white}
                  size={16}
                />
                <CustomText
                  text={"For the community"}
                  color={colors.white}
                  fontWeight="100"
                  size={28}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
        <ScrollView
          style={{
            paddingHorizontal: scale(20),
            paddingTop:verticalScale(10),
            flex: 1,
            backgroundColor: colors.white,
          }}
        >
          <CustomText color={colors.black100} size={18} text={"Statistiques"} />
          <View
            style={{
              ...appStyles.rowjustify,
              marginTop: verticalScale(20),
              marginBottom: verticalScale(20),
            }}
          >
            {["Exchanges", "Pionneers", "Exchanges", "Exchanges"].map(
              (item, index) => {
                return (
                  <TouchableOpacity 
                  activeOpacity={0.6}
                  style={{ alignItems: "flex-start",}}>
                    <Image
                      style={{ width: scale(45), height: scale(45) }}
                      source={images.searchImg}
                    />
                    <Spacer height={verticalScale(10)} />

                    <CustomText color={colors.black100} size={14} text={item} />
                  </TouchableOpacity>
                );
              }
            )}
          </View>

          <CustomText
            color={colors.black100}
            style={{ marginTop: verticalScale(20) }}
            size={16}
            text={"App"}
          />

          <CustomText
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque  scelerisque sem odio, ut congue sapien placerat sed. Proin id turpis  vitae enim molestie porttitor. Mauris porttitor pellentesque orci, nec  bibendum dui porttitor vel. Vestibulum et rutrum dolor, vel bibendum  mauris. Nam imperdiet accumsan eros, a ornare magna suscipit nec. Nam  sed augue sapien. Aenean accumsan a nunc vel volutpat. Mauris sit amet  risus eu leo porta posuere. Integer euismod neque vitae mauris  vulputate, sed auctor arcu pellentesque. Nulla semper est nec libero  tincidunt mattis. Duis diam magna, congue in efficitur sed, condimentum  sed tortor. Donec non sem ut quam tempus."
            }
            color={colors.grey}
            style={{ marginLeft: scale(15), marginTop: verticalScale(8) }}
            fontWeight="100"
            size={13}
          />

<CustomButton
          text="Participate"
          width={"55%"}
          borderRadius={12}
          height={43}
          style={{alignSelf:"center",marginVertical:verticalScale(20)}}
          onPress={() => navigation.navigate("BottomTab")}

          // fontWeight={"500"}
          textColor={colors.white}
          // bgColor={colors.white}
       />

<CustomText
            color={colors.black100}
            // style={{ marginTop: verticalScale(10) }}
            size={16}
            text={"App"}
          />

<View
            style={{
              ...appStyles.rowjustify,
              marginTop: verticalScale(20),
              marginBottom: verticalScale(20),
            }}
          >
            {[1,2,3,4].map(
              (item, index) => {
                return (
                  <TouchableOpacity 
                  activeOpacity={0.6}
                  onPress={()=>navigation.navigate("GoodsList")}
                  >
                    <Image
                      style={{ width: scale(60), height: scale(60) }}
                      source={images.apps}
                    />
                    <Spacer height={verticalScale(10)} />

                  </TouchableOpacity>
                );
              }
            )}
          </View>

            
     
        </ScrollView>
      </View>
    </>
  );
};

export default Community;

const styles = StyleSheet.create({
  line: {
    width: "32%",
    height: 3,
    borderRadius: 30,
  },
});
