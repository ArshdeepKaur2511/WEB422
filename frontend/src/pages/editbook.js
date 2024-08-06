import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const EditBookPage = () => {
  const router = useRouter();
  const { isbn13 } = router.query;
  const [formData, setFormData] = useState({
    isbn13: '',
    title: '',
    authors: '',
    categories: '',
    thumbnail: '',
    description: '',
    published_year: '',
    average_rating: '',
    num_pages: '',
    ratings_count: '',
  });

  useEffect(() => {
    if (isbn13) {
      fetchBookDetails();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isbn13]);

  const fetchBookDetails = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/books/${isbn13}`);
      if (!res.ok) {
        throw new Error('Failed to fetch book details');
      }
      const data = await res.json();
      setFormData(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8080/api/books/${isbn13}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error('Failed to update book');
      }
      alert('Book updated successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/books/${isbn13}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete book');
      }
      alert('Book deleted successfully');
      router.push('/books');
    } catch (error) {
      alert(error.message);
    }
  };

  if (!isbn13) {
    return (
      <Layout>
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold mb-4">Edit Book</h1>
          <p>Loading book details...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Edit Book</h1>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input type="text" name="isbn13" placeholder="ISBN13" className="input input-bordered w-full" value={formData.isbn13} onChange={handleChange} required disabled />
          <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" value={formData.title} onChange={handleChange} required />
          <input type="text" name="authors" placeholder="Authors" className="input input-bordered w-full" value={formData.authors} onChange={handleChange} />
          <input type="text" name="categories" placeholder="Categories" className="input input-bordered w-full" value={formData.categories} onChange={handleChange} />
          <input type="text" name="thumbnail" placeholder="Thumbnail URL" className="input input-bordered w-full" value={formData.thumbnail} onChange={handleChange} />
          <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" value={formData.description} onChange={handleChange}></textarea>
          <input type="number" name="published_year" placeholder="Published Year" className="input input-bordered w-full" value={formData.published_year} onChange={handleChange} />
          <input type="number" name="average_rating" placeholder="Average Rating" className="input input-bordered w-full" value={formData.average_rating} onChange={handleChange} />
          <input type="number" name="num_pages" placeholder="Number of Pages" className="input input-bordered w-full" value={formData.num_pages} onChange={handleChange} />
          <input type="number" name="ratings_count" placeholder="Ratings Count" className="input input-bordered w-full" value={formData.ratings_count} onChange={handleChange} />
          <button type="submit" className="btn btn-primary w-full">Update Book</button>
          <button type="button" className="btn btn-error w-full mt-2" onClick={handleDelete}>Delete Book</button>
        </form>
      </div>
    </Layout>
  );
};

export default EditBookPage;
