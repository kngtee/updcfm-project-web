import React, { useState, useEffect } from 'react';
import './Loader.css';
import { MutatingDots } from 'react-loader-spinner';

const Loader = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader">
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
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Loader;
