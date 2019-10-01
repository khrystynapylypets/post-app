import React, {Component} from 'react';
import AddComment from '../AddComment';
import CommentDisplay from '../CommentDisplay';
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
          <div className='post-comments'>
            {comments && comments.map((comment) => (
                <CommentDisplay
                    postId={id}
                    commentId={comment.id}
                    text={comment.text}
                    edit={comment.isEdit}
                />
            ))}
          </div>
          <div className='post-write-comment'>
            <AddComment id={id}/>
          </div>
        </div>
    )
  }
}
