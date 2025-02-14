<template>
    <div>
      <h1>Administración de Usuarios</h1>
      <UserForm />
      <UserList />
    </div>
  </template>
  
  <script setup>
  import UserForm from '@/components/UserForm.vue';
  import UserList from '@/components/UserList.vue';
  </script>