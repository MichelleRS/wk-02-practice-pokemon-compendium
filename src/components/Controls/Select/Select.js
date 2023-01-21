// imports
import React from 'react';

export default function Select({ types, handleSelectTypeChange }) {
  return (
    <select onChange={(e) => handleSelectTypeChange(e.target.value)}>
      {/* use .map to return pokemon types in select dropdown */}
      {types.map(({ type }) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
