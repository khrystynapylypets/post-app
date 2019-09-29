import React, {Component} from 'react';
import AddComment from '../AddComment'

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
                    {comments && comments.map((comment)=>(
                        <p>{comment.text}</p>
                    ))}
                </div>
                <div className='post-ask-comment'>
                    <AddComment id={id}/>
                </div>
            </div>
        );
    }
}