import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  //console.log(book);
  return (
    <>
      {book.map((item) => {
        return (
          <>
            <div className="max-w-[240px] bg-white border-black border-2 p-1 rounded flex flex-col justify-between">
              <div className="mb-2 ">
                <img
                  src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail}
                  alt="book-cover"
                  className="w-full rounded-lg"
                />
              </div>

              <div className="space-y-2 text-center">
                <h3 className="text-base text-center text-gray-900">
                  {item.volumeInfo.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">{item.volumeInfo.authors[0]}</p>
                <button className="hover:brightness-110 hover:animate-pulse py-1 px-5 rounded-full bg-[#1E88E5] text-white text-sm">
                  More
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

BookCard.propTypes = {
    book : PropTypes.arrayOf(
        PropTypes.shape({
            volumeInfo: PropTypes.shape({
                title: PropTypes.string.isRequired,
                authors: PropTypes.arrayOf(PropTypes.string),
                imageLinks: PropTypes.shape({
                    smallThumbnail: PropTypes.string,
                }),
            }).isRequired
        })
    ).isRequired
}

export default BookCard;
