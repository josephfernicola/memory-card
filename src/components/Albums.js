import React from "react";

const Albums = (props) => {
  const { img, name } = props;

  return (
    <div className="album">
      <img src={img} alt={name} />
      <br></br>
      <div>{name}</div>
    </div>
  );
};

export default Albums;
