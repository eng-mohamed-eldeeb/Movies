import React from "react";
import ImgConatiner from "../../../../components/Details/ImgConatiner";
const Index = (props) => {
  const data = props.data;
  console.log(data);
  const casts = props.movieCasts.cast;
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start lg:px-36 p-5 lg:gap-20 gap-4  items-center">
      <div className="w-full lg:flex lg:justify-end">
        <div className="w-4/5 m-auto">
          <ImgConatiner
            poster={`https://image.tmdb.org/t/p/w400/${data.poster_path}`}
          />
        </div>
      </div>
      <div className="">
        <div className="pt-5  flex flex-col gap-4 lg:items-start content-center items-center">
          <h1 className="text-4xl text-slate-50">{data.original_title}</h1>
          <p className="text-sm text-slate-500">{data.tagline}</p>
          <h1 className="text-6xl text-white">
            {data.vote_average.toFixed(1)}
          </h1>
        </div>
        <div className=" py-5 flex lg:justify-between justify-evenly items-center">
          <div className="text-center">
            <h3 className="text-sm text-white text-opacity-50 font-semibold">
              length
            </h3>
            <h4 className="text-md  text-white font-semibold">
              {data.runtime} min.
            </h4>
          </div>
          <div className="text-center">
            <h3 className="text-sm text-white text-opacity-50 font-semibold">
              language
            </h3>
            <h4 className="text-md  text-white font-semibold">
              {data.spoken_languages[0].english_name}
            </h4>
          </div>
          <div className="text-center">
            <h3 className="text-sm text-white text-opacity-50 font-semibold">
              date
            </h3>
            <h4 className="text-md  text-white font-semibold">
              {data.release_date}
            </h4>
          </div>
          <div className="text-center">
            <h3 className="text-sm text-white text-opacity-50 font-semibold">
              status
            </h3>
            <h4 className="text-md  text-white font-semibold">
              {data.status ? data.status : "N/A"}
            </h4>
          </div>
        </div>
        <div>
          <h2 className="text-white text-md font-semibold">Genres</h2>
          <ul className="flex gap-4 pt-3">
            {data.genres.map((g) => (
              <li className="border-2 p-1 rounded-md text-xs text-white ">
                {g.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-5">
          <h2 className="text-white text-md font-semibold">synopsis</h2>
          <p className="text-base pt-2 text-white">{data.overview}</p>
        </div>
        <div>
          <h2 className="text-white text-md font-semibold">casts</h2>
          <ul className="text-white text-xs font-semibold flex flex-wrap gap-3">
            {casts.map((cast) => (
              <li className="border-2 p-1 rounded-lg">{cast.name}</li>
            ))}
          </ul>
        </div>
        <div className="flex">
          {data.homepage && (
            <div className="px-2 py-3 bg-cyan-800 mt-5 rounded-lg cursor-pointer">
              <a className="text-white text-2xl " href={data.homepage}>
                website
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const tvId = context.params.tvId;
  let res = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}?api_key=33cc0aef002c1a8fa4097c4a7ffe04f7&language=en-US`
  );
  const data = await res.json();
  res = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=33cc0aef002c1a8fa4097c4a7ffe04f7&language=en-US`
  );
  const movieCasts = await res.json();
  return {
    props: { data, movieCasts },
  };
}

export default Index;
