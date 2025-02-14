<!-- src/components/CarDetail.vue -->
<template>
  <div class="car-detail-container">
    <h1 class="detail-title">Detalle del Coche</h1>
    <div class="car-info">
      <p class="car-id"><strong>ID:</strong> {{ carId }}</p>
      <div v-if="car">
        <p class="car-brand"><strong>Marca:</strong> {{ car.brand }}</p>
        <p class="car-model"><strong>Modelo:</strong> {{ car.model }}</p>
        <p class="car-year"><strong>Año:</strong> {{ car.year }}</p>
        <p class="car-price"><strong>Precio:</strong> ${{ car.price }}</p>
      </div>
      <p class="not-found" v-else>Coche no encontrado.</p>
    </div>
    <router-link to="/" class="back-link">← Volver a la lista</router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface Car {
  id: number
  brand: string
  model: string
  year: number
  price: number
}

// Datos de ejemplo
const carList: Car[] = [
  { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020, price: 20000 },
  { id: 2, brand: 'Ford', model: 'Mustang', year: 2019, price: 30000 },
  { id: 3, brand: 'Tesla', model: 'Model 3', year: 2021, price: 40000 },
]

// Obtenemos el parámetro de la ruta
const route = useRoute()

// Convertimos el parámetro id a número
const carId = computed(() => Number(route.params.id))

// Buscamos el coche correspondiente
const car = computed(() => carList.find(c => c.id === carId.value))
</script>

<style scoped>
.car-detail-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 25px;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.detail-title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.car-info {
  margin: 20px 0;
}

.car-id,
.car-brand,
.car-model,
.car-year,
.car-price,
.not-found {
  font-size: 1.1rem;
  margin: 10px 0;
  color: #555;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  color: #007bff;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: #0056b3;
}
</style>
