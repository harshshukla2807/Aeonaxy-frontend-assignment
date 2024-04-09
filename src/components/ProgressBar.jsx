import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="flex w-[80%] h-1 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-200" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
      <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-green-600" style={{ width: `${progress}%` }}>
        
      </div>
    </div>
  );
};

export default ProgressBar;
