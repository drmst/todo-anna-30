import React from "react";
import "./styles.css";
import { useState } from "react";

export const ListItem = ({
  title,
  completed,
  handleClick,
  id,
  handleDelete,
  setData,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (id) => {
    setData((prevData) => {
      return prevData.map((dataItem) =>
        dataItem.id === id ? { ...dataItem, title: newTitle } : dataItem
      );
    });
    setIsEditing(false);
  };
  return isEditing ? (
    <div className="todo-item">
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />

      <div>
        <button onClick={() => handleSave(id)}>Save</button>
      </div>
    </div>
  ) : (
    <div className="todo-item">
      <li
        className={completed ? "completed" : ""}
        onClick={() => handleClick(id)}
      >
        {title}
      </li>
      <div>
        <button onClick={() => handleDelete(id)}>X</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};
