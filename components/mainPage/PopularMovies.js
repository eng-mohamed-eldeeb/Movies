import Headers from "./../supComponents/Headers";
import { TbMovie } from "react-icons/tb";

const PopularMovies = (props) => {
  const popularMovies = props.popularMovies.slice(0,6)
  return (
    <main className="container px-2 pt-5 m-auto lg:pl-28 xl:px-20">
      <Headers title={"Popular"} type={"MOIE"} />
      <ul className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded scrollbar-thumb-gray-500 pt-2 w-full content-evenly px-2  grid grid-cols-2 xl:grid-cols-3 gap-4 overflow-y-auto text-white">
        {popularMovies.map((movie) => (
          <li key={movie.id} className="w-46 xl:h-auto">
            <div className="relative">
                <img
                  className="rounded-md"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                />
            </div>
              <div className=" z-10 flex gap-3 mt-2 content-center justify-items-end">
                <h4 className="">{movie.original_title}</h4>
                <h4 className="flex gap-2">
                  <TbMovie size={20} />
                  {movie.release_date}
                </h4>
              </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PopularMovies;
