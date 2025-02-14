<template>
  <div>
    <nav>
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/editor">Editor</router-link> |
      <router-link to="/user">Usuario</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
nav {
  padding: 10px;
  background: #333;
  color: white;
}

nav a {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}

nav a:hover {
  text-decoration: underline;
}
</style>
