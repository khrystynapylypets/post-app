import React, { Component } from 'react'
import AddComment from '../AddComment'
import CommentListDisplay from '../CommentListDisplay'
import './style.scss'
import { connect } from 'react-redux'
import { deletePost } from '../../store/actions'

export class Post extends Component {

  handleDeletePost = () => {
    const { post: { id }, deletePost } = this.props
    deletePost(id)
  }

  render() {
    const { post: { id, title, description, comments } } = this.props

    return (
      <div className='post'>
        <div className='post-content'>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <CommentListDisplay
          arrCommentsId={comments}
          postId={id}
          parentId={null}
        />
        <div className='post-write-comment'>
          <AddComment
            postId={id}
            parentId={null}
          />
        </div>
        <button
          className='delete-post'
          value='Delete'
          onClick={this.handleDeletePost}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  deletePost,
}

export default connect(null, mapDispatchToProps)(Post)
