import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "../../screens/auth/OnBoarding";


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












    </Stack.Navigator>
  );
};
export default AppStack;
