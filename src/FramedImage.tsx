import React, { useState, useEffect } from 'react';
import './index.css';
import { motion, AnimatePresence } from 'framer-motion';

const FancyFramedImage = ({ imageUrl, altText, onLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
      onLoad();
    };
    img.src = imageUrl;
  }, [imageUrl, onLoad]);

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.img
          key={imageUrl}
          src={imageUrl}
          alt={altText}
          className="fancy-framed-image max-w-3xl rounded-lg shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            maxWidth: '80vw',
            maxHeight: '75vh',
            width: 'auto',
            transform: 'translateY(-5vh)',
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default FancyFramedImage;