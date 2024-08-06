import Link from "next/link";
import Image from "next/image";

const BookDetails = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-4xl">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Book Image */}
          <div className="w-full lg:w-1/3">
            <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={book.thumbnail}
                alt={book.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Book Details */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
            <p className="text-gray-600 mb-4">{book.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p>
                <strong>Authors:</strong> {book.authors}
              </p>
              <p>
                <strong>Categories:</strong> {book.categories}
              </p>
              <p>
                <strong>Published Year:</strong> {book.published_year}
              </p>
              <p>
                <strong>Average Rating:</strong> {book.average_rating}
              </p>
              <p>
                <strong>Number of Pages:</strong> {book.num_pages}
              </p>
              <p>
                <strong>Ratings Count:</strong> {book.ratings_count}
              </p>
            </div>
            <Link
              href={`/editbook?isbn13=${book.isbn13}`}
              className="btn btn-secondary mt-6 w-full"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

// import Link from "next/link";

// const BookDetails = ({ book, onClose }) => {
//   if (!book) return null;

//   return (
//     <div className="modal modal-open">
//       <div className="modal-box">
//         <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={onClose}>✕</button>
//         <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
//         <img src={book.thumbnail} alt={book.title} className="w-32 h-48 mb-4" />
//         <p>{book.description}</p>
//         <p className="mt-4"><strong>Authors:</strong> {book.authors}</p>
//         <p><strong>Categories:</strong> {book.categories}</p>
//         <p><strong>Published Year:</strong> {book.published_year}</p>
//         <p><strong>Average Rating:</strong> {book.average_rating}</p>
//         <p><strong>Number of Pages:</strong> {book.num_pages}</p>
//       </div>
//       <Link href={`/editbook?isbn13=${book.isbn13}`} className="btn btn-secondary w-full">
//           Edit
//         </Link>
//     </div>
//   );
// };

// export default BookDetails;

