import React, { Component} from 'react';
import FacebookProvider, { Like } from 'react-facebook';

export default class LikeBtn extends Component {
  render() {
    return (
      <FacebookProvider appId="117472415612865">
        <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
      </FacebookProvider>
    );
  }
}