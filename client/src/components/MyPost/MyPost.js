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

  componentWillMount() {
    // const userCookies = new Cookies();
    // const userInfo = userCookies.get('currentUser');
  }

  // componentDidMount(){
  //   helpers.getPosts()
  //     .then((res) => {
  //       this.setState({posts: res.data});
  //       console.log('all my posts: ' + res.data)
  //       }
  //     });
  // }

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
    helpers.savePost(post)
      .then(function(response){
        console.log(response);
        // this.state.posts.push(response.data);
        // this.setState({posts: this.state.data});
      });
  }

  render() {
    return(
      <div className="postContainer">
        <div className="container-mypost">
          <form className="MyPost" onSubmit={this.onSubmit}>
            <textarea value={this.state.term} onChange={this.onChange}/>
            <button className="postBtn">post</button>
          </form>
        </div>
          <MyPostList posts={this.state.posts} />
      </div>
    )
  }
}

export default MyPost;