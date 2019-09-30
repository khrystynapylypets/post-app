import {ADD_COMMENT, DELETE_COMMENT} from './actionsConst';

export const addComment = (postId, text) => ({
    type: ADD_COMMENT,
    postId,
    text
});

export const deleteComment = (postId, commentId) => ({
    type: DELETE_COMMENT,
    postId,
    commentId,
});
