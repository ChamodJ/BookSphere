import "./App.css";
import BookCard from "./Components/BookCard";

function App() {
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
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
