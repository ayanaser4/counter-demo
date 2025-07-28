"use client";

import { incrementCounter, decrementCounter } from "@/actions/counter.actions";
import { useActionState } from "react";

export default function ServerApiCounterPage() {
  // Use server actions for increment and decrement
  const [incrementState, incrementAction, isIncrementPending] = useActionState(incrementCounter, 0);
  const [decrementState, decrementAction, isDecrementPending] = useActionState(decrementCounter, 0);

  return (
    <div className="flex flex-col gap-4">
      <p>Count: {incrementState + decrementState}</p>
      <form
        action={incrementAction}
        className="flex flex-row items-center justify-center p-2 border border-black bg-red-200 rounded shadow-md"
      >
        <input type="number" name="counter" hidden value={incrementState} />
        <button type="submit" disabled={isIncrementPending}>Increment</button>
      </form>
      <form
        action={decrementAction}
        className="flex flex-row items-center justify-center p-2 border border-black bg-blue-200 rounded shadow-md"
      >
        <input type="number" name="counter" hidden value={decrementState} />
        <button type="submit" disabled={isDecrementPending}>Decrement</button>
      </form>
    </div>
  );
}
