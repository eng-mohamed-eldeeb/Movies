import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import moviesTyps from "../assets/movies_type_array";
import tv_list from "../assets/tv_array_list";
const Typs = (props) => {
  const router = useRouter();
  const color = props.color;
  var data;
  if (router.pathname === "tv") {
    data = tv_list;
  } else {
    data = moviesTyps;
  }
  console.log(data);
  const last = data[data.length - 1];
  data = data.slice(0, -1);
  return (
    <ul className="text-slate-100 container p-4 m-auto w-full cursor-pointer grid lg:grid-cols-6  grid-cols-2 gap-7  text-center">
      {data.map((type, index) => {
        let classes;
        if (index % 2 === 0) {
          classes = `px-5 py-14  rounded-2xl ${color} cursor-pointer`;
        } else {
          classes = "px-5 py-14 bg-slate-800 rounded-2xl";
        }
        return (
          <Link href={`${router.pathname}/list/${type.id}`}>
            <motion.li
              className={classes}
              whileHover={{ scale: 0.95 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <h1>{type.name}</h1>
            </motion.li>
          </Link>
        );
      })}
      <motion.li
        className={`px-5 py-14  rounded-2xl ${color} cursor-pointer lg:col-span-6`}
        whileHover={{ scale: 0.9 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <Link href={`${router.pathname}/list/${last.id}`}>
          <h1>{last.name}</h1>
        </Link>
      </motion.li>
    </ul>
  );
};

export default Typs;
