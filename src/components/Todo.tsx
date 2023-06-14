import { useState } from "react";
import useStore from "../store";
import {
  TrashIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function Todo({
  id,
  task,
  checked,
}: {
  id: `${string}-${string}-${string}-${string}-${string}`;
  task: string;
  checked: boolean;
}) {
  const [removeTodo, toggleTodo, editTodo] = useStore((state) => [
    state.removeTodo,
    state.toggleTodo,
    state.editTodo,
  ]);
  const [editMode, setEditMode] = useState(false);
  const [taskName, setTaskName] = useState(task);

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

  const handleEdit = () => {
    editTodo({
      id,
      task: taskName,
      checked,
    });
    setEditMode(false);
  };

  return (
    <>
      {editMode && (
        <form
          className="bg-neutral p-5 flex rounded-lg gap-5 items-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit();
          }}
        >
          <input
            className="input flex-1 card-title"
            type="text"
            name="task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <CheckIcon
            className="w-6 h-6 hover:text-green-500 cursor-pointer transition-colors"
            type="submit"
            onClick={() => handleEdit()}
          />
          <XMarkIcon
            className="w-6 h-6 hover:text-red-500 cursor-pointer transition-colors"
            onClick={() => {
              setTaskName(task);
              setEditMode(false);
            }}
          />
          <TrashIcon
            className="w-6 h-6 hover:text-red-500 cursor-pointer transition-colors"
            onClick={handleDelete}
          />
        </form>
      )}
      {!editMode && !checked && (
        <div className="bg-neutral p-5 flex rounded-lg gap-5 items-center">
          <input type="checkbox" className="checkbox" onClick={handleCheck} />
          <h2 className="card-title flex-1">{task}</h2>
          <PencilIcon
            className="w-6 h-6 hover:text-yellow-500 cursor-pointer transition-colors"
            onClick={() => setEditMode(true)}
          />
          <TrashIcon
            className="w-6 h-6 hover:text-red-500 cursor-pointer transition-colors"
            onClick={handleDelete}
          />
        </div>
      )}
      {checked && (
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
      )}
    </>
  );
}
export default Todo;
