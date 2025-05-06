import { useCallback } from "react";

const subscriberState = {
  subscribers1: [] as ((value: number) => void)[],
  subscribers2: [] as ((value: number) => void)[],
  _value1: 0,
  get value1() {
    return subscriberState._value1;
  },
  set value1(value: number) {
    subscriberState._value1 = value;
    subscriberState.subscribers1.forEach((callback) => callback(value));
  },
  _value2: 0,
  get value2() {
    return subscriberState._value2;
  },
  set value2(value: number) {
    subscriberState._value2 = value;
    subscriberState.subscribers2.forEach((callback) => callback(value));
  },
};

export const useSubscriberState = () => {
  const subscribeToValue1 = useCallback((callback: (value: number) => void) => {
    subscriberState.subscribers1.push(callback);
    callback(subscriberState.value1); // Call the callback immediately with the current value
    return () => {
      const index = subscriberState.subscribers1.indexOf(callback);
      if (index !== -1) {
        subscriberState.subscribers1.splice(index, 1);
      }
    };
  }, []);

  const subscribeToValue2 = useCallback((callback: (value: number) => void) => {
    subscriberState.subscribers2.push(callback);
    callback(subscriberState.value2); // Call the callback immediately with the current value
    return () => {
      const index = subscriberState.subscribers2.indexOf(callback);
      if (index !== -1) {
        subscriberState.subscribers2.splice(index, 1);
      }
    };
  }, []);

  const changeValue1 = useCallback(
    (updater: number | ((prevValue: number) => number)) => {
      if (typeof updater === "number") {
        subscriberState.value1 = updater;
      } else {
        subscriberState.value1 = updater(subscriberState.value1);
      }
    },
    []
  );

  const changeValue2 = useCallback(
    (updater: number | ((prevValue: number) => number)) => {
      if (typeof updater === "number") {
        subscriberState.value2 = updater;
      } else {
        subscriberState.value2 = updater(subscriberState.value2);
      }
    },
    []
  );

  return {
    subscribeToValue1,
    subscribeToValue2,
    changeValue1,
    changeValue2,
    initialValue1: subscriberState.value1,
    initialValue2: subscriberState.value2,
  };
};
