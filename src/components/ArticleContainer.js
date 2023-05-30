// We should make each fetch inside the container itself, not in the home seciton
// Each container will make use of the stateless components 'ArticleViewCard'
// Though saved on the Stateless folder for components it will have a state!

import React, {Component} from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

//  -- Import our own components --  //
import ArticleViewCard from "./ArticleViewCard";

class ArticleContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        console.log(this.props.articles)
        return(
            <View style={styles.localNewsContainer}>
                <Text> Don't skip the lastest headlines from your country </Text>
                <FlatList
                    data={this.props.articles}
                    keyExtractor={(article, index) => {
                        return index.toString()
                    }}
                    renderItem={ (article) => {     
                        if (article.item.urlToImage){                                  //There are some articles with no image, which we do not want to display
                            return <ArticleViewCard articleInfo = {article} />}
                        }
                    }
                    horizontal='true'
                />    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    localNewsContainer: {
        backgroundColor: '#F7F3E3',
        margin: 5,
    }
})
export default ArticleContainer;