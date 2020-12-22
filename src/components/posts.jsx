import React from "react";
import queryString from "query-string";

const Posts = (props) => {
  // const result = queryString.parse(props.location.search);
  // // or
  // const { sortBy, approved } = queryString.parse(props.location.search);
  // console.log(result);
  // console.log(sortBy);
  // console.log(approved);

  return (
    <div>
      <h1>Posts</h1>
      Year:{props.match.params.yy} , Month:{props.match.params.mm}
    </div>
  );
};

export default Posts;
