import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Calculadora } from '../screens/Calculadora';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: true }}>
                <Screen 
                    name="Home"
                    component={ Calculadora }
                />
            </Navigator>
        </NavigationContainer>
    )
}