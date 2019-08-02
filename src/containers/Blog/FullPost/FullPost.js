import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    } 

    deleteDataHandler = () => {
        axios.delete(`/posts/${this.props.match.params.id}`)
        .then((response) => {
            console.log(response);
        })
    }

    componentDidMount(){
        if( this.props.match.params.id && ( !this.state.loadedPost || this.state.loadedPost.id !== this.props.match.params.id )) {
            axios.get(`/posts/${this.props.match.params.id}`)
            .then((response) => {
                this.setState({
                    loadedPost: response.data
                })
            })
        }
    }

    render () {
        let post = <div className="FullPost"><p>Please select a Post!</p></div>;
        if(this.props.match.params.id && this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{ this.state.loadedPost.title }</h1>
                    <p>{ this.state.loadedPost.body }</p>
                    <div className="Edit">
                        <button onClick={this.deleteDataHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;