import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteComment} from '../../../store/actions/index';
import AddComment from '../../AddComment';
import CommentListDisplay from '../index';

export class Comment extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addSubComment: false,
      idEditNow: false,
      hideSubComments: false
    }
  }

  handleDeleteComment = () => {
    const {postId, item: {id}, deleteComment} = this.props;
    deleteComment(postId, id);
  };

  handleEditComment = () => {
    this.setState((prevState) => ({
      idEditNow: !prevState.idEditNow
    }));
  };

  handleAddComment = () => {
    this.setState((prevState) => ({
      addSubComment: !prevState.addSubComment
    }));
  };

  hideSubComments = () => {
    this.setState((prevState) => ({
      hideSubComments: !prevState.hideSubComments
    }));
  };

  render() {
    const {item: {id, text}, arrCommentsId, postId} = this.props,
        {addSubComment, idEditNow, hideSubComments} = this.state;
    const hideClass = hideSubComments ? 'hide' : '';

    return (
        <>
          <div className={`comment-item ${hideClass}`}>
            {idEditNow ?
                < AddComment postId={postId} commentId={id} value={text} removeField={this.handleEditComment}/> :
                <p>{text}</p>}
            {addSubComment && <AddComment postId={postId} parentId={id} removeField={this.handleAddComment}/>}
            {!addSubComment && !idEditNow && <div className='functional-buttons'>
              <div className='close-button' onClick={this.handleDeleteComment}>Delete</div>
              <div className='edit-button' onClick={this.handleEditComment}>Edit</div>
              <div className='add-button' onClick={this.handleAddComment}>Add</div>
              <div className='hide-button' onClick={this.hideSubComments}>Hide</div>
            </div>
            }
          </div>
          {arrCommentsId && <CommentListDisplay parentId={id} arrCommentsId={arrCommentsId} postId={postId}/>}
        </>
    );
  }
}

const mapDispatchToProps = {
  deleteComment
};

export default connect(null, mapDispatchToProps)(Comment);