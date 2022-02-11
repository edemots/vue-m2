import { ref } from "vue";

export function useTaskRepository() {
  const todos = ref([
    { id: 1, name: "Faire la vaisselle", completed: false },
    { id: 2, name: "Regarder les LFL Days", completed: true },
  ]);

  const toggleComplete = (todoId) => {
    todos.value = todos.value.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
  };

  const pushTask = (name) => {
    todos.value = [
      ...todos.value,
      { name, completed: false, id: getTaskMaxId() + 1 },
    ];
  };

  const getTaskMaxId = () => {
    let maxId = 0;
    todos.value.forEach((task) => {
      if (task.id > maxId) maxId = task.id;
    });

    return maxId;
  };

  const deleteTask = (taskId) => {
    todos.value = todos.value.filter((todo) => todo.id !== taskId);
  };

  const updateTaskName = ({ id: todoId, name }) => {
    todos.value = todos.value.map((todo) =>
      todo.id === todoId ? { ...todo, name } : todo
    );
  };

  return { todos, toggleComplete, pushTask, deleteTask, updateTaskName };
}
