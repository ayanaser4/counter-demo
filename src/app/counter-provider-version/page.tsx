"use client";

import BasicCounter from "@/components/BasicCounter";
import { useEventBus } from "@/providers/event-bus.provider";

export default function CounterProviderVersionPage() {
  const eventBus = useEventBus();
  return (
    <div className="flex flex-col gap-4">
      <BasicCounter/>
      <button
        className="flex flex-row items-center justify-center p-2 border border-black bg-red-200 rounded shadow-md"
        onClick={() => eventBus.emit("increment")}
      >
        Increment
      </button>
      <button
        className="flex flex-row items-center justify-center p-2 border border-black bg-blue-200 rounded shadow-md"
        onClick={() => eventBus.emit("decrement")}
      >
        Decrement
      </button>
    </div>
  );
}
