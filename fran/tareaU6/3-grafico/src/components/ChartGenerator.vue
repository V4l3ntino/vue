<template>
    <div class="chart-generator">
      <h1>Generador de Calificaciones - Gráficas</h1>
      <p>Se han generado 15 alumnos con calificaciones aleatorias.</p>
      
      <div class="charts">
        <!-- Gráfica de Barras: Promedio por asignatura -->
        <div class="chart-container">
          <h2>Gráfica de Barras</h2>
          <Bar :data="chartDataSubjects" :options="chartOptions" />
        </div>
  
        <!-- Gráfica Pie: Distribución del promedio por asignatura -->
        <div class="chart-container">
          <h2>Gráfica Pie</h2>
          <Pie :data="chartDataPie" :options="chartOptions" />
        </div>
  
        <!-- Gráfica de Líneas: Promedio por alumno -->
        <div class="chart-container">
          <h2>Gráfica de Líneas</h2>
          <Line :data="chartDataLine" :options="chartOptions" />
        </div>
  
        <!-- Gráfica Radar: Promedio por asignatura -->
        <div class="chart-container">
          <h2>Gráfica Radar</h2>
          <Radar :data="chartDataSubjects" :options="chartOptions" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { Bar, Pie, Line, Radar } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    RadialLinearScale
  } from 'chart.js'
  
  // Registrar los componentes necesarios de Chart.js
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    RadialLinearScale
  )
  
  /** INTERFAZ Y GENERADOR DE DATOS **/
  export interface Alumno {
    id: number
    nombre: string
    calificaciones: {
      basesDeDatos: number
      programacion: number
      redes: number
      seguridadInformatica: number
      desarrolloWeb: number
    }
  }
  
  // Función para generar un número aleatorio entre min y max (incluidos)
  function getRandomScore(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  
  // Array reactivo para almacenar los alumnos
  const alumnos = ref<Alumno[]>([])
  
  // Función que genera 15 alumnos con calificaciones aleatorias
  function generateAlumnos() {
    const generated: Alumno[] = []
    for (let i = 1; i <= 15; i++) {
      generated.push({
        id: i,
        nombre: `Alumno ${i}`,
        calificaciones: {
          basesDeDatos: getRandomScore(50, 100),
          programacion: getRandomScore(50, 100),
          redes: getRandomScore(50, 100),
          seguridadInformatica: getRandomScore(50, 100),
          desarrolloWeb: getRandomScore(50, 100)
        }
      })
    }
    alumnos.value = generated
  }
  
  onMounted(() => {
    generateAlumnos()
  })
  
  /** DATOS PARA LAS GRÁFICAS **/
  // Lista de asignaturas (para etiquetas de las gráficas)
  const subjects = [
    "Bases de Datos",
    "Programación",
    "Redes",
    "Seguridad Informática",
    "Desarrollo Web"
  ]
  
  // Calcular el promedio por asignatura entre todos los alumnos
  const averagePerSubject = computed(() => {
    const totals = {
      basesDeDatos: 0,
      programacion: 0,
      redes: 0,
      seguridadInformatica: 0,
      desarrolloWeb: 0
    }
    alumnos.value.forEach((alumno) => {
      totals.basesDeDatos += alumno.calificaciones.basesDeDatos
      totals.programacion += alumno.calificaciones.programacion
      totals.redes += alumno.calificaciones.redes
      totals.seguridadInformatica += alumno.calificaciones.seguridadInformatica
      totals.desarrolloWeb += alumno.calificaciones.desarrolloWeb
    })
    const count = alumnos.value.length || 1
    return [
      Math.round(totals.basesDeDatos / count),
      Math.round(totals.programacion / count),
      Math.round(totals.redes / count),
      Math.round(totals.seguridadInformatica / count),
      Math.round(totals.desarrolloWeb / count)
    ]
  })
  
  // Para el gráfico de líneas, calculamos el promedio general de cada alumno
  const averagePerAlumno = computed(() => {
    return alumnos.value.map((alumno) => {
      const { basesDeDatos, programacion, redes, seguridadInformatica, desarrolloWeb } =
        alumno.calificaciones
      return {
        nombre: alumno.nombre,
        average: Math.round(
          (basesDeDatos + programacion + redes + seguridadInformatica + desarrolloWeb) / 5
        )
      }
    })
  })
  
  // Datos para el gráfico de Barras y Radar (promedio por asignatura)
  const chartDataSubjects = computed(() => ({
    labels: subjects,
    datasets: [
      {
        label: "Promedio de Calificaciones",
        backgroundColor: [
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(255, 205, 86, 0.7)",
          "rgba(201, 203, 207, 0.7)",
          "rgba(54, 162, 235, 0.7)"
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: averagePerSubject.value
      }
    ]
  }))
  
  // Datos para el gráfico de Líneas (promedio por alumno)
  const chartDataLine = computed(() => ({
    labels: averagePerAlumno.value.map((a) => a.nombre),
    datasets: [
      {
        label: "Promedio por Alumno",
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        data: averagePerAlumno.value.map((a) => a.average),
        fill: true
      }
    ]
  }))
  
  // Datos para el gráfico Pie (distribución del promedio por asignatura)
  const chartDataPie = computed(() => ({
    labels: subjects,
    datasets: [
      {
        label: "Distribución de Calificaciones",
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)"
        ],
        data: averagePerSubject.value
      }
    ]
  }))
  
  // Opciones comunes para las gráficas
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  }
  </script>
  
  <style scoped>
  .chart-generator {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  .charts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 20px;
  }
  
  .chart-container {
    position: relative;
    width: 100%;
    height: 400px;
    background: #f8f9fa;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  .chart-container h2 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: black;
  }
  </style>
  