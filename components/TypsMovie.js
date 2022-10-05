import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
const Typs = (props) => {
  const router = useRouter();
  var { data, size } = props;
  const data_lenght = data.length - 4;
  var result = data.slice(data_lenght, data.length);

  let data_length = -1;
  if (size === "lg") data_length = -4;
  const last = data[data.length - 1];
  data = data.slice(0, data_length);
  if (size === "lg") {
    return (
      <div className="w-screen">
        <ul className="text-slate-100 container p-4 pl-24 m-auto w-full cursor-pointer grid grid-cols-5   gap-5  text-center">
          {data.map((type, index) => {
            let classes;
            if (index % 2 === 0) {
              classes = `px-15 py-14  rounded-2xl bg-indigo-800 cursor-pointer`;
            } else {
              classes = "px-15 py-14 bg-slate-800 rounded-2xl";
            }
            return (
              <Link key={type.id} href={`${router.pathname}/list/${type.id}`}>
                <motion.li
                key={type.id}
                  className={classes}
                  whileHover={{ skew: -3 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                >
                  <h1>{type.name}</h1>
                </motion.li>
              </Link>
            );
          })}
        </ul>
        <ul className="text-slate-100 container p-4 pl-24 m-auto w-full cursor-pointer grid grid-cols-4 gap-5  text-center">
          {result.map((cat, index) => {
            let classes;
            if (index % 2 === 0) {
              classes = `px-15 py-14 rounded-2xl bg-indigo-800 cursor-pointer`;
            } else {
              classes = "px-15 py-14 bg-slate-800 rounded-2xl";
            }
            return (
              <motion.li
              key={cat.id}
                className={classes}
                whileHover={{ skew: -3 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <Link href={`${router.pathname}/list/${cat.id}`}>
                  {cat.name}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <ul className="text-slate-100 container p-4 lg:pl-32 m-auto w-full cursor-pointer grid lg:grid-cols-6  grid-cols-2  gap-7  text-center">
        {data.map((type, index) => {
          let classes;
          if (index % 2 === 0) {
            classes = `px-5 py-14  rounded-2xl bg-indigo-800 cursor-pointer`;
          } else {
            classes = "px-5 py-14 bg-slate-800 rounded-2xl";
          }
          return (
            <Link key={type.id} href={`${router.pathname}/list/${type.id}`}>
              <motion.li
                className={classes}
                whileHover={{ skew: -3 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <h1>{type.name}</h1>
              </motion.li>
            </Link>
          );
        })}
        <motion.li
          className={`px-5 py-14  rounded-2xl bg-indigo-800 cursor-pointer lg:col-span-6`}
          whileHover={{ skew: -3 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <Link href={`${router.pathname}/list/${last.id}`}>
            <h1>{last.name}</h1>
          </Link>
        </motion.li>
      </ul>
    );
  }
};

export default Typs;
