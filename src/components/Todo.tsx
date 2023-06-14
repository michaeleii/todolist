import useStore from "../store";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";

function Todo({
  id,
  task,
  checked,
}: {
  id: `${string}-${string}-${string}-${string}-${string}`;
  task: string;
  checked: boolean;
}) {
  const [removeTodo, toggleTodo] = useStore((state) => [
    state.removeTodo,
    state.toggleTodo,
  ]);

  const handleCheck = () => {
    toggleTodo({
      id,
      task,
      checked,
    });
  };

  const handleDelete = () => {
    removeTodo({
      id,
      task,
      checked,
    });
  };

  return checked ? (
    <div className="bg-neutral-focus  p-5 flex rounded-lg gap-5 items-center">
      <input
        type="checkbox"
        className="checkbox"
        checked
        onClick={handleCheck}
      />
      <h2 className="card-title flex-1 line-through">{task}</h2>
      <TrashIcon
        className="w-6 h-6 hover:text-red-500 cursor-pointer transition-colors"
        onClick={handleDelete}
      />
    </div>
  ) : (
    <div className="bg-neutral  p-5 flex rounded-lg gap-5 items-center">
      <input type="checkbox" className="checkbox" onClick={handleCheck} />
      <h2 className="card-title flex-1">{task}</h2>
      <PencilIcon className="w-6 h-6" />
      <TrashIcon
        className="w-6 h-6 hover:text-red-500 cursor-pointer transition-colors"
        onClick={handleDelete}
      />
    </div>
  );
}
export default Todo;
