import NoneTrending from "../components/mainPage/NoneTrending";
import Trending from "../components/mainPage/YSlidesShow";

export default function Home(props) {
  const data = props.trendingMovies.results;
  const popularMovies = props.popularMovies.results
  const upcoming = props.upcoming.results
  const topRated = props.topRated.results
  const tvpopular = props.tvpopular.results
  // console.log(data)
  const trendingMovies = data.filter(m => m.media_type === 'movie');
  const trendingTv = data.filter(m => m.media_type === "tv");
  console.log(trendingTv)

  return (
    <>
      <Trending movies={trendingMovies} head="Trending" type="MOVIES" />
      <NoneTrending data={popularMovies} head="Now Playing" type="MOVIES"/>
      <NoneTrending data={upcoming} head="Upcoming" type="MOVIES"/>
      <NoneTrending data={topRated} head="Top Rated" type="MOVIES"/>
      <Trending movies={trendingTv} head="Trending" type="TV SERIES" />
      <NoneTrending data={tvpopular} head="Top Rated" type="TV SERIES"/>
    </>
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
  
  res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=33cc0aef002c1a8fa4097c4a7ffe04f7&language=en-US&page=1`
  );

  const upcoming = await res.json();

  res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=33cc0aef002c1a8fa4097c4a7ffe04f7&language=en-US&page=1`
  );

  const topRated = await res.json();

  res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=33cc0aef002c1a8fa4097c4a7ffe04f7&language=en-US&page=1`
  );

  const tvpopular = await res.json();

  // Pass data to the page via props
  return { props: { trendingMovies, popularMovies, upcoming ,topRated, tvpopular } };
}