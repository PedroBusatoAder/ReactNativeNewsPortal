//Estoy teniendo problemas con la altura del componente de debajo ya que no se ajusta para contener a todos los botones

import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

// -- Import our own components -- //
import SettingsButton from "./SettingsButton";

// -- Import Icons -- //
import { Entypo, AntDesign } from '@expo/vector-icons';

function ProfileInformation(){
    return(
        <View style={styles.screen}>

            <View style={styles.profileTopContainer}>
                <Image
                    style={styles.profileBackground}
                    source={require('../../assets/images/profileBackground.jpeg')} //Will work as our background
                />

                <View style={styles.profileHeader}>
                    <Text style={styles.profileTitle}>Profile</Text>
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                </View>
                
                <View style={styles.userInformation}>
                    <Image
                        style={styles.profilePic}
                        source={require('../../assets/images/profilePic.avif')}
                    />
                    <View style={styles.userData}>
                        <Text style={styles.userName}>User Name</Text>
                        <TouchableOpacity>
                            <Text>Membership</Text>
                        </TouchableOpacity>    
                    </View>
                </View>
            </View>
            
            <View style={styles.profileBottomContainer}> 

                <View style={styles.accountSettings}>
                    <Text style={styles.settingText}>Account Settings</Text>
                    <SettingsButton icon='user' title='Your Profile'/>
                </View>
                
                <View style={styles.appSettings}>
                    <Text style={styles.settingText}>App Settings</Text>
                    <SettingsButton icon='user' title='Dark Mode'/>
                    <SettingsButton icon='user' title='Change Language'/>
                    <SettingsButton icon='user' title='Change Password'/>
                    <SettingsButton icon='user' title='Help'/>
                </View>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: 1000 //Me exigio agregar una altura al contentedor que contiene todo el contenido de la screen dentro --> No funciono con 100%
    },
    profileTopContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderRadius: 30,
        height: 220,
        zIndex: 1
    },  

    profileBackground: {
        height: 250,
        width: '100%',
        position: 'absolute',
        borderRadius: 20
    },

    profileHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: 50,
        padding: 20,
    },

    profileTitle: {
        fontSize: 20
    },  

    userInformation: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 160,
        padding: 20,
        borderRadius: 4
    },

    profilePic:{
        height: 100,
        width: 100,
        borderRadius: '50%'
    },

    userData: {
        padding: 10
    },
    
    userName: {
        fontSize: 30
    },

    profileBottomContainer: {
        // backgroundColor: '#f0f0f0',
        backgroundColor: 'yellow',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        height: '100%'
    },

    accountSettings: {
        backgroundColor: 'red',
        height: 85
    },

    appSettings: {
        backgroundColor: 'red',
        height: 80,
        marginTop: 10
    },

    settingText: {
        fontSize: 20,
        height: '25%'
    }
})

export default ProfileInformation;