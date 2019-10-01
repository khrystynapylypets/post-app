import
{
  ADD_COMMENT,
  DELETE_COMMENT,
  SAVE_COMMENT,
  EDIT_COMMENT
}
  from '../actions/actionsTypes';

export default function postsReducer(state, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map
        ((post) => (
            post.id === action.postId ? {
              ...post,
              comments: [...post.comments, {
                id: state.counter++,
                text: action.text,
                isEdit: false
              }]
            } : post
        ))
      };
    case DELETE_COMMENT:
      return {
        ...state,
        posts: state.posts.map
        ((post) => (
            post.id === action.postId ? {
              ...post,
              comments: post.comments.filter((comment) => (
                  comment.id !== action.commentId
              ))
            } : post
        ))
      };
    case EDIT_COMMENT:
      return {
        ...state,
        posts: state.posts.map
        ((post) => (
            post.id === action.postId ? {
              ...post,
              comments: post.comments.map((comment) => (
                  comment.id === action.commentId ? {
                    ...comment,
                    isEdit: true
                  } : comment
              ))
            } : post
        ))
      };
    case SAVE_COMMENT:
      return {
        ...state,
        posts: state.posts.map
        ((post) => (
            post.id === action.postId ? {
              ...post,
              comments: post.comments.map((comment) => (
                  comment.id === action.commentId ? {
                    ...comment,
                    text: action.newText,
                    isEdit: false
                  } : comment
              ))
            } : post
        ))
      };
    default:
      return state;
  }
}
