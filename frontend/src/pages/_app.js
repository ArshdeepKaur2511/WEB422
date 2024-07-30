import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from '@/components/Layout';
// import MainPage from '@/components/MainPage';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<MainPage />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
