import React, {Component} from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";

//  -- Import our own components --  //
import ArticleViewCard from "../../components/ArticleViewCard";
import ArticleContainer from "../../components/ArticleContainer";


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            apiKey: '99b09d9389f14ee59af56079f6655492',
            apiData: '',
            isLoading: true
        }
    }
    
    componentDidMount(){
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.state.apiKey}`)
            .then( response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                this.setState({
                    apiData: data.articles,
                    isLoading: false
                })
                
            })
            .catch(eMessage => {
                console.log('There has been an error with fetch:\n', eMessage)
            })
    }

    
    render(){
        return(
            <View style={styles.background}>
                <View style={styles.localNewsContainer}>
                    <Text> Don't skip the lastest headlines from your country </Text>
                    <FlatList
                        data={this.state.apiData}
                        keyExtractor={(article, index) => {
                            return index.toString()
                        }}
                        renderItem={ (article) => {
                            return <ArticleViewCard articleInfo = {article} />}
                        }
                        horizontal='true'
                    />    
                </View> 
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


export default Home;