<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-contenido">
      <p><slot></slot></p>
      <button @click="cerrarModal" class="boton-cerrar">Cerrar</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

// Props: Define la propiedad `visible`
const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});

// Emits: Declara el evento personalizado `cerrar-modal`
const emit = defineEmits(['cerrar-modal']);

// Función para cerrar el modal
const cerrarModal = () => {
  emit('cerrar-modal'); // Emite el evento para cerrar el modal
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-contenido {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.boton-cerrar {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.boton-cerrar:hover {
  background-color: #c82333;
}
</style>