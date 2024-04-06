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

const UserSetting = () => {
  const navigation: any = useNavigation();
  const [activeSetting,setActiveSetting]=useState(0)

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <ScrollView
          style={{
            paddingHorizontal: scale(30),
            paddingTop:verticalScale(20),
            flex: 1,
            backgroundColor: colors.white,
          }}
        >
              <View style={appStyles.rowjustify}>
              <CustomText
            text={"Settings"}
            color={colors.black}
            fontWeight="100"
            size={26}
          />
            

              </View>
              {
                [1,2,3,4,5,6].map((item,index)=>{
                    return(
                        <View
                        style={{
                          ...appStyles.row,
                          marginTop: verticalScale(20),
                        //   marginBottom: verticalScale(10),
            
                        }}
                      >
                        <View style={{ ...appStyles.row, marginRight: "30%" }}>
                          <TouchableOpacity
                          activeOpacity={0.6}
                          onPress={()=>setActiveSetting(index)}
                            style={{
                              ...styles.boxContainer,
                              borderColor: "#C4C4C4",
                              borderWidth: 1,
                              backgroundColor:activeSetting==index?colors.secondary:"transparent"
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
                            size={16}
                          />
                        </View>
            
                        <View style={{ ...appStyles.row, marginRight: "30%" }}>
                          <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={()=>setActiveSetting(index)}
                            style={{
                              ...styles.boxContainer,
                              borderColor: "#C4C4C4",
                              borderWidth: 1,
                              backgroundColor:activeSetting==index?colors.secondary:"transparent"

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
                            size={16}
                          />
                        </View>
                      </View>
                    )
                })
              }


          
          <Spacer height={verticalScale(30)} />
          <CustomText
            text={"Settings"}
            color={colors.black}
            fontWeight="100"
            size={26}
          />
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <View>
            <Spacer height={verticalScale(15)} />

            <CustomText
            text={"Change Password"}
            color={colors.black100}
            fontWeight="100"
            style={{marginBottom:verticalScale(20)}}
            size={16}
          />
           <CustomText
            text={"Change email"}
            color={colors.black100}
            fontWeight="100"
            style={{marginBottom:verticalScale(20)}}
            size={16}
          />
           <CustomText
            text={"Delete Account"}
            color={colors.black100}
            fontWeight="100"
            style={{marginBottom:verticalScale(15)}}
            size={16}
          />

            </View>

            <View>

            <Image
                style={{
                  height: verticalScale(120),
                  width: scale(120),
                  borderRadius:scale(10)
                }}
                source={images.defUser}
                resizeMode="contain"
              />

            </View>

            
          </View>
          <View
                        style={{
                          ...appStyles.row,
                          marginTop: verticalScale(20),
            
                        }}
                      >
                        <View style={{ marginRight: "20%" }}>
                        <CustomText
                            text={"Change Password"}
                            color={colors.grey}
                            fontWeight="100"
                            style={{ marginLeft: scale(10) }}
                            size={16}
                          />
                        
                         
                        </View>
            
                        <View style={{width:"50%",}}>
                            <CustomText
                            text={"Change Password"}
                            color={colors.grey}
                            fontWeight="100"
                            // style={{ marginLeft: scale(10) }}
                            size={16}
                          />
</View>
                        
                      </View>
       
                      <View
                        style={{
                          ...appStyles.row,
                          marginTop: verticalScale(20),
            
                        }}
                      >
                        <View style={{ marginRight: "25%" }}>
                        <CustomText
                            text={"Change email"}
                            color={colors.grey}
                            fontWeight="100"
                            style={{ marginLeft: scale(10) }}
                            size={16}
                          />
                        
                         
                        </View>
            
                        <View style={{width:"50%"}}>
                        <CustomText
                            text={"Change email"}
                            color={colors.grey}
                            fontWeight="100"
                            style={{ marginLeft: scale(10) }}
                            size={16}
                          />
</View>
                          
                      </View>
                        <View
                        style={{
                          ...appStyles.row,
                          marginTop: verticalScale(20),
            
                        }}
                      >
                        <View style={{ marginRight: "25%" }}>
                        <CustomText
                            text={"Delete Account"}
                            color={colors.grey}
                            fontWeight="100"
                            style={{ marginLeft: scale(10) }}
                            size={16}
                          />
                        
                         
                        </View>
                        <View style={{width:"50%"}}>
                        <CustomText
                            text={"Delete Account"}
                            color={colors.grey}
                            fontWeight="100"
                            size={16}
                          />

                        </View>
            
                        
                          
                      </View>

                      <Spacer  height={verticalScale(60)}/>


        

       

            
        

          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default UserSetting;

const styles = StyleSheet.create({
  line: {
    width: "32%",
    height: 3,
    borderRadius: 30,
  },
  boxContainer: {
    width: 40,
    height: 40,
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
