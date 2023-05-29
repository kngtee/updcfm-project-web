import React from 'react';

const Buton = (props) => {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
};

export default Buton;
