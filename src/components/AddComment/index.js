import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment, saveComment} from '../../store/actions/index';

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
        {id, commentId, addComment, saveComment} = this.props,
        {commentValue} = this.state;

    if (commentId === undefined) {
      addComment(id, commentValue);
    }
    else {
      saveComment(id, commentId, commentValue);
    }

    this.setState({
      commentValue: '',
    })
  };

  render() {

    return (
        <div className='add-comment'>
          <textarea placeholder='New Comment!' onChange={this.commentChange} value={this.state.commentValue}/>
          <input type='submit' onClick={this.submitComment} />
        </div>
    )
  }
}

const mapDispatchToProps = {
  addComment,
  saveComment
};

export default connect(null, mapDispatchToProps)(AddComment);
