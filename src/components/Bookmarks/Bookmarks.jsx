import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 bg-slate-100 p-8 ml-6 rounded-lg">
      <h2 className="text-2xl font-bold pl-4">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
