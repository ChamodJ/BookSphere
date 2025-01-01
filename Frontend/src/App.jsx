import { useEffect, useState } from "react";
import "./App.css";
import BookCard from "./Components/BookCard";
import axios from "axios";

function App() {
  const [searchKey, setSearchKey] = useState("all");
  const [bookData, setBookData] = useState([]);

  const apiKey = "AIzaSyDgZM16KvNyPOiKuZfq0FrcwqGcgOR32r0";

  const searchBook = () => {
    console.log(searchKey);
    if (searchKey === "") {
      setSearchKey("all");
    }
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchKey}&key=${apiKey}`
      )
      .then((res) => setBookData(res.data.items || []))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    searchBook()
  }, [searchKey]) 

  useEffect(() => {
    searchBook()
  }, []);

  /*
  const searchEventListner = (evt) => {
    if (evt.key === "Enter") {
      searchBook();
    }
  };
  */

  return (
    <>
      <div className="font-poppins">
        <div className=" bg-[#1E88E5] h-96 rounded-b-3xl text-center flex flex-col justify-center items-center">
          <h1 className=" text-8xl font-MeowScript text-[#FFC107] font-bold tracking-wider mb-2 [-webkit-text-stroke:1p_black]">
            Book Sphere
          </h1>
          <p className="text-white text-xl [-webkit-text-stroke:0.1px_black]">
            A Universe of Books in Your Hands.
          </p>
        </div>

        <div className="p-3 lg:p-6 xl:p-10">
          <div className="flex items-center justify-center p-5">
            <div className="flex md:w-2/3">
              <div></div>
              <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-2 border-gray-200 bg-white p-5">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-5 fill-gray-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="w-full bg-white pl-2 text-base font-semibold outline-0 max-w-[1000px] border-2"
                placeholder=""
                id=""
                onChange={(e) => setSearchKey(e.target.value)}
                //onKeyPress={searchEventListner}
              />
              <button
                className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                type="button"
                onClick={searchBook}
              >
                Search
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {bookData.length === 0 || bookData == null ? (
              <p className="text-center">No books found.</p>
            ) : (
              <BookCard book={bookData} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
