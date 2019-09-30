import React, {Component} from 'react';
import {connect} from 'react-redux';
import { deleteComment } from '../../store/actions/actions'

export class CommentDisplay extends Component {


  deleteComment = () => {
    const {postId, commentId, deleteComment} = this.props;
    deleteComment(postId, commentId);
  }

  render() {
    const {text} = this.props;

    return (
      <div className='comment-item'>
        <p>
        {text}
        </p>
        <div className='close-icon' onClick={this.deleteComment}>Delete</div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  deleteComment,
}


export default connect(null, mapDispatchToProps)(CommentDisplay);
