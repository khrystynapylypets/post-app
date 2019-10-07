import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment, updateComment} from '../../store/actions/index';

export class AddComment extends Component {

  constructor(props) {
    super(props);

    const {value} = this.props;
    this.state = {
      commentValue: value ? value : ''
    };
  }

  commentChange = (event) => {
    const {value} = event.target;
    this.setState({
      commentValue: value,
    })
  };

  submitComment = () => {
    const
        {postId, commentId, parentId, addComment, updateComment, removeField} = this.props,
        {commentValue} = this.state;

    if (commentId === undefined) {
      addComment(postId, parentId, commentValue);
    }
    else {
      updateComment(postId, commentId, commentValue);
    }

    this.setState({
      commentValue: '',
    });

    if (removeField !== undefined) {
      removeField();
    }
  };

  render() {

    return (
        <div className='add-comment'>
          <textarea placeholder='New Comment!' onChange={this.commentChange} value={this.state.commentValue}/>
          <input type='submit' onClick={this.submitComment}/>
        </div>
    )
  }
}

const mapDispatchToProps = {
  addComment,
  updateComment
};

export default connect(null, mapDispatchToProps)(AddComment);
