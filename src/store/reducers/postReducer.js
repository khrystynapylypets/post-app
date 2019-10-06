import
{
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT
}
  from '../actions/actionsTypes';
import postList from '../../data/post-list';

const initialState = {
  posts: {
    byIds: {
      ...postList.posts.byIds
    },
    allIds: [...postList.posts.allIds]
  },
  comments: {
    byIds: {
      ...postList.comments.byIds
    },
    allIds: [...postList.comments.allIds]
  }
};

console.log(initialState);

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        posts: {
          ...state.posts,
          byIds: {
            ...state.posts.byIds,
            [action.postId]: {
              ...state.posts.byIds[action.postId],
              comments: [...state.posts.byIds[action.postId].comments, action.commentId]
            }
          }
        },
        comments: {
          ...state.comments,
          byIds: {
            ...state.comments.byIds,
            [action.commentId]: {
              id: action.commentId,
              text: action.text,
              parentId: action.parentId
            }
          },
          allIds: [...state.comments.allIds, action.commentId]
        }
      };
    case DELETE_COMMENT:
      return {
        posts: {
          ...state.posts,
          byIds: {
            ...state.posts.byIds,
            [action.postId]: {
              ...state.posts.byIds[action.postId],
              comments: state.posts.byIds[action.postId].comments.filter((item) => (
                  item !== action.commentId
              ))
            }
          }
        },
        comments: {
          ...state.comments,
          byIds: deleteItemFromObj(state.comments.byIds, action.commentId),
          allIds: state.comments.allIds.filter((item) => (
              item !== action.commentId
          ))
        }
      };
    case UPDATE_COMMENT:
      return {
        posts: {
          ...state.posts
        },
        comments: {
          ...state.comments,
          byIds: {
            ...state.comments.byIds,
            [action.commentId]: {
                ...state.comments.byIds[action.commentId],
              text: action.newText
            }
          }
        }
      };
    default:
      return state;
  }
}

function deleteItemFromObj(obj, property) {
  const newObject = {...obj};
  delete newObject[property];
  return newObject;
}
