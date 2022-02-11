<script>
import { ref } from "vue";

export default {
  emits: ["create:task"],
  setup(props, { emit }) {
    const name = ref("");

    const pushTodo = () => {
      if (name.value === "") {
        alert("Vous devez rentrer un nom pour votre tâche.");
        return;
      }

      emit("create:task", name.value);
      name.value = "";
    };

    return { name, pushTodo };
  },
};
</script>

<template>
  <form @submit.prevent="pushTodo">
    <label>
      Nouvelle tâche
      <input type="text" v-model="name" />
    </label>

    <button>Ajouter à la liste</button>
  </form>
  <br />
</template>
