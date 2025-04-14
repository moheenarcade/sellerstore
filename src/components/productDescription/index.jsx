import React from 'react';
import DOMPurify from 'dompurify';

const ProductDescription = ({ description }) => {
  // Sanitize the HTML content
  const sanitizedDescription = DOMPurify.sanitize(description);

  return (
    <>
      <div 
        className="description-content mt-2"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      />
    </>
  );
};

export default ProductDescription;