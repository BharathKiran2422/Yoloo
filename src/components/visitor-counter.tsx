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
        const now = Date.now();
        const lastVisit = localStorage.getItem('yoloo-last-visit');
        const cooldown = 30 * 1000; // 30 seconds

        if (!lastVisit || now - parseInt(lastVisit, 10) > cooldown) {
          const response = await fetch("/api/visitor", { 
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            }
          });
          
          const result = await response.json();
          
          if (result.success) {
            localStorage.setItem('yoloo-last-visit', now.toString());
          }
        }
      } catch (error) {
        console.error("Error incrementing visitor count:", error);
      }
    };

    // Set up real-time listener
    const ref = doc(db, "counters", "visitors");
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      if (snapshot.exists()) {
        setCount(snapshot.data().count || 0);
      }
    });

    // Increment the visitor count
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