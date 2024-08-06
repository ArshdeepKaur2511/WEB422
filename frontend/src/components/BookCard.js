// import Image from "next/image";

// const BookCard = ({ book, onDetailsClick }) => {
//   return (
//     <div className="card bg-base-100 shadow-lg p-4 flex flex-col items-center w-64">
//       <div className="w-full flex flex-col items-center">
//         <div className="relative w-28 h-40 bg-gray-200 rounded-lg overflow-hidden">
//           <Image
//             src={book.thumbnail || '/images/placeholder.png'} // Fallback image if no thumbnail
//             alt={book.title}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//         </div>
//         <h2 className="card-title mt-4 text-center text-lg font-semibold">
//           {book.title}
//         </h2>
//         <p className="text-sm text-gray-600 text-center">by {book.authors}</p>
//       </div>
//       <div className="mt-4 flex space-x-2 w-full">
//         <button
//           className="btn btn-primary w-full"
//           onClick={() => onDetailsClick(book)}
//         >
//           Details
//         </button>
        
//       </div>
//     </div>
//   );
// };

// export default BookCard;

import Image from "next/image";

const BookCard = ({ book, onDetailsClick }) => {
  return (
    <div className="card bg-base-300 shadow-lg p-4 m-4  flex flex-col items-center w-48">
      <div className="w-full flex flex-col items-center">
        <div className="relative w-28 h-40 bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src={book.thumbnail || '/images/placeholder.png'}
            alt={book.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="card-title mt-4 text-center text-lg font-semibold truncate w-full">
          {book.title}
        </h2>
        <p className="text-sm text-gray-600 truncate w-full">by {book.authors}</p>
      </div>
      <div className="mt-4 flex space-x-2 w-full">
        <button
          className="btn btn-primary w-full"
          onClick={() => onDetailsClick(book)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;


