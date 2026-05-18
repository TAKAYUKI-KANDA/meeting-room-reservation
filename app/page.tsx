"use client"
import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    if (!text) return;
    setItems([...items, text]);
    setText("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>会議室予約（仮）</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="予約内容を入力"
      />
      <button onClick={addItem}>追加</button>

      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}