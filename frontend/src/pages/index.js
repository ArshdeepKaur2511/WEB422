import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { booksAtom, searchQueryAtom } from '../context/atoms';
import Layout from '../components/Layout';
import BooksList from '../components/BooksList';

const HomePage = () => {
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
      const params = new URLSearchParams();
      if (searchQuery.title) params.append('title', searchQuery.title);
      if (searchQuery.author) params.append('author', searchQuery.author);
      if (searchQuery.category) params.append('category', searchQuery.category);
      url = `http://localhost:8080/api/books/search?${params.toString()}&page=${currentPage}&limit=10`;
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
        <BooksList books={books} totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </Layout>
  );
};

export default HomePage;
