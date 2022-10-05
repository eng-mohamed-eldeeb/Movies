import React from "react";
import Typs from "../../components/TypsMovie";
import useWindowSize from "./../../hooks/useWindowSize";

const Movie = (props) => {
  const { width } = useWindowSize();
  const size = "sm";
  if (width > 1020) {
    size = "lg";
  }
  if (width > 1280) {
    size = "xl";
  }
  return (
    <main>
      <Typs data={props.data.genres} color="" size={size} />
    </main>
  );
};
export async function getServerSideProps() {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=33cc0aef002c1a8fa4097c4a7ffe04f7&language=en-US"
  );
  const data = await res.json();
  return { props: { data } };
}
export default Movie;
