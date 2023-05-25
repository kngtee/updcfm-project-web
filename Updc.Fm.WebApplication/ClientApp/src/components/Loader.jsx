import React, { useState, useEffect } from 'react';
import './Loader.css';
import { MutatingDots } from 'react-loader-spinner';

const Loader = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="loader">
      {loading ? (
        <div className="spinner-container">
          <MutatingDots
            height="100"
            width="100"
            color="#A73439"
            secondaryColor="white"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Loader;
