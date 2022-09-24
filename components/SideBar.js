import Link from "next/link";
import { MdMovieCreation, MdOutlineWindow } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { GiPocketRadio } from "react-icons/gi";
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter().pathname;
  return (
    <div className="z-30 fixed flex lg:flex-col w-screen sm:w-11/12 lg:w-auto justify-between py-4 px-4 lg:py-8 lg:px-4 items-center lg:h-5/6 bg-slate-800 sm:left-8 sm:top-4 sm:rounded-xl">
      <Link href="/">
        <a className={router === '/' ? "hover:text-red-600 text-slate-300 cursor-pointer" : "hover:text-red-600 text-white cursor-pointer" }>
          <MdMovieCreation size={35} color={"#fc4747"} />
        </a>
      </Link>
      <div className="flex lg:flex-col justify-evenly items-center gap-16">
        <Link href="/">
          <a className={router === '/' ? "hover:text-red-600 text-white cursor-pointer" : "hover:text-red-600 text-slate-300 cursor-pointer"}>
            <MdOutlineWindow size={30} />
          </a>
        </Link>
        <Link href="/movie">
          <a className={router === '/movie' ? "hover:text-red-600 text-white cursor-pointer" : "hover:text-red-600 text-slate-300 cursor-pointer"}>
            <TbMovie size={30} />
          </a>
        </Link>
        <Link href="/tv">
          <a className={router === '/tv' ? "hover:text-red-600 text-white cursor-pointer" : "hover:text-red-600 text-slate-300 cursor-pointer"}>
            <GiPocketRadio size={30} />
          </a>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default SideBar;
