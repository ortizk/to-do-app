"use client";

import { useRouter } from "next/navigation";

async function update(id: string, isDone: boolean, refresh) {
  await fetch("http://localhost:3001/api/todo/update", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({ id, isDone }),
  });
  refresh();
}

export default function Todo({ todo }) {
  const router = useRouter();
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      <span>{todo.name}</span>
      <button>Delete</button>
    </>
  );
}
