import React, {Component} from 'react'
import {connect} from 'react-redux'
import {findSubComments} from '../../../store/actions/index'
import AddComment from '../../AddComment'
import CommentListDisplay from '../index'
import './style.scss'

export class Comment extends Component {

    constructor(props) {
        super(props)

        this.state = {
            addSubComment: false,
            idEditNow: false,
            hideSubComments: false,
        }
    }

    handleDeleteComment = () => {
        const {postId, item: {id}, findSubComments, arrCommentsId} = this.props
        findSubComments(postId, id, arrCommentsId)
    }

    handleAddComment = () => {
        this.setState((prevState) => ({
            addSubComment: !prevState.addSubComment,
            hideSubComments: false,
        }))
    }

    handleEditComment = () => {
        this.setState((prevState) => ({
            idEditNow: !prevState.idEditNow,
        }))
    }

    hideSubComments = () => {
        this.setState((prevState) => ({
            hideSubComments: !prevState.hideSubComments,
        }))
    }

    findSub = () => {
        const { arrCommentsId, comments, itemId } = this.props
        return arrCommentsId.filter((id) => (
            comments[ id ].parentId === itemId
        ))
    }

    render() {
        const {item: {id, text}, arrCommentsId, postId} = this.props,
            {addSubComment, idEditNow, hideSubComments} = this.state
        const hideClass = hideSubComments ? 'hide' : ''
        const subComments = this.findSub();
        console.log(subComments)
        return (
            <>
                <div className={`comment-item ${hideClass}`}>
                    {idEditNow ?
                        <AddComment
                            postId={postId}
                            commentId={id}
                            value={text}
                            removeField={this.handleEditComment}
                        /> :
                        <p>{text}</p>}
                    {addSubComment &&
                    <AddComment
                        postId={postId}
                        parentId={id}
                        removeField={this.handleAddComment}
                    />
                    }
                    {!addSubComment && !idEditNow &&
                    <div className='functional-buttons'>
                        <div className='delete-button' onClick={this.handleDeleteComment}>Delete</div>
                        <div className='edit-button' onClick={this.handleEditComment}>Edit</div>
                        <div className='add-button' onClick={this.handleAddComment}>Add</div>
                        <div className='hide-button' onClick={this.hideSubComments}>Hide</div>
                    </div>
                    }
                </div>
                {arrCommentsId &&
                <CommentListDisplay
                    topLevelComments={subComments}
                    arrCommentsId={arrCommentsId}
                    postId={postId}
                />
                }
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.postsState.comments.byIds,
    }
}

const mapDispatchToProps = {
    findSubComments,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
