import Todo from "./todo";

export type TodoType = {
  id: string;
  isDone: boolean;
  name: string;
};
// when project gets bigger, have all types in one file

const getTodos = async () => {
  let todos = await fetch("http://localhost:3001/api/todo/list");
  //   not changing URL here bc this is a server component
  return (await todos.json()) as { todos: TodoType[] };
  // above: we are typing the json based on what I know is going to be
  // returned. If the API is changed, this is dangerous and will fail
  // To combat this, we use other tools(zod) to tell us the type incoming
  // data type is
};

export default async function TodoList() {
  const { todos } = await getTodos();

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
