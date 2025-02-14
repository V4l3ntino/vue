<template>
  <div class="car-list-container">
    <h1 class="title">Venta de Coches</h1>
    <ul class="car-list">
      <li v-for="car in cars" :key="car.id" class="car-item">
        <router-link
          class="car-link"
          :to="{ name: 'ProductDetail', params: { id: car.id } }"
        >
          {{ car.brand }} - {{ car.model }} ({{ car.year }})
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Car {
  id: number
  brand: string
  model: string
  year: number
  price: number
}

// Datos de ejemplo (en una aplicación real, estos podrían provenir de una API)
const cars = ref<Car[]>([
  { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020, price: 20000 },
  { id: 2, brand: 'Ford', model: 'Mustang', year: 2019, price: 30000 },
  { id: 3, brand: 'Tesla', model: 'Model 3', year: 2021, price: 40000 },
])
</script>

<style scoped>
.car-list-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.car-list {
  list-style: none;
  padding: 0;
}

.car-item {
  margin: 10px 0;
  padding: 12px 15px;
  background: #fff;
  border-radius: 4px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #eaeaea;
}

.car-item:hover {
  transform: scale(1.02);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.car-link {
  text-decoration: none;
  color: #007bff;
  font-weight: 600;
}

.car-link:hover {
  color: #0056b3;
}
</style>
