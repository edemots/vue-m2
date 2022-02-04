<script>
import Todo from "./Todo.vue";

export default {
  components: { Todo },
  emits: ["update:toggle-complete", "delete:task", "update:task-name"],
  props: {
    todos: Array,
  },
};
</script>

<template>
  <Todo
    v-for="todo in todos"
    :key="todo.id"
    :todo="todo"
    @update:toggle-complete="$emit('update:toggle-complete', $event)"
    @delete:task="$emit('delete:task', $event)"
    @update:task-name="$emit('update:task-name', $event)"
  ></Todo>
</template>
