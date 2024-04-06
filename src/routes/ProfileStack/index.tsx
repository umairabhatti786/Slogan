import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GoodDetail from "../../screens/main/GoodDetail";
import Explore from "../../screens/main/Explore";
import UserProfile from "../../screens/main/UserProfile/indx";
import UserSetting from "../../screens/main/UserSetting";


const ProfileStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
      }}
    >
            <Stack.Screen name={"Profile"} component={UserProfile} />
      <Stack.Screen name={"UserSetting"} component={UserSetting} />

    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
