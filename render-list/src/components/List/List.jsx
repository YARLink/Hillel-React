import React, { useState, useEffect } from "react";
import "./style.scss";

const animals = [
  { type: `turtle`, icon: `🐢` },
  { type: `octopus`, icon: `🐙` },
  { type: `fish`, icon: `🐠` },
  { type: `flamingo`, icon: `🦩` },
  { type: `penguin`, icon: `🐧` },
];

export default function List() {
  const [list, setList] = useState(animals);
  const [activatedIndexes, setActivatedIndexes] = useState([]);

  useEffect(() => {
    if (activatedIndexes.length === list.length) return;

    const interval = setInterval(() => {
      let availableIndexes = list
        .map((_, index) => index)
        .filter((index) => !activatedIndexes.includes(index));

      if (availableIndexes.length === 0) {
        clearInterval(interval);
        return;
      }

      const randomIndex =
        availableIndexes[Math.floor(Math.random() * availableIndexes.length)];

      setActivatedIndexes((prev) => [...prev, randomIndex]);

      setList((prevList) =>
        prevList.map((item, index) =>
          index === randomIndex ? { ...item, active: true } : item
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [activatedIndexes, list]);

  return (
    <table className="list">
      <tbody>
        {list.map((animal) => (
          <tr key={animal.type} className={animal.active ? "active" : ""}>
            <td>{animal.type}</td>
            <td>{animal.icon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
