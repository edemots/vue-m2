<script>
export default {
  data: () => ({
    firstName: "Toto",
    number: null,
    checkbox: [],
    radio: null,
    country: "",
    coin: [
      { id: 0, name: "Riri" },
      { id: 1, name: "Fifi" },
      { id: 2, name: "Loulou" },
    ],
  }),
};
</script>

<template>
  <form action="">
    <input type="text" v-model.trim="firstName" />
    <p>Value: {{ firstName }}</p>

    <input type="text" v-model.number="number" />

    <input type="checkbox" v-model="checkbox" value="Riri" />
    <input type="checkbox" v-model="checkbox" value="Fifi" />
    <input type="checkbox" v-model="checkbox" value="Loulou" />
    <p>Value: {{ checkbox }}</p>

    <label v-for="p in coin" :key="p.id">
      <input type="radio" v-model="radio" v-bind:value="p.id" />
      {{ p.name }}
    </label>

    <select v-model="country">
      <option :value="{ isoCode: 'FR', name: 'France' }">France</option>
      <option :value="{ isoCode: 'US', name: 'E.U.' }">Etats-Unis</option>
      <option :value="{ isoCode: 'AL', name: 'Allemagne' }">Allemagne</option>
    </select>
  </form>
</template>
