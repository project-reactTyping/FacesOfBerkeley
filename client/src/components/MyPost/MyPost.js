import React from 'react';
import MyPostList from '../MyPostList';
import helpers from '../../utils/helpers';
// import Cookies from 'universal-cookie';
import './MyPost.css';

class MyPost extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      term: '',
      posts: []
    };
  }

  componentDidMount(){
    helpers.getPosts()
      .then((res) => {
        console.log(res.data[0].post);
        for (var i = res.data.length-1; i>=0; i--) {
          this.state.posts.push(res.data[i].post);
        }
        console.log(this.state.posts);
        this.setState({posts: this.state.posts});
        console.log(this.state.posts);
      });
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
    console.log(this.state.posts);
    let post = this.state.term;
    this.state.posts.unshift(post);
    this.setState({posts: this.state.posts});
    console.log(this.state.posts);
    helpers.savePost(post)
      .then(function(response){
        console.log(response);
      });
  }

  render() {
    return(
      <div className="postContainer">
        <div className="container-mypost">
          <form className="MyPost" onSubmit={this.onSubmit}>
            <textarea rows="10" value={this.state.term} onChange={this.onChange}/>
            <button className="postBtn">post</button>
          </form>
        </div>
          <MyPostList posts={this.state.posts} />
      </div>
    )
  }
}

export default MyPost;