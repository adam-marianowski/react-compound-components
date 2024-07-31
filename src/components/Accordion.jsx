import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AccordionContext = createContext();
const useAccordionContext = () => useContext(AccordionContext);

const AccordionItemContext = createContext();
const useAccordionItemContext = () => useContext(AccordionItemContext);

export default function Accordion(props) {
  const [openItemId, setOpenItemId] = useState();
  const toggle = (id) => setOpenItemId((p) => (p === id ? null : id));
  const contextValue = { openItemId, toggle };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul>{props.children}</ul>
    </AccordionContext.Provider>
  );
}

function AccordionTitle(props) {
  const id = useAccordionItemContext();
  const ctx = useAccordionContext();
  return <h3 onClick={() => ctx.toggle(id)}>{props.children}</h3>;
}

function AccordionContent(props) {
  const ctx = useAccordionContext();
  const id = useAccordionItemContext();
  const className = ctx.openItemId === id ? "" : "hidden";
  return <div className={className} style={{display: ctx.openItemId === id? "" : "none"}}>{props.children}</div>;
}

function AccordionItem(props) {
  return (
    <AccordionItemContext.Provider value={props.id}>
      <li>{props.children}</li>
    </AccordionItemContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;