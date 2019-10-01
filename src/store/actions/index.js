import
{
  ADD_COMMENT,
  DELETE_COMMENT,
  SAVE_COMMENT,
  EDIT_COMMENT
} from './actionsTypes';

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

export const editComment = (postId, commentId) => ({
  type: EDIT_COMMENT,
  postId,
  commentId,
});

export const saveComment = (postId, commentId, newText) => ({
  type: SAVE_COMMENT,
  postId,
  commentId,
  newText
});
