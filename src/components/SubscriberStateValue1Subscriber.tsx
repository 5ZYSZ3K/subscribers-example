import { useEffect, useState, type FC } from "react";
import { useSubscriberState } from "../state/useSubscriberState";

export const SubscriberStateValue1Subscriber: FC = () => {
  const { subscribeToValue1, initialValue1 } = useSubscriberState();
  const [value1, setValue1] = useState(initialValue1);

  useEffect(() => {
    const unsubscribe = subscribeToValue1((newValue) => {
      setValue1(newValue);
    });

    return () => {
      unsubscribe();
    };
  }, [subscribeToValue1]);

  console.log("SubscriberStateValue1Subscriber rendered");

  return (
    <div>
      <h2>Subscriber State Value 1 Subscriber</h2>
      <p>Value 1: {value1}</p>
    </div>
  );
};
