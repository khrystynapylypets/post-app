import { select, takeEvery, put, all } from 'redux-saga/effects'
import {
  FIND_SUB_COMMENTS,
} from '../actions/actionsTypes'
import { deleteComment } from '../actions'

function* watchCommentsSaga() {
  yield takeEvery(FIND_SUB_COMMENTS, deleteCommentsSaga)
}

function* deleteCommentsSaga(action) {
  const state = yield select()
  const arrOfComments = findSubComments(state, action.postId, action.commentId, action.arrOfCommentsId, [])
  yield put(deleteComment(action.postId, arrOfComments))
}

function findSubComments(state, postId, commentId, arrOfCommentsId, result) {
  let arrayOfSubComments = arrOfCommentsId.filter((item) => (
    state.postsState.comments.byIds[ item ].parentId === commentId
  ))

  arrayOfSubComments.map((item) => {
    result = findSubComments(state, postId, item, arrOfCommentsId, result)
  })

  return [ ...result, commentId ]
}

export default function* rootSaga() {
  yield all([
    watchCommentsSaga(),
  ])
}
