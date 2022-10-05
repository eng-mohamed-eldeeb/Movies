import "../styles/index.css";
import SearchBar from "./../components/searchBar";
import NavBar from "./../components/NavBar";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-slate-900 min-h-screen">
      <NavBar />
      <SearchBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
