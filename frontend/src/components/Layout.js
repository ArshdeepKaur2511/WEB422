// // components/Layout.js
// import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import HeroContent from './HeroContent';

// const Layout = ({ children }) => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <HeroContent />
//       <div className="flex-grow">
//         {children}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;
import Navbar from './Navbar';
import HeroContent from './HeroContent';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroContent />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

