import PopularMovies from "../components/mainPage/PopularMovies";
import Trending from "../components/mainPage/YSlidesShow";
import SideBar from "./../components/SideBar";

export default function Home(props) {
  const data = props.trendingMovies.results;
  const popularMovies = props.popularMovies.results
  // console.log(popularMovies)
  const trendingMovies = data.filter(m => m.media_type === 'movie');

  return (
    <div className="h-screen">
      <Trending movies={trendingMovies}/>
      <PopularMovies popularMovies={popularMovies}/>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  let res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=33cc0aef002c1a8fa4097c4a7ffe04f7`
  );
  const trendingMovies = await res.json();
  res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=33cc0aef002c1a8fa4097c4a7ffe04f7&language=en-US&page=1`
  );

  const popularMovies = await res.json();

  // Pass data to the page via props
  return { props: { trendingMovies, popularMovies } };
}
