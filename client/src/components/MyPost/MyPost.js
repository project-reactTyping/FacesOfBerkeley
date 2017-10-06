import React from 'react';
import MyPostList from '../MyPostList';
import helpers from '../../utils/helpers';
import Cookies from 'universal-cookie';
import './MyPost.css';

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
      posts: [...this.state.posts, this.state.term]
    });
    let post = this.state.post;
    helpers.savePost(post)
      .then(function(response){
        const cookies = new Cookies();
        cookies.set('currentPost', response);
        console.log(cookies.get('currentPost'));
      });
  }

  render() {
    return(
      <div className="container">
        <div className="container-mypost">
          <form className="MyPost" onSubmit={this.onSubmit}>
            <textarea value={this.state.term} onChange={this.onChange}/>
            <button>post</button>
          </form>
        </div>
          <MyPostList posts={this.state.posts} />
      </div>
    )
  }
}

export default MyPost;