import React, {Component} from 'react';
import AddComment from '../AddComment';
import CommentListDisplay from '../CommentListDisplay';
import './style.scss';

export default class Post extends Component {

  render() {
    const {post: {id, title, description, comments}} = this.props;

    return (
        <div className='post'>
          <div className='post-content'>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <CommentListDisplay arrCommentsId={comments} postId={id} parentId={null}/>
          <div className='post-write-comment'>
            <AddComment postId={id} parentId={null}/>
          </div>
        </div>
    )
  }
}
