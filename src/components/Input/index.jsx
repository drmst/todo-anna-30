import { useContext } from "react";
import "./styles.css";
import { DataContext } from "../../App";
import { useState } from "react";

export const Input = () => {
  const { data, setData } = useContext(DataContext);
  const [input, setInput] = useState("");
  const handleClick = () => {
    if (input.length > 0) {
      setData([
        ...data,
        { id: data.length + 1, title: input, completed: false },
      ]);
      setInput("");
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="input-button" onClick={handleClick}>Add</button>
    </div>
  );
};
