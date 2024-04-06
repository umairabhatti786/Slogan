import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GoodDetail from "../../screens/main/GoodDetail";
import Explore from "../../screens/main/Explore";
import UserProfile from "../../screens/main/UserProfile/indx";
import UserSetting from "../../screens/main/UserSetting";
import Gestion from "../../screens/main/Gestion";
import GoodService from "../../screens/main/GoodService";


const GestionStack = () => {
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
            <Stack.Screen name={"Gestion"} component={Gestion} />
      <Stack.Screen name={"GoodService"} component={GoodService} />

    </Stack.Navigator>
  );
};

export default GestionStack;

const styles = StyleSheet.create({});
