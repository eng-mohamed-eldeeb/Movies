import React from "react";
import ImgConatiner from "../../../../components/Details/ImgConatiner";
import NoneTrending from "./../../../../components/mainPage/NoneTrending";
import { motion } from "framer-motion";
import { GiPocketRadio } from "react-icons/gi";
import { TbMovie } from "react-icons/tb";
import Link from "next/link";
const Index = (props) => {
  const data = props.data.results;
  console.log(data[0]);
  return (
    <main className=" lg:px-32">
      <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-10">
        {data.map((movie) => (
          <motion.li
            whileHover={{ scale: 0.95 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            key={movie.id}
            className="relative cursor-pointer"
          >
            <Link href={`/tv/${movie.id}`}>
              <div>
                <div>
                  <img
                    className="rounded-lg"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  />
                </div>
                <div className="absolute bottom-2 left-3 bg-white p-3 rounded-lg bg-opacity-90 z-10 flex gap-3 mt-2 content-center justify-items-end">
                  <h4 className="flex text-sm gap-2">
                    <GiPocketRadio size={25} />
                  </h4>

                  <h4 className="">
                    {movie.title}
                    {movie.name}
                  </h4>
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </main>
  );
};
export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
            list_id: "301502",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const list_id = context.params.list_id;
  let res = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=33cc0aef002c1a8fa4097c4a7ffe04f7&language=en-US&with_geners=${list_id}&page=1`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Index;
