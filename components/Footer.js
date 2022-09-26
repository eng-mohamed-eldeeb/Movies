import React from "react";

const Footer = () => {
  return (
    <main className="w-full h-44 flex gap-4 flex-col content-center items-center pt-20">
      <h3 className="text-xs text-slate-500">Powered by</h3>
      <div className="w-52">
        <a href="https://www.themoviedb.org/about/logos-attribution" target="_blank" >
          <img src="https://hy-entertainment.netlify.app/_next/static/media/icon-tmdb-long.72aae4fd.svg" />
        </a>
      </div>
    </main>
  );
};

export default Footer;
