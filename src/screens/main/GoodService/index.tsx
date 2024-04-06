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
  Pressable,
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
import GoodServiceModal from "./GoodServiceModal";

const GoodService = ({route}:any) => {
  const navigation: any = useNavigation();
  const [modalVisible,setModalVisible]=useState(false)
  const validate=route?.params?.validate

  const EditMenu = ({ txt, img,onEdit }: any) => {
    return (
      <View style={{ ...appStyles.row, marginBottom: verticalScale(10) }}>

        <Pressable
        onPress={onEdit}
        >
        <Image
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
          source={images.edit}
        />

        </Pressable>
        
        <Spacer width={scale(10)} />

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
            source={img || images.time}
          />
        </TouchableOpacity>
        <CustomText
          text={txt || "Select Lieu"}
          color={colors.grey}
          fontWeight="100"
          style={{ marginLeft: scale(10) }}
          size={18}
        />
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <ImageSlider
        validate={validate}
         noShowUplaod={true} isEditGood={true} />
        <ScrollView
          style={{
            paddingHorizontal: scale(20),
            flex: 1,
            backgroundColor: colors.white,
          }}
        >
          <View style={appStyles.row}>
            <CustomText
              text={"Title"}
              color={colors.black}
              fontWeight="100"
              size={22}
            />
            <Spacer width={scale(50)} />
            <Image
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
              source={images.edit}
            />
          </View>
          <Spacer height={scale(20)} />

          <EditMenu
          onEdit={()=>{
            if(!validate){
                setModalVisible(true)

            }

          }}
           txt={"Select Lieu"} img={images.time} />
          <EditMenu txt={"Discussion"} img={images.Discussion} />
          <EditMenu txt={"Select Type"} img={images.info} />
          <View style={{ ...appStyles.row, marginBottom: verticalScale(10) }}>
            <CustomText
              text={"Description"}
              color={colors.black}
              fontWeight="100"
              style={{ marginLeft: scale(10) }}
              size={16}
            />
            <Spacer width={scale(10)} />

            <Image
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
              source={images.edit}
            />
          </View>
          <View style={{ ...appStyles.row, marginBottom: verticalScale(10) }}>
            <CustomText
              text={"DESCRIPTION ........"}
              color={colors.grey}
              fontWeight="100"
              style={{ marginLeft: scale(10) }}
              size={16}
            />
            <Spacer width={scale(15)} />

            <Image
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
              source={images.edit}
            />
          </View>


          <Spacer height={verticalScale(20)} />
          <CustomText
            text={   !validate?"Select Price":"10  dollars"}
            color={colors.green}
            fontWeight="600"
            style={{ textAlign: "center" }}
            size={30}
          />
                    <Spacer height={verticalScale(20)} />

        </ScrollView>
      </SafeAreaView>
      <GoodServiceModal
      setModalVisible={setModalVisible}
      isModalVisible={modalVisible}
      
      />
    </>
  );
};

export default GoodService;

const styles = StyleSheet.create({
  line: {
    width: "32%",
    height: 3,
    borderRadius: 30,
  },
  boxContainer: {
    width: 38,
    height: 38,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
