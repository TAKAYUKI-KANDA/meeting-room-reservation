"use client";

import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [error, setError] = useState("");

  const addItem = () => {
    const trimmedText = text.trim();

    if (!trimmedText) {
      setError("予約内容を入力してください");
      return;
    }

    if (items.includes(trimmedText)) {
      setError("同じ予約内容は登録できません");
      return;
    }

    setItems([...items, trimmedText]);
    setText("");
    setError("");
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

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}