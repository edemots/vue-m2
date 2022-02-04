<script>
export default {
  data: () => ({
    name: "",
  }),
  emits: ["create:task"],
  methods: {
    pushTodo() {
      if (this.name === "") {
        alert("Vous devez rentrer un nom pour votre tâche.");
        return;
      }

      this.$emit("create:task", this.name);
      this.name = "";
    },
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
