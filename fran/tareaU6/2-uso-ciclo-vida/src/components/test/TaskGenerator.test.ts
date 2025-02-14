import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TaskGenerator from '@/components/TaskGenerator.vue'

describe('TaskGenerator.vue', () => {
  it('actualiza el progreso total cuando una tarea emite "taskCompleted"', async () => {
    // Stub de Task para evitar la ejecución de la cuenta atrás real
    const wrapper = mount(TaskGenerator, {
      global: {
        stubs: {
          Task: {
            template: '<div></div>',
            props: ['name', 'duration', 'completion'],
          },
        },
      },
    })

    // Suponiendo que el componente genera tareas en onMounted,
    // verificamos que se hayan generado tareas.
    const tasks = wrapper.vm.tasks
    expect(tasks.length).toBeGreaterThan(0)

    // Simulamos la emisión del evento taskCompleted para cada tarea
    let totalEsperado = 0
    tasks.forEach((task: any) => {
      totalEsperado += task.completion
      // Llamamos manualmente al handler que actualiza el progreso total
      wrapper.vm.handleTaskCompleted(task.completion)
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.totalCompletion).toEqual(totalEsperado)
  })
})
