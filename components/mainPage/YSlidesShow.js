import React from "react";
import Headers from "./../supComponents/Headers";
import { TbMovie } from "react-icons/tb";
import { GiPocketRadio } from "react-icons/gi";

const YSlidesShow = (props) => {
  const movies = props.movies;
  return (
    <main className="container px-2 pt-2 m-auto lg:pl-14 xl:px-20">
      <Headers title={props.head} type={props.type} />
      <ul className="scrollbar-thin pb-2 scrollbar-thumb-rounded-full scrollbar-track-rounded scrollbar-thumb-gray-500 pt-2 w-full grid grid-rows-1 grid-flow-col gap-5 overflow-y-auto text-white">
        {movies.map((movie) => (
          <li key={movie.id} className="w-64 lg:w-96">
            <div className="relative">
              <div className="absolute z-10 flex gap-3 content-center justify-center text-center bottom-5 left-5">
                <h4 className="">{movie.original_title}</h4>
                <h4 className="flex gap-2">
                  {movie.first_air_date}
                  {movie.media_type === "movie" ? <TbMovie size={20} /> : <GiPocketRadio size={20} />}
                  {movie.release_date}
                </h4>
              </div>
                <img
                  className="rounded-md"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default YSlidesShow;
