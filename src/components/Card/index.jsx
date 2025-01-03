import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, image, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div
      className="relative cursor-pointer h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
      onClick={handleClick}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4 lg:p-6">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">{name}</h3>
      </div>
    </div>
  );
};

export default Card;