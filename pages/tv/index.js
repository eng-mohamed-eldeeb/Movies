import Typs from "../../components/TypsTv";
import useWindowSize from "./../../hooks/useWindowSize";
const Tv = (props) => {
  const size = useWindowSize();
  console.log(props.data.genres);
  return (
    <div className="h-full w-full">
      <Typs size={size} data={props.data.genres} />
    </div>
  );
};
export async function getServerSideProps() {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/tv/list?api_key=33cc0aef002c1a8fa4097c4a7ffe04f7&language=en-US"
  );
  const data = await res.json();
  return { props: { data } };
}
export default Tv;
