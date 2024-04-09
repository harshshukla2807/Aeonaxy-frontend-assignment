import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function LoadingPage({ setCurrentStep }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer;
    if (isLoading) {
      // Start increasing the progress value over time
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          // Increase the progress value by 1
          const newProgress = prevProgress + 1;
          // If the progress reaches 100, stop the timer and set isLoading to false
          if (newProgress >= 100) {
            clearInterval(timer);
            setIsLoading(false);
            setCurrentStep(7);
          }
          return newProgress;
        });
      }, 30); // Change the interval as needed for smoothness
    }
    // Clean up the timer when the component unmounts or when isLoading is set to false
    return () => clearInterval(timer);
  }, [isLoading, setCurrentStep]);

  return (
    <div className="flex flex-col items-center mt-[200px] h-screen gap-6">
      <div className='h-20 w-20 '>
        {isLoading && (
          <CircularProgressbar
            value={progress}
            strokeWidth={14}
            styles={buildStyles({
              strokeLinecap: 'butt', // Use 'butt' to prevent animation reset
              textSize: '10px',
              pathTransition: 'none', // Disable CSS animation for smoother animation
              trailColor: '#d6d6d6',
              backgroundColor: '#c7c53e',
              pathColor: '#f2b234',
            })}
          />
        )}
        
      </div>
      <h1 className='md:w-[35rem] text-center font-extrabold text-lg mr-10 ml-10'>Finding learning path recommendations for you based on
your responses </h1>
    </div>
  );
}

export default LoadingPage;
