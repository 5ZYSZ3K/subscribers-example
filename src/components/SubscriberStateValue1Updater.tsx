import { useSubscriberState } from "../state/useSubscriberState";

export const SubscriberStateValue1Updater: React.FC = () => {
  const { changeValue1 } = useSubscriberState();

  const handleUpdateValue1 = () => {
    changeValue1((prevValue) => prevValue + 1);
  };

  console.log("SubscriberStateValue1Updater rendered");

  return (
    <div>
      <h2>Subscriber State Value 1 Updater</h2>
      <button onClick={handleUpdateValue1}>Increment Value 1</button>
    </div>
  );
};
