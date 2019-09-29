import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addComment} from '../../store/actions/actions';

export class AddComment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            commentValue: ''
        }
    }

    commentChange = (event) => {
        const {value} = event.target;
        this.setState({
            commentValue: value
        })
    };

    submitComment = (event) => {
        event.preventDefault();
        console.log(this.props);
      const
          {id, addComment} = this.props,
          {commentValue} = this.state;
      addComment(id, commentValue);
      this.setState({
          commentValue: ''
      })
    };

    render() {
        return (
            <div className='add-comment'>
                <textarea placeholder='New Comment!' onChange={this.commentChange} value={this.state.commentValue}/>
                <input type='submit' onClick={this.submitComment}/>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addComment,
};

export default connect(null, mapDispatchToProps)(AddComment);