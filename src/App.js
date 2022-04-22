import logo from "./logo.svg";
// import "./App.css";
import { useTabs } from "./hooks/useTabs";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of section 1.",
  },
  {
    tab: "Section 2",
    content: "I'm the content of section 2.",
  },
];

function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => {
        return <button onClick={() => changeItem(index)}>{section.tab}</button>;
      })}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
