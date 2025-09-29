'use client';

import { useState } from 'react';

export function TestAPIComponent() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    try {
      console.log('Testing API...');
      const response = await fetch('/api/visitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      
      setResult(`Status: ${response.status}, Data: ${JSON.stringify(data)}`);
    } catch (error) {
      console.error('Error testing API:', error);
      setResult(`Error: ${error.message}`);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">API Test</h3>
      <button 
        onClick={testAPI} 
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test API Endpoint'}
      </button>
      {result && (
        <div className="mt-2 p-2 bg-gray-100 rounded">
          <pre className="text-sm">{result}</pre>
        </div>
      )}
    </div>
  );
}