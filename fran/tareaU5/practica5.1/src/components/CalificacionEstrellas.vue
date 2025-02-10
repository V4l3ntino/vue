<template>
  <div class="calificacion-estrellas">
    <!-- Generar estrellas dinámicamente -->
    <span
      v-for="index in maxEstrellas"
      :key="index"
      class="estrella"
      :class="{ activa: index <= calificacion }"
      @click="seleccionarCalificacion(index)"
    >
      ★
    </span>
    <p v-if="calificacion > 0">Calificación: {{ calificacion }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Número máximo de estrellas
const maxEstrellas = 5;

// Estado para almacenar la calificación actual
const calificacion = ref<number>(0);

// Función para actualizar la calificación cuando se hace clic en una estrella
const seleccionarCalificacion = (index: number) => {
  calificacion.value = index;
};
</script>

<style scoped>
.calificacion-estrellas {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 2rem;
  cursor: pointer;
}

.estrella {
  color: #ccc; /* Color gris por defecto */
}

.estrella.activa {
  color: gold; /* Color dorado para estrellas seleccionadas */
}

p {
  margin-left: 10px;
  font-size: 1rem;
  color: #333;
}
</style>