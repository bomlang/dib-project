import BookCardImage from './BookCardImage';
import RowBookCardInfo from './RowBookCardInfo';
import PropTypes from 'prop-types';

function RowBookCard({ postTitle, bookTitle, nickName, imgSrc, imgAlt }) {
  return (
    <div className="flex w-[560px] h-[284px] ">
      <BookCardImage imgSrc={imgSrc} imgAlt={imgAlt} />
      <RowBookCardInfo
        nickName={nickName}
        postTitle={postTitle}
        bookTitle={bookTitle}
      />
    </div>
  );
}

RowBookCard.propTypes = {
  postTitle: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default RowBookCard;
