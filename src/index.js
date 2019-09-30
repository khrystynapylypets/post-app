import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/store/reducers/reducers';
import postList from '../src/data/post-list';

const initialState = {
    posts: postList.posts.map((item) => (
        {
            id: item.id,
            title: item.title,
            description: item.description,
            comments: []
        }
    )),
  counter: 0

};

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
