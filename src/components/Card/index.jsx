import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, image, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div
      className="relative cursor-pointer rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
      onClick={handleClick}
    >
      <div className="aspect-[3/4] w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white drop-shadow-lg">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;