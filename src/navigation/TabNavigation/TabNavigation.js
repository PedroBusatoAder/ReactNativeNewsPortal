import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


//  -- Import our views --  //
import Home from "../../screens/Home/Home";
import UserProfile from "../../screens/UserProfile/UserProfile";


const Tab = createBottomTabNavigator();

function TabNavigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
                <Tab.Screen name='UserProfile' component={UserProfile} options={{headerShown: false}}/>
                <Tab.Screen name='Home' component = {Home} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )

}


export default TabNavigation;
