<template>
  <div>
    <h1>Users</h1>

    <RouterLink :to="{ name: 'user', params: { userId: 1 } }"
      >User 1</RouterLink
    >
    <RouterLink :to="{ name: 'user', params: { userId: 2 } }"
      >User 2</RouterLink
    >
    <RouterLink :to="{ name: 'user', params: { userId: 3 } }"
      >User 3</RouterLink
    >
    <RouterLink :to="{ name: 'user', params: { userId: 4 } }"
      >User 4</RouterLink
    >
    <RouterLink :to="{ name: 'user', params: { userId: 5 } }"
      >User 5</RouterLink
    >
  </div>
</template>
