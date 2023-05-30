//Thinking that each of the buttons in Account and App settings can be turned into a component themselves

import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

// -- Import Icons -- //
import { Entypo, AntDesign } from '@expo/vector-icons';

function ProfileInformation(){
    return(
        <View>
            
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
                    <View style={styles.settingButton}>
                        <AntDesign name="user" size={24} color="orange" />
                        <TouchableOpacity>
                            <Text>Your Profile</Text>                                   
                        </TouchableOpacity>
                        <Entypo name="chevron-right" size={24} color="black" />
                    </View>
                </View>
                
                <View style={styles.appSettings}>
                    <Text style={styles.settingText}>App Settings</Text>
                    <View style={styles.settingButton}>
                        <AntDesign name="user" size={24} color="orange" />
                        <TouchableOpacity>
                            <Text>Your Profile</Text>                                   
                        </TouchableOpacity>
                        <Entypo name="chevron-right" size={24} color="black" />
                    </View>
                </View>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
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
    },

    accountSettings: {
        backgroundColor: 'red',
        height: 85
    },

    appSettings: {
        backgroundColor: 'red',
        height: 85
    },

    settingText: {
        fontSize: 20,
        height: '25%'
    },
    settingButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '70%'
    }
})

export default ProfileInformation;