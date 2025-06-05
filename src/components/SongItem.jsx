import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-3 rounded-xl cursor-pointer bg-white/5 hover:scale-105 hover:shadow-lg transition-transform duration-200"
    >
      <img className="rounded-xl w-full h-40 object-cover" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1 text-white truncate">{name}</p>
      <p className="text-slate-300 text-sm truncate">{desc}</p>
    </div>
  );
};

export default SongItem;
