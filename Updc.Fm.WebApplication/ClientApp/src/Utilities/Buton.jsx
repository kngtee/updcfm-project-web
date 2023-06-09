import React from 'react';

const Buton = (props) => {
  return (
    <button
      onClick={props?.onClick}
      className={props.className}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export default Buton;
