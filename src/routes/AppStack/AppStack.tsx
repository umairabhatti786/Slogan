import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "../../screens/auth/OnBoarding";
import Signup from "../../screens/auth/Signup";
import BottomTab from "../BottomTabs";


const AppStack = () => {
  const Stack = createStackNavigator();
  const [splashState, setSplashState] = useState(true);



  return (
    <Stack.Navigator
    //  screenOptions={{ headerShown: false }
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
            
            <Stack.Screen name={"OnBoarding"} component={OnBoarding} />
            <Stack.Screen name={"Signup"} component={Signup} />
            <Stack.Screen name={"BottomTab"} component={BottomTab} />













    </Stack.Navigator>
  );
};
export default AppStack;
