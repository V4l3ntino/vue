<template>
    <div class="etiquetas">
      <!-- Lista de etiquetas -->
      <div class="lista-etiquetas">
        <span
          v-for="(etiqueta, index) in etiquetasFiltradas"
          :key="index"
          class="etiqueta"
        >
          {{ etiqueta }}
          <button @click="eliminarEtiqueta(index)" class="boton-eliminar">x</button>
        </span>
      </div>
  
      <!-- Campo de entrada de texto -->
      <input
        type="text"
        v-model="nuevaEtiqueta"
        @keydown.enter.prevent="agregarEtiqueta"
        @keydown.backspace="eliminarUltimaEtiquetaSiVacio"
        placeholder="Escribe una etiqueta y presiona Enter..."
        class="campo-texto"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  // Estado para almacenar las etiquetas
  const etiquetas = ref<string[]>([]);
  
  // Estado para el campo de entrada de texto
  const nuevaEtiqueta = ref<string>('');
  
  // Propiedad computada para filtrar las etiquetas (por ejemplo, eliminar duplicados)
  const etiquetasFiltradas = computed(() => {
    return [...new Set(etiquetas.value)]; // Elimina etiquetas duplicadas
  });
  
  // Función para agregar una nueva etiqueta
  const agregarEtiqueta = () => {
    if (nuevaEtiqueta.value.trim()) {
      etiquetas.value.push(nuevaEtiqueta.value.trim());
      nuevaEtiqueta.value = ''; // Limpiar el campo de entrada
    }
  };
  
  // Función para eliminar una etiqueta por su índice
  const eliminarEtiqueta = (index: number) => {
    etiquetas.value.splice(index, 1);
  };
  
  // Función para eliminar la última etiqueta si el campo está vacío y se presiona Retroceso
  const eliminarUltimaEtiquetaSiVacio = () => {
    if (!nuevaEtiqueta.value && etiquetas.value.length > 0) {
      etiquetas.value.pop(); // Elimina la última etiqueta
    }
  };
  </script>
  
  <style scoped>
  .etiquetas {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .lista-etiquetas {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  
  .etiqueta {
    background-color: #e0e0e0;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .boton-eliminar {
    background: none;
    border: none;
    color: #888;
    cursor: pointer;
    font-size: 0.9rem;
  }
  
  .boton-eliminar:hover {
    color: #333;
  }
  
  .campo-texto {
    padding: 8px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
  }
  </style>