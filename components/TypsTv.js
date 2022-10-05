import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
const Typs = (props) => {
  const router = useRouter();
  const size = props.size;
  const items = props.data;
  const [currentSize, setCurrentSize] = useState();
  const sizes = {
    xs: 0,
    sm: 0,
    md: 1,
    lg: 0,
    xl: 1,
    "2xl": 4,
  };
  const getSize = (width) => {
    if (width < 640) return "xs";
    else if (width < 768) return "sm";
    else if (width < 1024) return "md";
    else if (width < 1280) return "lg";
    else if (width < 1536) return "xl";
    else if (width > 1536) return "2xl";
  };

  useEffect(() => {
    setCurrentSize(getSize(size.width));
  }, [size]);
  return (
    <div className="w-full">
      <div className="container px-8 mx-auto pt-6 flex flex-col gap-5">
        <ul className="text-slate-100 text-2xl w-full lg:pl-24  cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6   gap-5  text-center">
          {items
            .slice(0, items.length - [sizes[currentSize]])
            .map((type, index) => {
              return (
                <Link key={type.id} href={`${router.pathname}/list/${type.id}`}>
                  <motion.li
                    key={type.id}
                    className={`py-14 ${
                      index % 2 === 0
                        ? `rounded-2xl bg-purple-800 cursor-pointer`
                        : "bg-slate-800 rounded-2xl"
                    }`}
                    whileHover={{ skew: -3 }}
                  >
                    <h1>{type.name}</h1>
                  </motion.li>
                </Link>
              );
            })}
        </ul>
        <ul className="text-slate-100 text-2xl w-full lg:pl-24  cursor-pointer flex items-center gap-5  text-center">
          {items
            .slice(items.length - [sizes[currentSize]], items.length)
            .map((type, index) => {
              return (
                <Link key={type.id} href={`${router.pathname}/list/${type.id}`}>
                  <motion.li
                    key={type.id}
                    className={` py-14 w-full ${
                      index % 2 === 0
                        ? `rounded-2xl bg-purple-800 cursor-pointer`
                        : "bg-slate-800 rounded-2xl"
                    }`}
                    whileHover={{ skew: 4 }}
                  >
                    <h1>{type.name}</h1>
                  </motion.li>
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Typs;
