<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import { useTaskRepository } from "./composition/useTaskRepository";

export default {
  components: { Todos, AddTodo },
  setup() {
    return useTaskRepository();
  },
};
</script>

<template>
  <h1>Todolist</h1>

  <div>
    <AddTodo @create:task="pushTask($event)"></AddTodo>
    <Todos
      :todos="todos"
      @update:toggle-complete="toggleComplete($event)"
      @delete:task="deleteTask($event)"
      @update:task-name="updateTaskName($event)"
    ></Todos>

    <RouterView></RouterView>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
