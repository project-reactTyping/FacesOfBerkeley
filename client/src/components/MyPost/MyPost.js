import React from 'react';
import MyPostList from '../MyPostList';

class MyPost extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      term: '',
      posts: []
    };
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
    console.log(event);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.posts, this.state.term]
    });
  }

  render() {
    return(
      <div className="container">
        <div className="container-mypost">
          <form className="MyPost" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>post</button>
          </form>
          </div>
        <MyPostList posts={this.state.posts} />
    </div>
    )
  }
}

export default MyPost;