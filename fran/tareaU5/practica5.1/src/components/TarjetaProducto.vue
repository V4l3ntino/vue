<template>
  <div class="tarjeta-producto">
    <img :src="producto.imagen" :alt="producto.nombre" class="imagen-producto" />
    <h2 class="nombre-producto">{{ producto.nombre }}</h2>
    <p class="descripcion-producto">{{ producto.descripcion }}</p>
    <p class="precio-producto">${{ producto.precio }}</p>
  </div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';

// Definir la interfaz para el objeto Producto
interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

// Validar que el prop "producto" sea de tipo Producto
const props = defineProps({
  producto: {
    type: Object as PropType<Producto>,
    required: true,
  },
});
</script>

<style scoped>
.tarjeta-producto {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.imagen-producto {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.nombre-producto {
  font-size: 1.5rem;
  margin: 8px 0;
}

.descripcion-producto {
  font-size: 1rem;
  color: #555;
}

.precio-producto {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}
</style>