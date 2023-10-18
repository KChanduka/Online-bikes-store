import React from 'react';

function OffersCard(props) {
  const cardStyle = {
    backgroundImage: `url(${props.image})`,
    width: props.width, // Use the width prop
    height: props.height, // Use the height prop
  };

  return (
    <div
      className="bg-cover bg-center relative flex items-center justify-center rounded-lg "
      style={cardStyle}
    >
      <h1 className="text-white absolute text-2xl font-bold">{props.title}</h1>
    </div>
  );
}

export default OffersCard;
