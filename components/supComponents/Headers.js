import { TbMovie } from 'react-icons/tb';
const Headers = (props) => {
  return (
    <div className="flex gap-5 text-white">
      <h3 className="text-lg">{props.title}</h3>
      <span className="p-1 text-xs rounded-lg border border-white">{props.type}</span>
    </div>
  );
};

export default Headers;
