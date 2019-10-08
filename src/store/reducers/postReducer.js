import
{
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  DELETE_POST,
  ADD_POST,
}
  from '../actions/actionsTypes'
import postList from '../../data/post-list'

const initialState = {
  posts: {
    byIds: {
      ...postList.posts.byIds,
    },
    allIds: [ ...postList.posts.allIds ],
  },
  comments: {
    byIds: {
      ...postList.comments.byIds,
    },
    allIds: [ ...postList.comments.allIds ],
  },
}


export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        posts: {
          ...state.posts,
          byIds: {
            ...state.posts.byIds,
            [ action.postId ]: {
              ...state.posts.byIds[ action.postId ],
              comments: [ ...state.posts.byIds[ action.postId ].comments, action.commentId ],
            },
          },
        },
        comments: {
          ...state.comments,
          byIds: {
            ...state.comments.byIds,
            [ action.commentId ]: {
              id: action.commentId,
              text: action.text,
              parentId: action.parentId,
            },
          },
          allIds: [ ...state.comments.allIds, action.commentId ],
        },
      }
    case DELETE_COMMENT:
      return {
        posts: {
          ...state.posts,
          byIds: {
            ...state.posts.byIds,
            [ action.postId ]: {
              ...state.posts.byIds[ action.postId ],
              comments: state.posts.byIds[ action.postId ].comments.filter((item) => (
                item !== action.commentId
              )),
            },
          },
        },
        comments: {
          ...state.comments,
          byIds: deleteItemFromObj(state.comments.byIds, action.commentId),
          allIds: state.comments.allIds.filter((item) => (
            item !== action.commentId
          )),
        },
      }
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          byIds: {
            ...state.comments.byIds,
            [ action.commentId ]: {
              ...state.comments.byIds[ action.commentId ],
              text: action.newText,
            },
          },
        },
      }
    case DELETE_POST:
      return {
        ...state,
        posts: {
          byIds: deleteItemFromObj(state.posts.byIds, action.postId),
          allIds: state.posts.allIds.filter((item) => (
            item !== action.postId
          )),
        },
      }
    case ADD_POST:
      return {
        ...state,
        posts: {
          byIds: {
            ...state.posts.byIds,
            [ action.postId ]: {
              id: action.postId,
              title: action.title,
              description: action.description,
              comments: [],
            },
          },
          allIds: [ ...state.posts.allIds, action.postId ],
        },
      }
    default:
      return state
  }

}

function deleteItemFromObj(obj, property) {
  const newObject = { ...obj }
  delete newObject[ property ]
  return newObject
}
