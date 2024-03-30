import "./styles.css";
import { ListItem } from "../ListItem";
import { useContext, useState } from "react";
import { DataContext } from "../../App";

export const List = () => {
  const { data, setData } = useContext(DataContext);

  const handleClick = (id) => {
    setData((prevData) => {
      return prevData.map((dataItem) =>
        dataItem.id === id
          ? { ...dataItem, completed: !dataItem.completed }
          : dataItem
      );
    });
  };

  const handleDelete = (id) => {
    setData((prevData) => {
      return prevData.filter((dataItem) => dataItem.id !== id);
    });
  };

  return (
    <ul className="todo-list">
      {data.map((listItem) => (
        <ListItem
          id={listItem.id}
          title={listItem.title}
          key={listItem.id}
          completed={listItem.completed}
          handleClick={handleClick}
          handleDelete={handleDelete}
          setData={setData}
        />
      ))}
    </ul>
  );
};
