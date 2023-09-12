import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    reading_time,
    author_image,
    author,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div>
      <img
        src={cover}
        className="rounded-lg"
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className=" flex gap-6">
          <img src={author_image} className=" w-14" alt="" />
          <div>
            <h3 className=" text-2xl font-bold">{author}</h3>
            <p className="text-[#11111199] font-semibold">{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className=" font-medium text-lg text-[#11111199]">
        {hashtags.map((tag, idx) => (
          <span key={idx}>
            <a>{tag} </a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
