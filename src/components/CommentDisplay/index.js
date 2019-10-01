import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteComment, editComment} from '../../store/actions/index';
import AddComment from '../AddComment';

export class CommentDisplay extends Component {

  deleteComment = () => {
    const {postId, commentId, deleteComment} = this.props;
    deleteComment(postId, commentId);
  };

  editComment = () => {
    const {postId, commentId, editComment} = this.props;
    editComment(postId, commentId);
  };

  render() {
    const {text, postId, commentId, edit} = this.props;

    return (
        <div className='comment-item'>
          {edit ? <AddComment id={postId} commentId={commentId} value={text}/> : <p>{text}</p>}
          {!edit && <div className='functional-buttons'>
            <div className='close-button' onClick={this.deleteComment}>Delete</div>
            <div className='edit-button' onClick={this.editComment}>Edit</div>
          </div>}
        </div>
    );
  }
}

const mapDispatchToProps = {
  deleteComment,
  editComment
};


export default connect(null, mapDispatchToProps)(CommentDisplay);
