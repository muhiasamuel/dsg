import React, { Component,Fragment } from 'react'
import blogPost from '../../data/blog.json';
 import './styles.css';
import Card from '../UI/card';
export default class Homeposts extends Component {
    render() { 
        
        return (            
            <div className = "blogpostContainer">
              {
                  blogPost.map(post =>
                    {
                        return(
                      
                            <Fragment key = {post.id} >
                    <Card>
                       
                       
                                       <div className = "blogheader">
                           <span className = "blogCategory">{post.blogCategory}</span>
                           <h1 className ="postTitle">{post.blogTitle}
                          
                           </h1>
                        <span className = "postedBy">Posted on{post.postedOn} by {post.Author}</span>
                           
                               </div>
                               <div className = "postImageContainer">
                                   <img src={require("../../set2/"+ post.blogImage)} alt="Post"/>    
                               </div>
                               <div className ="postContent">
                                   <h3>postTitle</h3>
                        <p>{post.blogText}</p>
                               </div>
                               
                           
                    </Card>
                    </Fragment>

                            
                    
                        )
                    })
              }
               
            </div>
        )
    }
}
