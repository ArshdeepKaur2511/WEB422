import React from 'react';
import Link from 'next/link';

const HeroContent = () => {
  return (
    <div
      className="hero"
      style={{
        height: '30%',
        backgroundImage: "url(https://media.istockphoto.com/id/1460007248/photo/library-research-and-row-of-books-on-bookshelf-for-reading-knowledge-and-educational-learning.webp?b=1&s=170667a&w=0&k=20&c=TngiUK4f7spBY0U1r3xdicmFBK96Bi4JRrF4sNf2ELo=)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center lg:flex lg:justify-between lg:items-center lg:text-left">
        <div className="max-w-md lg:mr-10">
          <h1 className="mb-5 text-5xl font-bold">Welcome to the Bookstore</h1>
          <p className="mb-5">
          Find your favorite books here!
          </p>
          <Link href="/books" className="btn btn-primary">Discover Books</Link>
        </div>
        <div className="form-control max-w-sm lg:ml-10 mt-5 lg:mt-0">
          <label htmlFor="search-books" className="sr-only">Search books</label>
          <input
            type="text"
            id="search-books"
            placeholder="Search books..."
            className="input input-bordered"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;


    // <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content text-center">
    //     <div className="max-w-md">
    //       <h1 className="text-5xl font-bold">Welcome to the Bookstore</h1>
    //       <p className="py-6">Find your favorite books here!</p>
    //       <div className="form-control">
    //         <label htmlFor="search-books" className="sr-only">Search books</label>
    //         <input
    //           type="text"
    //           id="search-books"
    //           placeholder="Search books..."
    //           className="input input-bordered"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="container mx-auto py-10">
    //     {/* Additional content to be added here */}
    //   </div>
//   </div>
//   );
// };

// export default HeroContent;
