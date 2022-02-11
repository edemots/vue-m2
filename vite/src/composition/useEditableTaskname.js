import { ref, watch } from "vue";

export function useEditableTaskname(todo, emit) {
  let isEditing = ref(false);
  let taskName = ref(todo.value.name);

  const toggleEditingMode = () => {
    isEditing.value = !isEditing.value;
  };

  const updateTaskName = () => {
    emit("update:task-name", {
      id: todo.value.id,
      name: taskName.value,
    });
    toggleEditingMode();
  };

  watch(
    () => taskName.value,
    (value, oldValue) => {
      if (oldValue !== "") {
        updateTaskName();
      }
    }
  );

  return { isEditing, taskName, toggleEditingMode };
}
