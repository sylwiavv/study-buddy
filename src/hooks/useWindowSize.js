import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight + ' px',
    width: window.innerWidth + ' px',
  });

  const handleWindowResize = () => {
    setDimensions({
      height: window.innerHeight + ' px',
      width: window.innerWidth + ' px',
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return dimensions;
};
