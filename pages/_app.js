import "../styles/index.css";
import SideBar from './../components/SideBar';
import SearchBar from './../components/searchBar';
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-slate-900">
      <SideBar />
      <SearchBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
