import React, {Component} from "react";
import { View } from "react-native";

// -- We import our own components -- //
import ProfileInformation from "../../components/ProfileInformation";

class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <View>
                <ProfileInformation></ProfileInformation>
            </View>
        )
    }
}

export default UserProfile;