import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './../styles/App.css';

const items = [
  { id: "1", name: "Item One", description: "This is the first item." },
  { id: "2", name: "Item Two", description: "This is the second item." },
  { id: "3", name: "Item Three", description: "This is the third item." }
];

const ItemList = () => {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ItemDetail = () => {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);

  if (!item) return <h2>Item not found</h2>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
