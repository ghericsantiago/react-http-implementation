import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import {Link} from 'react-router-dom';

class Posts extends Component {

    state = {
        posts: []
    }

    
    selectPostHandler = ( postId ) => {
        this.setState({
            selectedPostId: postId
        });
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(( response ) => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map( post => {
                return {
                    ...post,
                    author: 'Admin'
                }
            })
            this.setState({
                posts: updatedPosts
            })
        })
    }


    render(){
        const posts =  this.state.posts && this.state.posts.map( post => (
           <Link to={ `/${post.id}` } key={ post.id } >
                <Post
                    clicked={ () => { this.selectPostHandler( post.id ) } }
                    title={ post.title } 
                    author={ post.author } />
           </Link> 
        ));
        return (
            <section className="Posts">
                { posts }
            </section>
        );
    }
}
export default Posts;