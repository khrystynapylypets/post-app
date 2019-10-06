import
{
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT
} from './actionsTypes';
import uniqid from 'uniqid';

export const addComment = (postId, parentId, text) => ({
  type: ADD_COMMENT,
  commentId: uniqid(),
  postId,
  parentId,
  text
});

export const deleteComment = (postId, commentId) => ({
  type: DELETE_COMMENT,
  postId,
  commentId,
});

export const updateComment = (postId, commentId, newText) => ({
  type: UPDATE_COMMENT,
  postId,
  commentId,
  newText
});


