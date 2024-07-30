export default function Page() {
  return (
    <div>
      <div>
        <input type="text" />
        <button>Add</button>
      </div>
      <div>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ padding: "5px 0" }}>To Do 1</li>
          <li style={{ padding: "5px 0" }}>To Do 2</li>
          <li style={{ padding: "5px 0" }}>To Do 3</li>
        </ul>
      </div>
    </div>
  );
}
