import React from "react";

const Posts = (props) => {
  return (
    <div>
      <h1>Posts</h1>
      Year:{props.match.params.yy} , Month:{props.match.params.mm}
    </div>
  );
};

export default Posts;
