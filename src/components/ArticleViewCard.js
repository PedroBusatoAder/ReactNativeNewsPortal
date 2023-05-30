import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

// -- Import Icons -- //
import { Feather } from "@expo/vector-icons";

function ArticleViewCard(props){
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
            <TouchableOpacity style={styles.bookmarkIcon}>
                <Feather size={25} name="bookmark"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    newsContainer: {
        position: 'relative',
        height: 400,
        width: 280,
        borderRadius: '4%',
        margin: 10,
        padding: 0
    },
    titleArticle: {
        position: 'absolute',
        top: 230,
        fontFamily: 'Verdana',
        fontSize: 20,
        color: 'white',
        padding: 10,
        textAlign: 'justify',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    imageArticle:{
        height: '100%',
        borderRadius: '4%',

    },
    bookmarkIcon:{
        position: 'absolute',
        borderRadius: '50%',
        top: 20,
        right: 20,
        padding: 3,
        backgroundColor: '#7DD8E4'
    }
})

export default ArticleViewCard;