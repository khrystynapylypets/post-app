import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../store/actions/index'

export class AddPost extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      errorMessage: '',
    }
  }

  postChange = (event) => {
    const { value, name } = event.target
    switch (name) {
      case 'title':
        this.setState({
          title: value,
        })
        break;
      case 'description':
        this.setState({
          description: value,
        })
    }
  }

  submitPost = () => {
    const { addPost } = this.props
    const { title, description } = this.state
    if (!(title.length && description.length)) {
      this.setState({
        errorMessage: 'Please enter al least 1 character in two fields',
      })
      return
    }
    addPost(title, description)
    this.setState({
      title: '',
      description: '',
      errorMessage: '',
    })
  }

  render() {
    const { title, description, errorMessage } = this.state
    const rightData = title.length && description.length

    return (
      <div className='add-post'>
        <h3>Add new post</h3>
        {!rightData &&
        <div className='error-message'>{errorMessage}</div>
        }
        <label htmlFor='title'>Title</label>
        <textarea
          id='title'
          placeholder='Title'
          name='title'
          onChange={this.postChange}
        />
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          placeholder='Post'
          name='description'
          onChange={this.postChange}
        />
        <input
          type='submit'
          onClick={this.submitPost}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  addPost,
}

export default connect(null, mapDispatchToProps)(AddPost)
