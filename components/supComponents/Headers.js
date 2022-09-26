import { TbMovie } from 'react-icons/tb';
const Headers = (props) => {
  return (
    <div className="flex py-3 gap-5 text-white">
      <h3 className="text-2xl">{props.title}</h3>
      {props.type === "TV SERIES" ? <span className="p-2 text-xs rounded-lg border text-slate-600 bg-white">TV SERIES</span> : <span className="p-2 text-xs rounded-lg border border-white">MOVIES</span>}
    </div>
  );
};

export default Headers;
