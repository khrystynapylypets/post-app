import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

export class CommentListDisplay extends Component {

  findSubComments = () => {
    const { arrCommentsId, parentId, comments } = this.props
    return arrCommentsId.filter((id) => (
      comments[ id ].parentId === parentId
    ))
  }

  render() {
    const arrayOfComments = this.findSubComments(),
      { comments, arrCommentsId, postId } = this.props
    return (
      <>
        {!!arrayOfComments.length &&
        <div className='comment-list'>
          {arrayOfComments.map((id) => (
            <Comment
              item={comments[ id ]}
              arrCommentsId={arrCommentsId}
              postId={postId}
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
