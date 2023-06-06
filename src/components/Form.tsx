import useStore from "../store";

function Form() {
  const addTodo = useStore((state) => state.addTodo);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task = e.currentTarget.todo.value;
    const newTodo = {
      id: crypto.randomUUID(),
      task,
      checked: false,
    };
    addTodo(newTodo);
    e.currentTarget.reset();
  };
  return (
    <form className="flex gap-2 mb-5" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        id="todo"
        className="input input-bordered w-full placeholder:text-neutral-500"
        placeholder="What needs to be done?"
      />
      <button className="btn">Add</button>
    </form>
  );
}

export default Form;
