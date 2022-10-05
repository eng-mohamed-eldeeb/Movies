import Headers from "../supComponents/Headers";
import { TbMovie } from "react-icons/tb";
import { GiPocketRadio } from "react-icons/gi";
import { motion } from "framer-motion";
import Link from 'next/link';
const NoneTrending = (props) => {
  const popularMovies = props.data.slice(0, 6);
  return (
    <main className="lg:ml-16 px-2 pt-5 m-auto lg:pl-14 xl:px-20">
      <Headers title={props.head} type={props.type} />
      <ul className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded scrollbar-thumb-gray-500 pt-2 w-full content-evenly px-2  grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto text-white">
        {popularMovies.map((movie) => (
          <motion.li
            whileHover={{ skew: -2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            key={movie.id}
            className="w-46 xl:h-auto cursor-pointer"
          >
            <Link href={`${props.type.toLowerCase() === 'tv series' ? 'tv' : 'movie'}/${movie.id}`}>
              <div>
                <div className="relative">
                  <img
                    className="rounded-md"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  />
                </div>
                <div className=" z-10 flex gap-3 mt-2 content-center justify-items-end">
                  <h4 className="flex text-sm gap-2">
                    {movie.release_date}
                    {movie.first_air_date}
                    {props.type === "MOVIE" ? (
                      <TbMovie size={25} />
                    ) : (
                      <GiPocketRadio size={25} />
                    )}
                  </h4>
                </div>
                <h4 className="">
                  {movie.title}
                  {movie.name}
                </h4>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </main>
  );
};

export default NoneTrending;
