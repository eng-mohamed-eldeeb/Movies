import "../styles/index.css";
import SearchBar from "./../components/searchBar";
import NavBar from "./../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Movies land</title>
        <link rel="icon" type="image/png" href="/videoplayer.png"></link>
      </Head>
      <div className="bg-slate-900 min-h-screen">
        <NavBar />
        <SearchBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
