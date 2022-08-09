import { derived, readable, writable } from 'svelte/store';

export const count = writable(0);
export const time = readable(new Date(), (set) => {
  const interval = setInterval(() => set(new Date()), 1000);

  return () => clearInterval(interval);
});

const start = new Date();

export const elapsedTime = derived(time, ($time) =>
  Math.round(($time.getTime() - start.getTime()) / 1000)
);

const createCount = () => {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    increment: (step: number = 1) => update((value) => value + step),
    decrement: (step: number = 1) => update((value) => value - step),
    reset: (resetVal: number = 0) => set(resetVal),
  };
};

export const customCount = createCount();
