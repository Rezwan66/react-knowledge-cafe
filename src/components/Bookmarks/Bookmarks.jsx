import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 mt-6">
      <div className="bg-purple-100 p-6 ml-6 rounded-xl mb-6 border border-purple-700">
        <h3 className="text-2xl text-center font-bold text-primary">
          Spent time on read: {readingTime} min
        </h3>
      </div>
      <div className=" bg-slate-100 p-8 ml-6 rounded-lg">
        <h2 className="text-2xl font-bold pl-4">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
