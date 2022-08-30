import React from "react";
import OurBlog from "./ourBlogs/ourBlog";
// import Tabcomponent from "./tabComponent";
import Solution from "./solution";
import BlogDetails from "./blogDetails";

const Blogs = () => {
  return (
    <React.Fragment>
      {/* <Tabcomponent /> */}
      <OurBlog />
      <Solution />
      <BlogDetails />
    </React.Fragment>
  );
};
export default Blogs;
