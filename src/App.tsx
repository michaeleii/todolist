import Form from "./components/Form";

import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="pt-10">
        <h1 className="text-5xl font-bold mb-5">Todo List</h1>
        <Form />
      </div>
      <TodoList />
    </div>
  );
}
export default App;
