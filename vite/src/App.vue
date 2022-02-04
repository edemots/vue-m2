<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";

export default {
  components: { Todos, AddTodo },
  data: () => ({
    todos: [
      { id: 1, name: "Faire la vaisselle", completed: false },
      { id: 2, name: "Regarder les LFL Days", completed: true },
    ],
  }),
  methods: {
    toggleComplete(todoId) {
      this.todos = this.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
    },
    pushTask(name) {
      this.todos = [
        ...this.todos,
        { name, completed: false, id: this.getTaskMaxId() + 1 },
      ];
    },
    deleteTask(taskId) {
      this.todos = this.todos.filter((todo) => todo.id !== taskId);
    },
    updateTaskName({ id: todoId, name }) {
      this.todos = this.todos.map((todo) =>
        todo.id === todoId ? { ...todo, name } : todo
      );
    },
    getTaskMaxId() {
      let maxId = 0;
      this.todos.forEach((task) => {
        if (task.id > maxId) maxId = task.id;
      });

      return maxId;
    },
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
