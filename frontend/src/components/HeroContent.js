// import React from 'react';
// import Link from 'next/link';
// import SearchBar from './SearchBar';

// const HeroContent = () => {
//   return (
//     <div
//       className="hero"
//       style={{
//         height: '30%',
//         backgroundImage: "url(https://media.istockphoto.com/id/1460007248/photo/library-research-and-row-of-books-on-bookshelf-for-reading-knowledge-and-educational-learning.webp?b=1&s=170667a&w=0&k=20&c=TngiUK4f7spBY0U1r3xdicmFBK96Bi4JRrF4sNf2ELo=)",
//       }}
//     >
//       <div className="hero-overlay bg-opacity-60"></div>
//       <div className="hero-content text-neutral-content text-center lg:flex lg:justify-between lg:items-center lg:text-left">
//         <div className="max-w-md lg:mr-10">
//           <h1 className="mb-5 text-5xl font-bold">Welcome to the Library</h1>
//           <p className="mb-5">
//           Find your favorite books here!
//           </p>
//           <Link href="/books" className="btn btn-primary">Discover Books</Link>
//         </div>
//         <div className="form-control max-w-sm lg:ml-10 mt-5 lg:mt-0">
//           < SearchBar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroContent;

import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

const HeroContent = () => {
  return (
    <div
      className="hero h-72 bg-cover bg-center"
      style={{
        backgroundImage: "url(https://media.istockphoto.com/id/1460007248/photo/library-research-and-row-of-books-on-bookshelf-for-reading-knowledge-and-educational-learning.webp?b=1&s=170667a&w=0&k=20&c=TngiUK4f7spBY0U1r3xdicmFBK96Bi4JRrF4sNf2ELo=)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center flex flex-col lg:flex-row lg:justify-between lg:items-center lg:text-left p-4 lg:p-8">
        <div className="max-w-md mb-5 lg:mb-0 lg:mr-10">
          <h1 className="mb-5 text-4xl lg:text-5xl font-bold">Welcome to the Library</h1>
          <p className="mb-5">Find your favorite books here!</p>
          <Link href="/books" className="btn btn-primary">Discover Books          </Link>
        </div>
        <div className="form-control w-full max-w-sm mx-auto lg:mx-0">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

