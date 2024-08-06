// import React from 'react';
// import BookCard from './BookCard';

// const BooksList = ({ books, page, totalPages, onPageChange }) => {
//   const handlePreviousPage = () => {
//     if (page > 1) {
//       onPageChange(page - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (page < totalPages) {
//       onPageChange(page + 1);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {books.map((book) => (
//           <BookCard key={book.isbn13} book={book} />
//         ))}
//       </div>
//       <div className="flex justify-center mt-8">
//         <button
//           className="btn btn-outline mr-2"
//           onClick={handlePreviousPage}
//           disabled={page === 1}
//         >
//           Previous
//         </button>
//         <span className="btn btn-ghost">{`Page ${page} of ${totalPages}`}</span>
//         <button
//           className="btn btn-outline ml-2"
//           onClick={handleNextPage}
//           disabled={page === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BooksList;
import { useState } from 'react';
import BookCard from './BookCard';
import BookDetails from './BookDetails';

const BooksList = ({ books, totalPages, currentPage, onPageChange }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleDetailsClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {books.map((book) => (
          <BookCard key={book.isbn13} book={book} onDetailsClick={handleDetailsClick} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          className="btn btn-primary mr-2"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
      {selectedBook && <BookDetails book={selectedBook} onClose={handleCloseDetails} />}
    </div>
  );
};

export default BooksList;

