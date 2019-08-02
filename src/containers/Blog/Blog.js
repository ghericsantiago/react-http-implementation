import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import FullPost from '../../containers/Blog/FullPost/FullPost';

import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost  = asyncComponent(() => { 
    return import('./NewPost/NewPost');
 });

class Blog extends Component {
    render () {
        return (
            <div>
                <nav>
                    <ul>
                        <li><NavLink to="/" exact>Posts</NavLink></li>
                        <li><NavLink to={{pathname: '/new-post', hash:'#submit', 'search': 'quick-submit=true'}}>New Post</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={ Posts } />
                    <Route path="/new-post" component={ AsyncNewPost } />
                    <Route path="/:id" exact component={ FullPost } />
                </Switch>
            </div>
        );
    }
}

export default Blog;