'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

export function VisitorCounter() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const incrementVisitor = async () => {
      try {
        console.log("Attempting to increment visitor count...");
        
        const now = Date.now();
        const lastVisit = localStorage.getItem('yoloo-last-visit');
        const cooldown = 30 * 1000; // 30 seconds
        
        console.log("Last visit:", lastVisit, "Current time:", now);

        if (!lastVisit || now - parseInt(lastVisit, 10) > cooldown) {
          console.log("Cooldown passed, making API call...");
          
          const response = await fetch("/api/visitor", { 
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            }
          });
          
          const result = await response.json();
          console.log("API response:", result);
          
          if (result.success) {
            localStorage.setItem('yoloo-last-visit', now.toString());
            console.log("Visitor count incremented successfully");
          } else {
            console.error("API returned error:", result.error);
          }
        } else {
          console.log("Cooldown active, skipping increment");
        }
      } catch (error) {
        console.error("Error incrementing visitor count:", error);
      }
    };

    // Set up real-time listener first
    const ref = doc(db, "counters", "visitors");
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      if (snapshot.exists()) {
        const newCount = snapshot.data().count || 0;
        console.log("Real-time update received, new count:", newCount);
        setCount(newCount);
      } else {
        console.log("Document doesn't exist yet");
        setCount(0);
      }
    }, (error) => {
      console.error("Error in real-time listener:", error);
    });

    // Then increment the visitor count
    incrementVisitor();

    return () => unsubscribe();
  }, []);

  if (!mounted) {
    return (
      <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg text-center">
        <h4 className="text-sm font-semibold text-primary mb-1">Visitor Counter</h4>
        <div className="flex space-x-1">
          {'000000'.split('').map((digit, index) => (
            <div
              key={index}
              className="w-6 h-8 flex items-center justify-center bg-card dark:bg-primary/10 rounded-md text-xl font-mono text-foreground"
            >
              -
            </div>
          ))}
        </div>
      </div>
    );
  }

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