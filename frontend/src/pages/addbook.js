import { useState } from 'react';
import Layout from '../components/Layout';

const AddBookPage = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert('Book added successfully');
      } else {
        throw new Error('Failed to add book');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Add a New Book</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="isbn13" placeholder="ISBN13" className="input input-bordered w-full" onChange={handleChange} required />
          <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" onChange={handleChange} required />
          <input type="text" name="authors" placeholder="Authors" className="input input-bordered w-full" onChange={handleChange} />
          <input type="text" name="categories" placeholder="Categories" className="input input-bordered w-full" onChange={handleChange} />
          <input type="text" name="thumbnail" placeholder="Thumbnail URL" className="input input-bordered w-full" onChange={handleChange} />
          <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" onChange={handleChange}></textarea>
          <input type="number" name="published_year" placeholder="Published Year" className="input input-bordered w-full" onChange={handleChange} />
          <input type="number" name="average_rating" placeholder="Average Rating" className="input input-bordered w-full" onChange={handleChange} />
          <input type="number" name="num_pages" placeholder="Number of Pages" className="input input-bordered w-full" onChange={handleChange} />
          <input type="number" name="ratings_count" placeholder="Ratings Count" className="input input-bordered w-full" onChange={handleChange} />
          <button type="submit" className="btn btn-primary w-full">Add Book</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddBookPage;
