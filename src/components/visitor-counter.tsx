'use client';

import { useEffect, useState } from 'react';

export function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is a simulation and does not represent real visitor data.
    // In a real application, this would be connected to a backend service.
    const hasVisited = localStorage.getItem('yoloo-visitor');
    let initialCount = 0;
    
    try {
        const storedCount = localStorage.getItem('yoloo-visitor-count');
        if (storedCount) {
            initialCount = parseInt(storedCount, 10);
        }
    } catch (error) {
        console.error("Could not parse visitor count from localStorage", error);
    }
    
    if (!hasVisited) {
      const newCount = initialCount + 1;
      setCount(newCount);
      localStorage.setItem('yoloo-visitor', 'true');
      localStorage.setItem('yoloo-visitor-count', newCount.toString());
    } else {
      setCount(initialCount);
    }
  }, []);

  const formattedCount = count.toString().padStart(6, '0');

  return (
    <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg text-center">
      <h4 className="text-sm font-semibold text-primary mb-1">Visitor Counter</h4>
      <div className="flex space-x-1">
        {formattedCount.split('').map((digit, index) => (
          <div
            key={index}
            className="w-6 h-8 flex items-center justify-center bg-card dark:bg-primary/10 rounded-md text-xl font-mono text-foreground"
          >
            {digit}
          </div>
        ))}
      </div>
    </div>
  );
}
