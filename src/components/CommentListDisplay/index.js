import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

export class CommentListDisplay extends Component {

  render() {
    //const arrayOfComments = this.findSubComments(),
      const { arrCommentsId, postId, comments, topLevelComments } = this.props

    return (
      <>
        {!!topLevelComments.length &&
        <div className='comment-list'>
          {arrCommentsId.map((id) => (
            <Comment
              item={comments[ id ]}
              arrCommentsId={arrCommentsId}
              postId={postId}
              itemId = {id}
            />
          ))}
        </div>
        }
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    comments: state.postsState.comments.byIds,
  }
}

export default connect(mapStateToProps)(CommentListDisplay)
