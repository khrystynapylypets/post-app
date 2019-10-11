import {
  ADD_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  FIND_SUB_COMMENTS,
} from './actionsTypes'
import uniqid from 'uniqid'

export const addPost = (title, description) => ({
  type: ADD_POST,
  postId: uniqid(),
  title,
  description,
})

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
})

export const addComment = (postId, parentId, text) => ({
  type: ADD_COMMENT,
  commentId: uniqid(),
  postId,
  parentId,
  text,
})

export const deleteComment = (postId, arrOfCommentsId) => ({
  type: DELETE_COMMENT,
  postId,
  arrOfCommentsId,
})

export const updateComment = (postId, commentId, newText) => ({
  type: UPDATE_COMMENT,
  postId,
  commentId,
  newText,
})

export const findSubComments = (postId, commentId, arrOfCommentsId) => ({
  type: FIND_SUB_COMMENTS,
  postId,
  commentId,
  arrOfCommentsId,
})

