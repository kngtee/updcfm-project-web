import React from 'react';

function TruncatedText({ text, maxLength }) {
  if (!text) {
    return null;
  }

  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return <span>{truncatedText}</span>;
}

export default TruncatedText;
