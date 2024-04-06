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
import { images } from "../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import CustomSearch from "../../../components/CustomSearch";
import { appStyles } from "../../../utils/AppStyles";
import CustomButton from "../../../components/CustomButton";
import NextContainer from "../../../components/NextContainer";
import CreationCard from "../../../components/CreationCard";

const Gestion = () => {
  const navigation: any = useNavigation();
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <>
      <View style={{ backgroundColor: colors.white, flex: 1 }}>
        <ImageBackground
          style={{ width: "100%", height: verticalScale(90) }}
          source={images.defBackground2}
        >
          <View
            style={{
              flex: 1,
              paddingHorizontal: scale(20),
              paddingTop: verticalScale(20),
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: scale(45),
                height: scale(45),
                borderRadius: scale(50),
                overflow: "hidden",
                backgroundColor: "red",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={images.profileDefault}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                marginLeft: scale(10),
                alignSelf: "flex-end",
              }}
            >
              <View style={{ ...appStyles.row, alignItems: "flex-end" }}>
                {["Acceuil", "Goods", "Services"].map((item, index) => {
                  return (
                    <CustomButton
                      text={item}
                      height={35}
                      onPress={() => setActiveFilter(index)}
                      bgColor={
                        activeFilter == index ? colors.secondary : "transparent"
                      }
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
        <ScrollView
          style={{
            paddingHorizontal: scale(20),
            paddingTop: verticalScale(30),
          }}
        >
          <View
            style={{ ...appStyles.rowjustify, marginBottom: verticalScale(20) }}
          >
            <CustomText color={colors.black100} size={23} text={"Annonces"} />

            <View style={appStyles.row}>
              <TouchableOpacity
              onPress={()=>navigation.navigate("GoodService")}
                style={{
                  ...styles.boxContainer,
                  backgroundColor: colors.secondary,
                }}
              >
                <Image
                  style={{ width: scale(30), height: scale(30) }}
                  source={images.plus}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <Spacer width={scale(15)} />
              <TouchableOpacity
                style={{ ...styles.boxContainer, backgroundColor: colors.red }}
              >
                <Image
                  style={{ width: scale(30), height: scale(30) }}
                  source={images.negative}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          showsVerticalScrollIndicator={false}
          style={{paddingBottom:verticalScale(50)}}
          // style={{marginRight:10}}

          contentContainerStyle={{
            gap: 20,

          }}
          renderItem={({ item, index }) => {
            return (
              <View style={{ paddingRight: scale(10) }}>
                <CreationCard
                  img={images.defLaptop}
                  imgWidth={140}
                  imgHeight={90}
                  isRight={true}
                  textSize={13}
                  onPress={()=>navigation.navigate("GoodService",{validate:true})}
                  />
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        </ScrollView>

      
      
      </View>
    </>
  );
};

export default Gestion;

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
