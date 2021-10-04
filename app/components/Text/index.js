import React from 'react';

const maxTextLength = 80;

function CustomText({ text, maxLength = maxTextLength }) {
  const filteredText = text
    ? `${text.slice(0, maxLength)}${text.length > maxLength ? '...' : ''}`
    : '';

  return <>{filteredText}</>;
}

export default CustomText;
