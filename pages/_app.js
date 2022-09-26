import "../styles/index.css";
import SearchBar from './../components/searchBar';
import NavBar from './../components/NavBar';
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-slate-900">
      <NavBar />
      <SearchBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
