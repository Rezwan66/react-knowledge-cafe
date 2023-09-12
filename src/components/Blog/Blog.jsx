import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  return (
    <div>
      <h3>My blog</h3>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
