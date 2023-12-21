import { useState } from "react";

/* eslint-disable react/prop-types */
const BookList = ({ books }) => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [book, setBook] = useState(books);
  const filterBooksByGenre = (genre) => {
    const newBooks = genre === "All" ? books : books.filter(item => item.genre === genre);
    setBook(newBooks);
    setSelectedGenre(genre);
  }
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Book List</h2>
      <button
          className={`bg-blue-500 text-white px-4 py-2 mb-2 rounded mr-4 focus:outline-none ${
            selectedGenre === 'All' ? 'bg-blue-700' : ''
          }`}
          onClick={() => filterBooksByGenre('All')}
        >
          All
        </button>
        {
          [...new Set(books.map(item => item.genre))].map((item,index) => <button key={index}
            className={`bg-blue-500 text-white px-4 py-2 mb-2 rounded mr-4 focus:outline-none ${
              selectedGenre === item.genre ? 'bg-blue-700' : ''
            }`}
            onClick={() => filterBooksByGenre(item)}
          >
            {item}
          </button>)
        }
      <ul>
        {book.map((book, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-gray-600">{`Author: ${book.author}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;