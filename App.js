
import Hello from "./BasicReact/ArrowFuction";
import Details from "./BasicReact/DisplayingMultipleInfo";
import Display from "./BasicReact/EmbeddedExpression";
import BasicClassComponent from "./ClassComponent/BasicClassComponent";
import ChangeMessage from "./ClassComponent/ChangeMessage";
import EventHandlingInClass from "./EventHandling/EventHandlingInClass";
import ClickMethod from "./EventHandling/FirstWayForEventHandlind";
import ThirdWayEventHandling from "./EventHandling/ThirdWayEventHandling";
import Stylesheet from "./ReactCss/Stylesheet";
// import display from "./BasicReact/EmbeddedExpression";

function App() {
  return (
    <div className="App">
      <p>Welcome!!!!!!!!!!!!!</p>
      <Stylesheet />
      <BasicClassComponent />
      <Hello />
      <Display />
      <Details name="Priyanka" designation="Java developer" years="2" />
      <ChangeMessage />
      <ClickMethod />
      <EventHandlingInClass />
      <ThirdWayEventHandling />
    </div>
  );
}

export default App;
