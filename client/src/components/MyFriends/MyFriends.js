import React from "react";
const test = <h1>can u see me?</h1>
class MyFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h2>CAN u see me now?</h2>
            {<h2>can u see me here?</h2>}
            <h2>i am here</h2>
          {test}
        </div>
      </div>
    );
  }
}


export default MyFriends;