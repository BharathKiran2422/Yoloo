// A simple client-side event bus for cross-component communication.
// This is a basic implementation and not suitable for complex state management.

type EventHandler = (data: any) => void;

const events: Record<string, EventHandler[]> = {};

export function on(eventName: string, handler: EventHandler) {
  if (!events[eventName]) {
    events[eventName] = [];
  }
  events[eventName].push(handler);
}

export function dispatch(eventName: string, data: any) {
  const handlers = events[eventName];
  if (handlers) {
    handlers.forEach(handler => handler(data));
  }
}
