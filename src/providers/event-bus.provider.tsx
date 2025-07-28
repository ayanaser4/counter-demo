"use client";

import { createContext, useContext } from "react";
import { EventEmitter } from "events";

const EventEmitterContext = createContext<EventEmitter | null>(null);

export function EventBusProvider({ children }: { children: React.ReactNode }) {
  const eventBus = new EventEmitter();

  return (
    <EventEmitterContext.Provider value={eventBus}>
      {children}
    </EventEmitterContext.Provider>
  );
}

export const useEventBus = () => {
  const context = useContext(EventEmitterContext);
  if (!context) {
    throw new Error("useEventBus must be used within an EventBusProvider");
  }
  return context;
};