import React, {Component} from "react";
import { Text, FlatList, View, ScrollView,StyleSheet } from "react-native";

//  -- Import our own components --  //
import ArticleContainer from "../../components/ArticleContainer";
import ArticleContainerColumn from "../../components/ArticleContainerColumn";
import Categories from "../../components/Categories";


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            apiKey: '99b09d9389f14ee59af56079f6655492',
            apiDataByCountry: '',
            isLoading: true
        }
    }
    
    componentDidMount(){
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.state.apiKey}`) // Top headlines for the country the user chooses
            .then( response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                this.setState({
                    apiDataByCountry: data.articles.slice(0,5),
                    isLoading: false
                })
                
            })
            .catch(eMessage => {
                console.log('There has been an error with fetch:\n', eMessage)
            })
    }

    
    render(){
        return(
            <ScrollView style={styles.homeScreen}>         
                <Categories></Categories>                                         
                <ArticleContainer articles={this.state.apiDataByCountry}></ArticleContainer> 

                <Text style={styles.headingVerticalNews}> Your own personal choice </Text>
                <ArticleContainerColumn/>
            </ScrollView>            
        )
    }
}

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
    },
    headingVerticalNews: {
        fontSize: 20,
        padding: 5
    }
})


export default Home;