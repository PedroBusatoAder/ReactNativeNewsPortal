//Tengo que solucionar como hacer que los textos de los botones se alineen con los textos de los botones de arriba, uno debajo del otro centrados

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// -- Import Icons -- //
import { Entypo, AntDesign } from '@expo/vector-icons';

function SettingsButton(props){
    return(
        <View style={styles.settingButton}>
            <View style={styles.iconName}>
                <AntDesign name={props.icon} size={24} color="orange" />
                <TouchableOpacity style={styles.textName}>
                    <Text>{props.title}</Text>                                   
                </TouchableOpacity>    
            </View>
            <Entypo name="chevron-right" size={24} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    settingButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 7,
        alignItems: 'center',
        height: '70%'
    },

    iconName: {
        backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '60%'
    },

    textName: {
        backgroundColor: 'green',
        position: 'relative',
        left: 50
    }
})

export default SettingsButton;