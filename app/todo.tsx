"use client";

async function update(id: string, isDone: boolean) {
  await fetch("http://localhost:3001/api/todo/update", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({ id, isDone }),
  });
}

export default function Todo({ todo }) {
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked)}
      />
      <span>{todo.name}</span>
      <button>Delete</button>
    </>
  );
}
