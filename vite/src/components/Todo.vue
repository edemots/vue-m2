<script>
export default {
  props: {
    todo: Object,
  },
  data() {
    return {
      isEditing: false,
      taskName: "",
    };
  },
  mounted() {
    this.taskName = this.todo.name;
  },
  emits: ["update:toggle-complete", "delete:task", "update:task-name"],
  watch: {
    taskName(newValue, oldValue) {
      if (oldValue !== "") {
        this.updateTaskName();
      }
    },
  },
  methods: {
    toggleEditingMode() {
      this.isEditing = !this.isEditing;
    },
    updateTaskName() {
      this.$emit("update:task-name", {
        id: this.todo.id,
        name: this.taskName,
      });
      this.toggleEditingMode();
    },
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
