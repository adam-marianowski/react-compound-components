import ReactDOM from "react-dom/client";
import Accordion from "./components/Accordion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Accordion>
    <Accordion.Item id="1">
      <Accordion.Title> Accordion1</Accordion.Title>
      <Accordion.Content>Accordion1 content</Accordion.Content>
    </Accordion.Item>

    <Accordion.Item id="2">
      <Accordion.Title>Accordion2</Accordion.Title>
      <Accordion.Content>Accordion2 content</Accordion.Content>
    </Accordion.Item>

    <Accordion.Item id="3">
      <Accordion.Title>Accordion3</Accordion.Title>
      <Accordion.Content>Accordion3 content</Accordion.Content>
    </Accordion.Item>
  </Accordion>
);
