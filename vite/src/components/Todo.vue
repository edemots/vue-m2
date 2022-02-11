<script>
import { toRef } from "vue";
import { useEditableTaskname } from "../composition/useEditableTaskname";

export default {
  props: {
    todo: Object,
  },
  emits: ["update:toggle-complete", "delete:task", "update:task-name"],
  setup(props, { emit }) {
    // const todo = ref(props.todo);
    // const { todo } = toRefs(props);
    const todo = toRef(props, "todo");

    return {
      todo,
      ...useEditableTaskname(todo, emit),
    };
  },
};
</script>

<template>
  <div>
    <label>
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="$emit('update:toggle-complete', todo.id)"
      />

      <span
        v-if="!isEditing"
        :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }"
      >
        {{ todo.name }}
      </span>
      <input v-else type="text" v-model.lazy="taskName" />
    </label>

    <button @click="toggleEditingMode">Modifier</button>
    <button @click="$emit('delete:task', todo.id)">Supprimer</button>
  </div>
</template>
