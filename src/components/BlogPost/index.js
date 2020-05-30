import React,{  useState, useEffect }  from 'react';
import Data from '../../data/blog.json'
import './style.css';
import Card from '../UI/card';



   
const BlogPost=(props) => {
   

 
     
    const[post, setPost] = useState({
        blogImage : ""
    });
    const[loading, setloading] = useState(false);
    const[error, seterror] = useState(null);




    useEffect(() => {
        setloading(true);
        const postId =props.match.params.postId;
        const post = Data.find(post=>post.Id===postId);
        setPost(post)
        setloading(false);
        seterror(error);

       
    } ,[props.match.params.postId,error]);
   
   if(post.blogImage === "") return null;
    if (error){
        return <div> Error: {error.message}</div>;
    }
    else if (loading) {
        return <div> isloading...</div>;
    } else
    return (
    <div className = "blogpostContainer">
    <Card >
        <div className = "blogheader">
    <span className = "blogCategory">{post.blogCategory}</span>
    <h1 className ="postTitle">{post.blogTitle}</h1>
    <span className = "postedBy">Posted on {post.postedOn} by {post.Author}</span>
    
        </div>
        <div className = "postImageContainer">
            <img src={require("../../set2/" +post.blogImage)} alt="Post"/>    
        </div>
        <div className ="postContent">
            <h3>postTitle</h3>
    <p>{post.blogText}</p>
        </div>
       </Card>
    </div>
);
   




}
       

export default BlogPost
