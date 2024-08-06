// import "@/styles/globals.css";
// import { SearchQueryProvider } from "@/context/SearchContext";

// export default function App({ Component, pageProps }) {
//   return (
//   <SearchQueryProvider>
//     <Component {...pageProps} />
//   </SearchQueryProvider>);
// }

import '../styles/globals.css';
import { Provider } from 'jotai';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

