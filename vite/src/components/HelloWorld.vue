<script>
export default {
  props: ["greetee"],
  data: () => ({
    count: 0,
  }),
  computed: {
    shoutGreetee() {
      return this.greetee.toUpperCase();
    },
  },
};
</script>

<template>
  <h1>
    <slot :shoutGreetee="shoutGreetee">Mon super titre</slot>
  </h1>
  <h2><slot name="subtitle">Mon super sous-titre</slot></h2>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
