import {ADD_COMMENT, DELETE_COMMENT} from "../actions/actionsConst";

export default function postsReducer(state, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map
                ((item) => (
                    item.id === action.postId ? {
                        ...item,
                        comments: [...item.comments, {
                            id: item.comments.length,
                            text: action.text
                        }]
                    } : item
                ))
            };
        case DELETE_COMMENT:
            return {
                ...state,
                posts: state.posts.map
                ((item) => (
                    item.id === action.postId ? {
                        ...item,
                        comments: item.comments.filter((value)=> (
                            value.id !== action.commentId
                        ))
                    } : item
                ))
            }
        default: return state;
    }
}