import useStore from "../store";
import Todo from "./Todo";
import { motion, AnimatePresence } from "framer-motion";

function TodoList() {
  const todos = useStore((state) => state.todos);
  return (
    <div className="flex flex-col gap-2">
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Todo {...todo} key={todo.id} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
export default TodoList;
