import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;

  return (
    <nav className="bg-base-200 p-4 shadow-lg border-b-2 ">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div><Link className={`btn text-2xl font-bold normal-case ${isActive('/') ? 'btn-active' : 'btn-ghost'}`} href="/">Epic Reads</Link></div>
        <div className="space-x-4 flex items-center">
          <Link href="/mybooks" className={`btn ${isActive('/mybooks') ? 'btn-primary' : 'btn-outline btn-primary'}`}>My Books</Link>
          <Link href="/books" className={`btn ${isActive('/books') ? 'btn-active' : 'btn-ghost'}`}>Books</Link>
          <Link href="/addbook" className={`btn ${isActive('/addbook') ? 'btn-active' : 'btn-ghost '}`}>Add book</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
