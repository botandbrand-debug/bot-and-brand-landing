import React from 'react';

const ServiceCard = ({ title, description, gradient }) => {
  return (
    <div
      className={`p-6 rounded-xl ${gradient} text-black dark:text-white shadow-card transition-transform hover:scale-105`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
