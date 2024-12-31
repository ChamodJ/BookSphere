const MoreDetailsCard = ({ showDetails, item, onClose }) => {

    if(!showDetails) {
        return null;
    }

    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let title = item.volumeInfo.title
    let authors = item.volumeInfo.authors[0]
    let publishedDate = item.volumeInfo.publishedDate
    let lan = item.volumeInfo.language
    let pageCount = item.volumeInfo.pageCount
    let categories = item.volumeInfo.categories[0]
    let link = item.volumeInfo.previewLink

    return (
      <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50">
        <div className="bg-white h-full w-full md:h-2/3 md:w-2/3 p-5 rounded-lg shadow-lg overflow-y-auto">
          
          <button 
          className="absolute top-5 right-5 bg-gray-300 rounded-full p-2 hover:bg-gray-400"
          onClick={onClose}
          >
            &times;
          </button>
  
          
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center w-full md:w-3/4 mx-auto space-y-5 md:space-y-0 md:space-x-10">
            
            <div className="w-full md:w-1/3 flex justify-center border-2">
              <img
                src={thumbnail}
                alt="book-cover"
                className="h-80 object-fill rounded-md mb-4 md:mb-0"
              />
            </div>
  
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h1 className="text-3xl md:text-2xl font-bold mb-2">{title}</h1>
              <h3 className="text-gray-700 mb-4">
                <span className="font-semibold">Authors:</span> {authors}
              </h3>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Published Date:</span> {publishedDate}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Categories:</span> {categories}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Language:</span> {lan}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Page Count:</span> {pageCount}
              </p>
  
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                <a href={link} className="text-white" target="_blank">
                  Download
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MoreDetailsCard;
  