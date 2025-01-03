import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, image, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div 
      className="relative cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-3xl rounded-lg overflow-hidden"
      onClick={handleClick}
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="text-xl md:text-2xl font-semibold text-white opacity-90">{name}</h3>
      </div>
    </div>
  );
};

export default Card;
