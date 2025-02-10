<template>
  <div class="selector-color">
    <!-- Botones para seleccionar colores -->
    <button
      v-for="color in colores"
      :key="color"
      :style="{ backgroundColor: color }"
      @click="seleccionarColor(color)"
      class="boton-color"
    ></button>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';

// Lista de colores disponibles
const colores = ['red', 'blue', 'green', 'yellow', 'purple'];

// Declara el evento personalizado
const emit = defineEmits(['color-seleccionado']);

// Función para emitir el color seleccionado
const seleccionarColor = (color: string) => {
  emit('color-seleccionado', color); // Emite el evento con el color
};
</script>

<style scoped>
.selector-color {
  display: flex;
  gap: 10px;
}

.boton-color {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.boton-color:hover {
  transform: scale(1.1);
}
</style>