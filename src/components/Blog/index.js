import React, {Component} from 'react'
import AddPost from '../AddPost'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './style.scss'
import {deletePost} from '../../store/actions';

export class Blog extends Component {
    handleDeletePost = (id) => {
        const {deletePost} = this.props;
        deletePost(id)
    }

    render() {
        const {posts, postsId} = this.props

        return (
            <div className='blog'>
                <div className='container'>
                    {postsId && postsId.map((id) => (
                            <div className='post'>
                                <div className='post-content'>
                                    <h1>{posts[id].title}</h1>
                                    <p>{posts[id].description}</p>
                                    <Link to={`/posts/${id}`} className='links'>Go to post</Link>
                                </div>
                                <button
                                    className='delete-post'
                                    value='Delete'
                                    onClick={() => this.handleDeletePost(id)}
                                />
                            </div>
                    ))}
                    <AddPost/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postsState.posts.byIds,
        postsId: state.postsState.posts.allIds,
    }
}

const mapDispatchToProps = {
    deletePost,
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
