import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Platform, Pressable, StyleSheet, View } from "react-native";

import { images } from "../../assets/images";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import Explore from "../../screens/main/Explore";
import Community from "../../screens/main/Community";
import Profile from "../../screens/main/Profile";
import { colors } from "../../utils/colors";
import CustomText from "../../components/CustomText";
import ExploreStack from "../ExploreStack";
import UserProfile from "../../screens/main/UserProfile/indx";
import ProfileStack from "../ProfileStack";
import Gestion from "../../screens/main/Gestion";
import GestionStack from "../GestionStack";
import CommunityStack from "../CommunityStack";

const BottomTab = ({ navigation }: any) => {
  const Bottom = createBottomTabNavigator();

  // useEffect()

  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,

        // tabBarColor: ({focused, size, color}) => {},
        // tabBarStyle:()=>{innerHeight:1000},
        tabBarStyle: {
          backgroundColor: colors.primary,
          justifyContent: "center",
          alignItems: "center",
          borderTopWidth: -1,
          display: "flex",
          paddingTop: 8,
          height: 75,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // display: route.name === "Home" ? "none" : "flex",
        },
        headerShown: false,
      })}

    >
      <Bottom.Screen
        name="Explore"
        component={ExploreStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                }}
              >
                <Image
                  source={images.search}
                  style={{ height: 20, width: 20, tintColor: colors.secondary }}
                  resizeMode="contain"
                />
                <CustomText
                  text={"Explore"}
                  color={focused ? colors.secondary : colors.grey100}
                  fontWeight="100"
                  size={12}
                />
              </View>
            );
          },
        }}
      />

      <Bottom.Screen
        name="CommunityStack"
        component={CommunityStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                }}
              >
                <Image
                  source={images.watchlist}
                  style={{ height: 20, width: 20, tintColor: colors.secondary }}
                  resizeMode="contain"
                />
                <CustomText
                  text={"Community"}
                  color={focused ? colors.secondary : colors.grey100}
                  fontWeight="100"
                  size={12}
                />
              </View>
            );
          },
        }}
      />
      <Bottom.Screen
        name="GestionStack"
        // component={AddStatus}
        component={GestionStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                }}
              >
                <Image
                  source={images.watchlist}
                  style={{ height: 20, width: 20, tintColor: colors.secondary }}
                  resizeMode="contain"
                />
                <CustomText
                  text={"Gestion"}
                  color={focused ? colors.secondary : colors.grey100}
                  fontWeight="100"
                  size={12}
                />
              </View>
            );
          },
        }}
      />

      <Bottom.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                }}
              >
                <Image
                  source={images.user}
                  style={{ height: 20, width: 20, tintColor: colors.secondary }}
                  resizeMode="contain"
                />
                <CustomText
                  text={"Profil"}
                  color={focused ? colors.secondary : colors.grey100}
                  fontWeight="100"
                  size={12}
                />
              </View>
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};
export default BottomTab;

const style = StyleSheet.create({
  itemStyle: {
    width: "100%",
    height: Platform.OS === "ios" ? 65 : 75,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    gap: 7,
  },
  text: {
    color: colors.white,
  },
});
