import React from 'react';

const BookCard = () => {
  return (
    <div className="max-w-[240px] bg-white border-black border-2 p-1 rounded">
      <div className="mb-2">
        <img 
          src="https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg" 
          alt="book-cover"
          className="w-full rounded-lg"
        />
      </div>

      <div className="space-y-2 text-center">
        
        <h3 className="text-base text-center text-gray-900">Walk into the shadow</h3>
        <p className="text-gray-600 text-sm text-center">Don't know</p>
        <button className="hover:brightness-110 hover:animate-pulse py-1 px-5 rounded-full bg-[#1E88E5] text-white text-sm">More</button>

      </div>
    </div>
  );
};

export default BookCard;