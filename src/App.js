import React from 'react'
import Blog from './components/Blog'
import Post from './components/Post'
import {
    BrowserRouter,
    Route
} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path='/' component={Blog}/>
                <Route path='/posts/:id' component={Post}/>
            </div>
        </BrowserRouter>
    )
}

export default App
