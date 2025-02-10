<template>
  <div class="entrada-con-validacion">
    <!-- Mensaje de error -->
    <p v-if="mostrarError" class="mensaje-error">El campo no puede estar vacío</p>
    <!-- Campo de entrada de texto -->
    <input
      type="text"
      v-model="valor"
      @blur="validar"
      placeholder="Escribe algo..."
      class="campo-texto"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Estado para almacenar el valor del campo de entrada
const valor = ref<string>('');

// Estado para controlar si se muestra el mensaje de error
const mostrarError = ref<boolean>(false);

// Función para validar el campo cuando pierde el foco
const validar = () => {
  if (!valor.value.trim()) {
    mostrarError.value = true;
    console.log("true");
  } else {
    mostrarError.value = false;
    console.log("false");
  }
};
</script>

<style scoped>
.entrada-con-validacion {
  margin: 20px;
}

.campo-texto {
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

.mensaje-error {
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
}
</style>