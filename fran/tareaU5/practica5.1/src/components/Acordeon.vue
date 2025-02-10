<template>
  <div class="acordeon">
    <!-- Título del acordeón -->
    <div
      class="titulo"
      :class="{ abierto: estaAbierto }"
      @click="alternarAcordeon"
    >
      {{ titulo }}
    </div>

    <!-- Contenido del acordeón -->
    <div v-if="estaAbierto" class="contenido">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Prop para el título del acordeón
defineProps({
  titulo: {
    type: String,
    required: true,
  },
});

// Estado para controlar si el acordeón está abierto o cerrado
const estaAbierto = ref<boolean>(false);

// Función para alternar el estado del acordeón
const alternarAcordeon = () => {
  estaAbierto.value = !estaAbierto.value;
};
</script>

<style scoped>
.acordeon {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px 0;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

.titulo {
  padding: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s ease;
}

.titulo.abierto {
  background-color: #e0e0e0;
}

.contenido {
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ccc;
}
</style>