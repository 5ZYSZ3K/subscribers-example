import { useSubscriberState } from "../state/useSubscriberState";

export const SubscriberStateValue2Updater: React.FC = () => {
  const { changeValue2 } = useSubscriberState();

  const handleUpdateValue2 = () => {
    changeValue2((prevValue) => prevValue + 1);
  };

  console.log("SubscriberStateValue2Updater rendered");

  return (
    <div>
      <h2>Subscriber State Value 2 Updater</h2>
      <button onClick={handleUpdateValue2}>Increment Value 2</button>
    </div>
  );
};
