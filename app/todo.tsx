"use client";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { TodoType } from "./todo-list";

async function update(
  id: string,
  isDone: boolean,
  refresh: AppRouterInstance["refresh"]
) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });
  refresh();
}

async function deleteTodo(id: string, refresh: AppRouterInstance["refresh"]) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });
  refresh();
}

export default function Todo({ todo }: { todo: TodoType }) {
  const router = useRouter();
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      <span>{todo.name}</span>
      <button
        className="border"
        onClick={() => deleteTodo(todo.id, router.refresh)}
      >
        Delete
      </button>
    </>
  );
}
