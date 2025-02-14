<template>
    <div class="task">
      <h2>{{ name }}</h2>
      <p><strong>Completación:</strong> {{ completion }}%</p>
      <p><strong>Tiempo restante:</strong> {{ timeLeft }}s</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, onBeforeUnmount, onUpdated } from 'vue'
  
  // Definición de _props_ para la tarea
  const props = defineProps<{
    name: string
    duration: number
    completion: number
  }>()
  
  // Emisor de eventos para notificar al padre cuando la tarea finaliza
  const emit = defineEmits<{
    (e: 'taskCompleted', completion: number): void
  }>()
  
  const timeLeft = ref(props.duration)
  let intervalId: number | undefined
  
  // Función que inicia la cuenta atrás
  const startCountdown = () => {
    intervalId = window.setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--
      }
      if (timeLeft.value === 0) {
        // Emitir el evento cuando la cuenta atrás llega a 0
        emit('taskCompleted', props.completion)
        clearInterval(intervalId)
      }
    }, 1000)
  }
  
  onMounted(() => {
    startCountdown()
    console.log(`Task ${props.name} montada. Iniciando cuenta atrás.`)
  })
  
  onBeforeUnmount(() => {
    console.log(`Task ${props.name} está a punto de desmontarse.`)
  })
  
  onUnmounted(() => {
    if (intervalId) clearInterval(intervalId)
    console.log(`Task ${props.name} desmontada y temporizador limpiado.`)
  })
  
  onUpdated(() => {
    console.log(`Task ${props.name} actualizada. Tiempo restante: ${timeLeft.value}`)
  })
  </script>
  
  <style scoped>
  .task {
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 12px;
    margin-bottom: 12px;
    background-color: #f9f9f9;
  }
  
  .task h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }
  
  .task p {
    margin: 4px 0;
    font-size: 1rem;
    color: #555;
  }
  </style>
  