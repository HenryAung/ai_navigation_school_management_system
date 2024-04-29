'use client'
import React from 'react';

const PredictionResult = ({ score }) => {
  return (
    <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Prediction:</strong>
      <span className="block sm:inline">Your predicted score is {score}</span>
    </div>
  );
};

export default PredictionResult;