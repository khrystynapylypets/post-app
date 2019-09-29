import React, {Component} from 'react';
import Post from '../Post';
import {connect} from 'react-redux';

export class Blog extends Component {
    render() {
        console.log(this.props.posts);
        const {posts} = this.props;
        return (
            <div className='blog'>
                {posts.map((post) => (
                  <Post post={post} />
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps)(Blog);