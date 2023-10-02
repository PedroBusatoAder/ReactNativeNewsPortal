// We will select certain themes of preference in our profile and through stack navigation send the to Home and from there here to do the correct Fetchs!

import React, {Component} from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

//  -- Import our own components --  //
import ArticleViewCardSmall from "./ArticleViewCardSmall";


class ArticleContainerColumn extends Component{
    constructor(props){
        super(props)
        this.state = {
            apiKey: '99b09d9389f14ee59af56079f6655492',
            newsTheme: 'bitcoin',
            apiDataByTheme: ''
        }        
    }

    componentDidMount(){
        fetch(`https://newsapi.org/v2/everything?q=${this.state.newsTheme}&apiKey=${this.state.apiKey}`) // Searches for bitcoin --> Default theme we are setting
            .then( response => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    apiDataByTheme: data.articles.slice(0,10),
                    isLoading: false
                })
                
            })
            .catch(eMessage => {
                console.log('There has been an error with fetch:\n', eMessage)
            })
    }

    render(){
        console.log(this.state.apiDataByTheme)
        return(
            <View style={styles.localNewsContainer}>
                <Text style={styles.newsTheme}>
                    News on {this.state.newsTheme}
                </Text>
                <FlatList
                    data={this.state.apiDataByTheme}
                    keyExtractor={(article, index) => {
                        return index.toString()
                    }}
                    renderItem={(article) => {
                        return <ArticleViewCardSmall articleInfo={article}/>
                    
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    localNewsContainer: {
        flex: 1,
        backgroundColor: 'red'
    },
    newsTheme: {
        fontSize: 15,
        padding: 12
    } 
})

export default ArticleContainerColumn;