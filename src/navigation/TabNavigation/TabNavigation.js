import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//  -- Import our views --  //
import Home from "../../screens/Home/Home";
import UserProfile from "../../screens/UserProfile/UserProfile";

const Tab = createBottomTabNavigator();

// La teoria dice que como TabNavigator es la navegacion hija, no deberia agregar NavigationContainer, pero si no lo hago, no funciona la aplicacion! Por el momento lo dejamos

function TabNavigation(){
    return(
        <NavigationContainer> 
            <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
                <Tab.Screen name='Home' component = {Home} options={{headerShown: false}}/>
                <Tab.Screen name='UserProfile' component={UserProfile} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation;
