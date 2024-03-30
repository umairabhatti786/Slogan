import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


const SearchStack = () => {
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
      {/* <Stack.Screen name={"SearchScreen"} component={SearchScreen} />
      <Stack.Screen name={"OthersProfile"} component={OthersProfile} /> */}
    </Stack.Navigator>
  );
};

export default SearchStack;

const styles = StyleSheet.create({});
