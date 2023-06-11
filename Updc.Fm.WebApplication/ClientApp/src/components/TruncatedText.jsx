import React from 'react';

function TruncatedText({ text, maxLength }) {
  if (!text) {
    return null; // or return an empty string, or any other fallback behavior
  }

  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return <span>{truncatedText}</span>;
}

export default TruncatedText;
