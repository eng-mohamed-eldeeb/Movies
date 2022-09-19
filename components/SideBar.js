import Link from "next/link";
import { MdMovieCreation, MdOutlineWindow } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { GiPocketRadio } from "react-icons/gi";
const SideBar = () => {
  return (
    <div className="z-30 fixed flex lg:flex-col w-screen sm:w-11/12 lg:w-auto justify-between py-4 px-4 lg:py-8 lg:px-4 items-center lg:h-5/6 bg-slate-800 sm:left-8 sm:top-4 sm:rounded-xl">
      <Link href="/">
        <a className="cursor-pointer">
          <MdMovieCreation size={35} color={"#fc4747"} />
        </a>
      </Link>
      <div className="flex lg:flex-col justify-evenly items-center gap-5">
        <Link className="cursor-pointer" href="/">
          <a className="cursor-pointer">
            <MdOutlineWindow size={35} color={"rgba(255, 255, 255, 0.6)"} />
          </a>
        </Link>
        <Link className="cursor-pointer" href="/movie">
          <a className="cursor-pointer">
            <TbMovie size={35} color={"rgba(255, 255, 255, 0.428)"} />
          </a>
        </Link>
        <Link className="cursor-pointer" href="/tv">
          <a className="cursor-pointer">
            <GiPocketRadio size={35} color={"rgba(255, 255, 255, 0.428)"} />
          </a>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default SideBar;
