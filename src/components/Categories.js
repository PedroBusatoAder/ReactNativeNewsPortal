import React, {Component} from "react";
import { View,Text, FlatList, TouchableOpacity, StyleSheet} from "react-native";
// import {useFonts} from "expo-font";


  class Categories extends Component{
    constructor(){
        super()
        this.state = {
            categories: ['All News', 'Sports', 'Bitcoin', 'Apple', 'Nvidia']
        }
    }
    
    render(){
        return(
            <View style={styles.CategoriesContainer}>
                <FlatList
                    data={this.state.categories}
                    keyExtractor={(category, index) => {
                        return index.toString()
                    }}
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity style={styles.Category}>
                                <Text style={styles.CategoryName}>{item}</Text>
                            </TouchableOpacity>
                        ) 
                    }}
                    horizontal = 'true'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    CategoriesContainer: {
        height: 50,
        backgroundColor: 'yellow'
    },
    Category: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        width: 150,
        backgroundColor: 'red',        
    },
    CategoryName: {
        fontSize: 30,
    }
})

export default Categories