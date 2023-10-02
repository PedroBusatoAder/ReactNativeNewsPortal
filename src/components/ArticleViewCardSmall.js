import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";

function ArticleViewCardSmall(props){
    return(
        <View style={styles.newsContainer}>
            <View style={styles.imageColumn}>
                <Image
                    style={styles.imageArticle}
                    source={{uri:props.articleInfo.item.urlToImage}}
                    resizeMode="cover"
                />
            </View>
            
            <View style={styles.textColumn}>
                <Text style={styles.titleArticle}>
                    {props.articleInfo.item.title}
                </Text>
                <View style={styles.sourceDate}>
                    <Text style={styles.source}>
                        {props.articleInfo.item.source.name}
                    </Text>
                    <Text style={styles.date}>
                        {moment(props.articleInfo.item.publishedAt).format('L')}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    newsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 2,
        paddingLeft: 10,
        height: 130,
        backgroundColor: 'yellow'
    },
    imageColumn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '40%',
        backgroundColor: 'cyan'
    },
    imageArticle: {
        height: 120,
        width: 120,
        borderRadius: '7%'
    },
    textColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        textAlign: 'justify',
        height: '100%',
        width: '60%',
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: 'pink'
    },
    titleArticle: {
        width: '95%',
        fontWeight: '650'
    },
    sourceDate: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    source: {
        fontWeight: '500',
        backgroundColor: 'green',
        padding: 3
    },
    date: {
        fontWeight: '500',
        padding: 3
    }
})

export default ArticleViewCardSmall;