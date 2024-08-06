// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from '@/components/Layout';
// import BooksList from '../components/BooksList';

// const BooksPage = () => {
//   const [books, setBooks] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/books', {
//           params: {
//             page,
//             limit: 10,
//           },
//         });
//         setBooks(response.data.books);
//         setTotalPages(response.data.totalPages);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//       }
//     };

//     fetchBooks();
//   }, [page]);

//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//   };

//   return (
//     <>
//     <Layout>
//       <BooksList
//         books={books}
//         page={page}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//       </Layout>
//     </>
//   );
// };

// export default BooksPage;

import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { booksAtom, searchQueryAtom } from '../context/atoms';
import Layout from '../components/Layout';
import BooksList from '../components/BooksList';

const BooksPage = () => {
  const [books, setBooks] = useAtom(booksAtom);
  const [searchQuery] = useAtom(searchQueryAtom);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchBooks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchQuery]);

  const fetchBooks = async () => {
    let url = `http://localhost:8080/api/books?page=${currentPage}&limit=10`;
    if (searchQuery.title || searchQuery.author || searchQuery.category) {
      url = `http://localhost:8080/api/books/search?title=${searchQuery.title}&author=${searchQuery.author}&category=${searchQuery.category}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    setBooks(data.books || data);
    setTotalPages(data.totalPages || 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Books</h1>
        <BooksList books={books} totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </Layout>
  );
};

export default BooksPage;


