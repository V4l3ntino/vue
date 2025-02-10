<template>
  <div class="buscador">
    <!-- Campo de búsqueda -->
    <input
      type="text"
      v-model="terminoBusqueda"
      placeholder="Buscar..."
      class="campo-busqueda"
    />

    <!-- Lista de resultados filtrados -->
    <ul class="resultados">
      <li v-for="(item, index) in resultadosFiltrados" :key="index" class="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

// Props: Define la propiedad `lista`
const props = defineProps({
  lista: {
    type: Array as () => string[],
    required: true,
  },
});

// Estado para almacenar el término de búsqueda
const terminoBusqueda = ref<string>('');

// Propiedad computada para filtrar la lista
const resultadosFiltrados = computed(() => {
  return props.lista.filter((item) =>
    item.toLowerCase().includes(terminoBusqueda.value.toLowerCase())
  );
});
</script>

<style scoped>
.buscador {
  margin: 20px;
}

.campo-busqueda {
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

.resultados {
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
}

.item {
  padding: 8px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.item:hover {
  background-color: #f5f5f5;
}
</style>