<template>
    <div>
      <input v-model="name" placeholder="Nombre" />
      <select v-model="role">
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
        <option value="viewer">Viewer</option>
      </select>
      <button @click="addUser">Agregar Usuario</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useUserStore } from '@/stores/userStore';
  const store = useUserStore();
  const name = ref('');
  const role = ref('viewer');
  function addUser() {
    if (name.value.trim()) {
      store.addUser({ name: name.value, role: role.value, permissions: [] });
      name.value = '';
    }
  }
  </script>