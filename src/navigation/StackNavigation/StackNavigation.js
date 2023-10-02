import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//  -- Import our views --  //
import TabNavigation from "../TabNavigation/TabNavigation";

const Stack = createNativeStackNavigator()

class StackNavigator extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name = 'TabNavigation'
                        component={TabNavigation}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}


export default StackNavigator;