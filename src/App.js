import { createContext, useState } from "react";
import "./App.css";
import { List as TodoList } from "./components/List";
import { Navbar } from "./components/Navbar";
import { Input } from "./components/Input";

export const UserContext = createContext();
export const DataContext = createContext();

function App() {
  const loggedInUser = {
    isLoggedInUser: true,
    name: "John",
  };

  const loggedOutUser = {
    isLoggedInUser: false,
  };

  const [data, setData] = useState([
    { id: 1, title: "do dishes", completed: false },
    { id: 2, title: "do homework", completed: true },
    { id: 3, title: "go running", completed: false },
    { id: 4, title: "do dishes 2", completed: false },
    { id: 5, title: "do homework 2", completed: false },
    { id: 6, title: "go running 2", completed: false },
  ]);

  return (
    <UserContext.Provider value={{ user: loggedInUser }}>
      <DataContext.Provider value={{ data, setData }}>
        <div className="container">
          <Navbar />
          <div className="app">
            <Input />
            <TodoList />
          </div>
        </div>
      </DataContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
