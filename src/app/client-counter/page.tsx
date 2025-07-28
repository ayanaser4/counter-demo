"use client";

import { useState } from "react";

export default function ClientCounterPage() {
    const [count, setCount] = useState(0);
  return (<div className="flex flex-col gap-4">
    <p>Count: {count}</p>
    <button className="flex flex-row items-center justify-center p-2 border border-black bg-red-200 rounded shadow-md" onClick={() => setCount(count + 1)}>Increment</button>
    <button className="flex flex-row items-center justify-center p-2 border border-black bg-blue-200 rounded shadow-md" onClick={() => setCount(count - 1)}>Decrement</button>
  </div>);
}
