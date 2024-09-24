import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([
    { text: 'Item 1', completed: false },
    { text: 'Item 2', completed: false },
    { text: 'Item 3', completed: false },
  ]);

  const handleToggleCompleted = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => handleToggleCompleted(index)}
          />
          <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;