import SideBar from "./../components/SideBar";

export default function Home(props) {
  const data = props.data.results;
  const movies = data.filter(m => m.media_type === 'movie');
  
  return (
    <div className="h-screen">
      <div className="container px-10 pt-2">
        <div className="flex gap-5 text-white">
          <h3 className="text-lg">Trending</h3>
          <span className="p-1 text-xs rounded-lg border border-white">
            MOVIES
          </span>
        </div>
        <ul className=" pt-2 w-full grid grid-flow-col grid-col-1 gap-5 h-56 overflow-y-auto text-white">
          {movies.map((movie) => (
            <li key={movie.id} className="">
              <div className="w-60 relative">
                <div className="absolute flex gap-2 content-center justify-center bottom-5 left-5">
                  <h4 className="">{movie.original_title}</h4>
                  <h4 className="">{movie.release_date}</h4>
                </div>
                <img
                  className=""
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=33cc0aef002c1a8fa4097c4a7ffe04f7`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
