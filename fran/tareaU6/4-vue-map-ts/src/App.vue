<template>
    <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%;">
      <l-tile-layer :url="tileUrl" :attribution="attribution" />
      <l-marker
        v-for="place in places"
        :key="place.id"
        :lat-lng="[place.lat, place.lng]"
      >
        <l-popup>
          {{ place.name }}<br>
          {{ place.type }}
        </l-popup>
      </l-marker>
    </l-map>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { LMap, LTileLayer, LMarker, LPopup } from 'vue3-leaflet'
  
  interface Place {
    id: number
    name: string
    lat: number
    lng: number
    type: string
  }
  
  // Definir el centro del mapa (ejemplo: Madrid)
  const center = ref<[number, number]>([40.416775, -3.703790])
  const zoom = ref<number>(13)
  
  // URL del mosaico y atribución de OpenStreetMap
  const tileUrl = ref<string>('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
  const attribution = ref<string>('Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors')
  
  // Array de objetos representando negocios (restaurantes, tiendas, servicios)
  const places = ref<Place[]>([
    { id: 1, name: 'Restaurante La Buena Mesa', lat: 40.418, lng: -3.703, type: 'Restaurante' },
    { id: 2, name: 'Tienda de Ropa Fashion', lat: 40.416, lng: -3.705, type: 'Tienda' },
    { id: 3, name: 'Servicio de Salud Vital', lat: 40.417, lng: -3.704, type: 'Servicio' }
  ])
  
  // Uso del ciclo de vida: ejecutar lógica cuando el componente se monta
  onMounted(() => {
    console.log('El componente de mapa se ha montado correctamente.')
  })
  </script>
  