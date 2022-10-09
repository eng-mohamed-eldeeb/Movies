import React from "react";
import { motion } from "framer-motion";
import { TbMovie } from "react-icons/tb";
import Link from "next/link";
import Img from './../../../../components/Img';
const Index = (props) => {
  const data = props.data.results;
  return (
    <main className="px-3 lg:px-32">
      <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-10">
        {data.map((movie) => (
          <motion.li
            whileHover={{ skew: -3 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            key={movie.id}
            className="relative cursor-pointer"
          >
            <Link href={`/movie/${movie.id}`}>
              <div>
                <div>
                  {/* <img
                    className="rounded-lg"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  /> */}
                  <Img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className={"rounded-lg"}/>
                </div>
                <div className="sm:absolute bottom-3 left-3 bg-white p-3 rounded-lg bg-opacity-90 z-10 flex gap-3 mt-2 content-center justify-items-end">
                  <TbMovie size={25} />
                  <h4 className="">{movie.title}</h4>
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </main>
  );
};

export async function getServerSideProps(context) {
  const list_id = context.params.list_id;
  console.log(list_id)

  let res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=33cc0aef002c1a8fa4097c4a7ffe04f7&with_genres=${list_id}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Index;
