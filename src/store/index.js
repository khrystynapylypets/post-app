import {createStore} from 'redux';
import rootReducer from './reducers/index';
import postList from '../../src/data/post-list';

const initialState = {
  posts: postList.posts.map((post) => (
      {
        id: post.id,
        title: post.title,
        description: post.description,
        comments: []
      }
  )),
  counter: 0,
};

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;