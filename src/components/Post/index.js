import React, {Component} from 'react'
import AddComment from '../AddComment'
import CommentListDisplay from '../CommentListDisplay'
import './style.scss'
import {connect} from 'react-redux'

export class Post extends Component {
    findTopComments = () => {
        const postId = this.props.match.params.id;
        const {posts, comments} = this.props;

        return posts[postId].comments.filter((id) => (
            comments[ id ].parentId === null
        ))
    }

    render() {
        const postId = this.props.match.params.id;
        const {posts} = this.props;

        const topLevelComments = this.findTopComments();
        console.log(topLevelComments)
        return (
            <div className='container'>
                <div className='post'>
                    <div className='post-content'>
                        <h1>{posts[postId].title}</h1>
                        <p>{posts[postId].description}</p>
                    </div>
                    <CommentListDisplay
                        topLevelComments={topLevelComments}
                        arrCommentsId={posts[postId].comments}
                        postId={postId}
                    />
                    <div className='post-write-comment'>
                        <AddComment
                            postId={postId}
                            parentId={null}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postsState.posts.byIds,
        comments: state.postsState.comments.byIds,
    }
}

export default connect(mapStateToProps)(Post)
