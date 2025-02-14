import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Task from '@/components/Task.vue'

describe('Task.vue', () => {
  it('emite el evento "taskCompleted" cuando la cuenta atrás termina', async () => {
    // Usamos temporizadores falsos para controlar el setInterval
    vi.useFakeTimers()
    const wrapper = mount(Task, {
      props: {
        name: 'Tarea Test',
        duration: 3,
        completion: 50,
      },
    })

    // Verifica que inicialmente se muestre la duración (3s)
    expect(wrapper.text()).toContain('3s')

    // Avanzamos el tiempo 3 segundos
    vi.advanceTimersByTime(3000)
    await wrapper.vm.$nextTick()

    // Verificamos que se emitió el evento taskCompleted con el valor 50
    expect(wrapper.emitted()).toHaveProperty('taskCompleted')
    expect(wrapper.emitted('taskCompleted')![0]).toEqual([50])

    // Restauramos los temporizadores reales
    vi.useRealTimers()
  })
})
