<template>
  <h1>User {{ userId }}</h1>
</template>

<script>
import { onUpdated, ref, watch } from "vue";

export default {
  props: ["userId"],
  setup(props) {
    const userId = ref(props.userId);

    watch(
      () => props.userId,
      (value) => (userId.value = value)
    );

    return { userId };
  },
};
</script>
