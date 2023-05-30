import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";


function ArticleViewCardSmall(props){
    return(
        <View style={styles.newsContainer}>
            <Image
                style={styles.imageArticle}
                source={{uri:props.articleInfo.item.urlToImage}}
                resizeMode="cover"
            />

            <Text style={styles.titleArticle}>
                {props.articleInfo.item.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    newsContainer: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 2,
        height: 200,
        width: '50%'
    },
    imageArticle: {
        height: 100,
        width: '70%',
        borderRadius: '7%'
    },
    titleArticle: {
        width: '70%'
    }
})

export default ArticleViewCardSmall;