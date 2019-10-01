import React, {Component} from 'react';
import Post from '../Post';
import {connect} from 'react-redux';

export class Blog extends Component {
  render() {
    const {posts} = this.props;
    return (
        <div className='blog'>
          <div className='container'>
            {posts.map((post) => (
                <Post post={post}/>
            ))}
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(Blog);
