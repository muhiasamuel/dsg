import React, { Component } from 'react';
import data from './data/blog.json';
const PostContext = React.createContext();
 class PostProvider extends Component {

    constructor(props){
        super(props);
        this.state = {
            error : null,
            isloaded : false,
            post : []
        };
    }   
  componentDidMount() {
      const postId = this.props.match.params.postId;
      const post = data.find(post =>post.id === postId);
      this.setState({
          isloaded : false,
          post,

          
      });
   

    render() {
        const {
            error, isloaded, post
        } = this.state;
       if(error) {
       return <div>Error:{error.message}</div>
       }
       
        
        return (

           <PostContext.Provider value = {{...this.state}}>
               {this.props.children}
           </PostContext.Provider>
        );
    }
}
const PostConsumer = PostContext.Consumer;
export { PostProvider, PostConsumer, PostContext}
