import { useEffect, useState, type FC } from "react";
import { useSubscriberState } from "../state/useSubscriberState";

export const SubscriberStateValue2Subscriber: FC = () => {
  const { subscribeToValue2, initialValue2 } = useSubscriberState();
  const [value2, setValue2] = useState(initialValue2);

  useEffect(() => {
    const unsubscribe = subscribeToValue2((newValue) => {
      setValue2(newValue);
    });

    return () => {
      unsubscribe();
    };
  }, [subscribeToValue2]);

  console.log("SubscriberStateValue2Subscriber rendered");

  return (
    <div>
      <h2>Subscriber State Value 1 Subscriber</h2>
      <p>Value 1: {value2}</p>
    </div>
  );
};
