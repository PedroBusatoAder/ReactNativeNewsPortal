// We should make each fetch inside the container itself, not in the home seciton
// Each container will make use of the stateless components 'ArticleViewCard'
// Though saved on the Stateless folder for components it will have a state!

import React, {Component} from "react";

class ArticleContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <View>
                
            </View>
        )
    }
}

export default ArticleContainer;