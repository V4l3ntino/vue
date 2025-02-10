<script setup lang="ts">
import TarjetaProducto from '@/components/TarjetaProducto.vue';
import EntradaConValidacion from '@/components/EntradaConValidacion.vue';
import SelectorColor from './components/SelectorColor.vue';
import Acordeon from './components/Acordeon.vue';
import { ref } from 'vue';
import CalificacionEstrellas from './components/CalificacionEstrellas.vue';
import Buscador from './components/Buscador.vue';
import BotonModal from './components/BotonModal.vue';
import Modal from './components/Modal.vue';
import Etiquetas from './components/Etiquetas.vue';

// Estado para almacenar el color seleccionado
const colorSeleccionado = ref<string>('');

// Función para manejar el evento de selección de color
const manejarColor = (color: string) => {
  colorSeleccionado.value = color;
};

// Estado para controlar la visibilidad del modal
const mostrarModal = ref<boolean>(false);

// Función para mostrar el modal
const abrirModal = () => {
  mostrarModal.value = true;
};

// Función para ocultar el modal
const ocultarModal = () => {
  mostrarModal.value = false;
};
</script>

<template>
  <div id="app">
    <!-- Componente TarjetaProducto -->
    <TarjetaProducto
      :producto="{
        nombre: 'Camiseta',
        descripcion: 'Algodón 100%',
        precio: 20,
        imagen: 'src/assets/clothes-5841103_1280.png'
      }"
    ></TarjetaProducto>
    <br />

    <!-- Componente EntradaConValidacion -->
    <EntradaConValidacion></EntradaConValidacion>
    <br />

    <!-- Componente SelectorColor -->
    <div>
      <h1>Selecciona un color:</h1>
      <SelectorColor @color-seleccionado="manejarColor"></SelectorColor>
      <p v-if="colorSeleccionado">Color seleccionado: {{ colorSeleccionado }}</p>
    </div>
    <br />

    <!-- Componente Acordeon -->
    <div>
      <Acordeon titulo="Título del acordeón 1">
        <p>Este es el contenido del primer acordeón.</p>
      </Acordeon>
      <Acordeon titulo="Título del acordeón 2">
        <p>Este es el contenido del segundo acordeón.</p>
      </Acordeon>
    </div>
    <br />

    <!-- Componente CalificacionEstrellas -->
    <CalificacionEstrellas />
    <br />

    <!-- Componente Buscador -->
    <div>
      <h1>Componente de Búsqueda</h1>
      <Buscador :lista="['Manzana', 'Banana', 'Naranja', 'Kiwi']"></Buscador>
    </div>
    <br />

    <!-- Componente Modal -->
    <div>
      <h1>Ejemplo de Modal</h1>
      <!-- Botón para abrir el modal -->
      <BotonModal @abrir-modal="abrirModal"></BotonModal>

      <!-- Modal -->
      <Modal :visible="mostrarModal" @cerrar-modal="ocultarModal">
        Este es el mensaje del modal.
      </Modal>
    </div>
    <br>
    
    <div>
      <h1>Componente de Etiquetas</h1>
      <Etiquetas></Etiquetas>
    </div>
  </div>
</template>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
</style>
