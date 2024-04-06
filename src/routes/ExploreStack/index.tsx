import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GoodDetail from "../../screens/main/GoodDetail";
import Explore from "../../screens/main/Explore";
import UserProfile from "../../screens/main/UserProfile/indx";


const ExploreStack = () => {
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
            <Stack.Screen name={"Explore"} component={Explore} />
      <Stack.Screen name={"GoodDetail"} component={GoodDetail} />
      <Stack.Screen name={"UserProfile"} component={UserProfile} />

    </Stack.Navigator>
  );
};

export default ExploreStack;

const styles = StyleSheet.create({});
