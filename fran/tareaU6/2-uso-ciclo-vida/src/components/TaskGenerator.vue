<template>
    <div class="task-generator">
      <h1>Gestión de Tareas del Proyecto</h1>
      
      <!-- Visualización del progreso total -->
      <div class="progress">
        <p><strong>Progreso total:</strong> {{ totalCompletion }}%</p>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: totalCompletion + '%' }"></div>
        </div>
      </div>
      
      <!-- Listado de tareas -->
      <div class="tasks">
        <Task 
          v-for="task in tasks" 
          :key="task.id" 
          :name="task.name" 
          :duration="task.duration" 
          :completion="task.completion" 
          @taskCompleted="handleTaskCompleted"
        />
      </div>
      
      <!-- Mensaje de finalización -->
      <div v-if="totalCompletion >= 100" class="project-complete">
        <p>¡Proyecto completado al 100%!</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUpdated } from 'vue'
  import Task from './Task.vue'
  
  // Definición de la interfaz para las tareas
  interface TaskData {
    id: number
    name: string
    duration: number
    completion: number
  }
  
  // Variable reactiva para la lista de tareas
  const tasks = ref<TaskData[]>([])
  
  // Variable para llevar el progreso total del proyecto
  const totalCompletion = ref(0)
  
  // Función que genera las tareas al montar el componente
  const generateTasks = () => {
    // Tareas de ejemplo, cuyos porcentajes suman 100%
    const generatedTasks: TaskData[] = [
      { id: 1, name: 'Task1', duration: 10, completion: 15 },
      { id: 2, name: 'Task2', duration: 15, completion: 20 },
      { id: 3, name: 'Task3', duration: 5,  completion: 25 },
      { id: 4, name: 'Task4', duration: 12, completion: 40 },
    ]
    tasks.value = generatedTasks
  }
  
  // Función que se ejecuta cuando una tarea completa su cuenta atrás
  const handleTaskCompleted = (completion: number) => {
    totalCompletion.value += completion
    console.log(`Tarea completada con ${completion}%. Progreso total: ${totalCompletion.value}%`)
  }
  
  onMounted(() => {
    generateTasks()
    console.log('TaskGenerator montado. Tareas generadas.')
  })
  
  onUpdated(() => {
    console.log(`TaskGenerator actualizado. Progreso total: ${totalCompletion.value}%`)
  })
  </script>
  
  <style scoped>
  .task-generator {
    max-width: 700px;
    margin: 40px auto;
    padding: 20px;
    background-color: #eef2f7;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .task-generator h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  
  .progress {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .progress p {
    margin: 0 0 10px;
    font-size: 1.1rem;
    color: #555;
  }
  
  .progress-bar {
    width: 100%;
    height: 20px;
    background-color: #ddd;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .progress-fill {
    height: 100%;
    background-color: #28a745;
    transition: width 0.5s ease-in-out;
  }
  
  .tasks {
    margin-bottom: 20px;
  }
  
  .project-complete {
    text-align: center;
    padding: 10px;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    border-radius: 6px;
    color: #155724;
    font-weight: bold;
  }
  </style>
  