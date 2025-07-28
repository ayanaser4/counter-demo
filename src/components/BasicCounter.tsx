"use client";

import { useEffect, useState } from "react";
import { useEventBus } from "../providers/event-bus.provider";

export default function BasicCounter() {
  const eventBus = useEventBus();
  let [count, setCount] = useState(0);

  function incrementCommandHandler() {
    console.log("increment command handler called");
    count = count + 1;
    setCount(count);
  }

  function decrementCommandHandler() {
    console.log("decrement command handler called");
    count = count - 1;
    setCount(count);
  }

  useEffect(() => {
    console.log("component mounted, subscribing to events");
    eventBus.on("increment", incrementCommandHandler);

    eventBus.on("decrement", decrementCommandHandler);

    return () => {
      console.log(
        "component unmounted, unsubscribing from events and protecting memory from leaks"
      );
      eventBus.off("increment", incrementCommandHandler);
      eventBus.off("decrement", decrementCommandHandler);
    };
  }, [eventBus]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
