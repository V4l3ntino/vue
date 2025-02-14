<template>
    <div>
      <input v-model="store.filter" placeholder="Filtrar usuarios" />
      <ul>
        <li v-for="user in store.filteredUsers" :key="user.id">
          {{ user.name }} - {{ user.role }}
          <button @click="store.deleteUser(user.id)">Eliminar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useUserStore } from '@/stores/userStore';
  const store = useUserStore();
  </script>