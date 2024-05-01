import React from "react";

const PokemonThumbnail = (props: {
  id: string;
  name: string;
  image: string;
  type: string;
}) => {
  return (
    <div className="flex flex-col items-center max-w-full thumbnail-container w-85 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <img
        className="size-1/2 object-contain rounded-t-xl"
        src={props.image}
        alt={props.name}
      />
      <div className="detail-wrapper px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">
          ID : {props.id}
        </span>
        <p className="text-lg font-bold text-black truncate block capitalize">
          {props.name}
        </p>
        <p className="text-gray-500 mr-3 capitalize text-x">
          Type : {props.type}
        </p>
      </div>
    </div>
  );
};

export default PokemonThumbnail;
