import "./App.css";
import { SubscriberStateValue1Updater } from "./components/SubscriberStateValue1Updater";
import { SubscriberStateValue1Subscriber } from "./components/SubscriberStateValue1Subscriber";
import { SubscriberStateValue2Updater } from "./components/SubscriberStateValue2Updater";
import { SubscriberStateValue2Subscriber } from "./components/SubscriberStateValue2Subscriber";

function App() {
  return (
    <>
      <SubscriberStateValue1Updater />
      <SubscriberStateValue1Subscriber />
      <SubscriberStateValue2Updater />
      <SubscriberStateValue2Subscriber />
    </>
  );
}

export default App;
