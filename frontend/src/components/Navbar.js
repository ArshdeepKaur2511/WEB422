// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Epic Read
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><Link href="/books">Books</Link></li>
          <li><Link href="#!">Link 1</Link></li>
          <li><Link href="#!">Link 2</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
