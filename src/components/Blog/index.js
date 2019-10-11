import React, { Component } from 'react'
import Post from '../Post'
import AddPost from '../AddPost'
import { connect } from 'react-redux'

export class Blog extends Component {
  render() {
    const { posts, postsId } = this.props

    return (
      <div className='blog'>
        <div className='container'>
          {postsId && postsId.map((id) => (
            <Post post={posts[ id ]}/>
          ))}
          <AddPost/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.postsState.posts.byIds,
    postsId: state.postsState.posts.allIds,
  }
}

export default connect(mapStateToProps)(Blog)
