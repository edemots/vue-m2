<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: { HelloWorld },
  data: () => ({
    greetee: "eliot",
  }),
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :greetee="greetee">
    <template #default="{ shoutGreetee }">Hello {{ shoutGreetee }}!</template>

    <template #subtitle>Ici c'est sous-titre</template>
  </HelloWorld>
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
