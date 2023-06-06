import { create } from "zustand";

interface Todo {
  id: `${string}-${string}-${string}-${string}-${string}`;
  task: string;
  checked: boolean;
}

interface TodoListState {
  todos: Todo[];
}

interface TodoActions {
  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
  toggleTodo: (todo: Todo) => void;
}

const useStore = create<TodoListState & TodoActions>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (todo) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== todo.id),
    })),
  toggleTodo: (todo) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === todo.id ? { ...t, checked: !t.checked } : t
      ),
    })),
}));

export default useStore;
