<template>
    <button @click="abrirModal" class="boton-modal">
      Abrir Modal
    </button>
  </template>
  
  <script lang="ts" setup>
  import { defineComponent } from 'vue';
  
    // Función para emitir el evento 'abrir-modal'
  const emit = defineEmits(['abrir-modal']);

  const abrirModal = () => {
    emit('abrir-modal'); // Emite el evento para abrir el modal
};
  </script>
  
  <style scoped>
  .boton-modal {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .boton-modal:hover {
    background-color: #0056b3;
  }
  </style>