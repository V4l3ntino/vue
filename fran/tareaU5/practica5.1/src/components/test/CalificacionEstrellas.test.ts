// tests/unit/CalificacionEstrellas.spec.ts
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CalificacionEstrellas from '@/components/CalificacionEstrellas.vue';

describe('CalificacionEstrellas.vue', () => {
  it('debería renderizar 5 estrellas inactivas inicialmente', () => {
    const wrapper = mount(CalificacionEstrellas);

    // Verificar que hay 5 estrellas
    const estrellas = wrapper.findAll('.estrella');
    expect(estrellas.length).toBe(5);

    // Verificar que todas las estrellas están inactivas
    estrellas.forEach((estrella) => {
      expect(estrella.classes()).not.toContain('activa');
    });
  });

  it('debería activar las estrellas correspondientes al hacer clic', async () => {
    const wrapper = mount(CalificacionEstrellas);

    // Hacer clic en la tercera estrella
    const estrellas = wrapper.findAll('.estrella');
    await estrellas[2].trigger('click');

    // Verificar que las primeras 3 estrellas están activas
    for (let i = 0; i < 3; i++) {
      expect(estrellas[i].classes()).toContain('activa');
    }

    // Verificar que las últimas 2 estrellas están inactivas
    for (let i = 3; i < 5; i++) {
      expect(estrellas[i].classes()).not.toContain('activa');
    }
  });

  it('debería mostrar la calificación seleccionada', async () => {
    const wrapper = mount(CalificacionEstrellas);

    // Hacer clic en la cuarta estrella
    const estrellas = wrapper.findAll('.estrella');
    await estrellas[3].trigger('click');

    // Verificar que se muestra la calificación correcta
    const mensajeCalificacion = wrapper.find('p');
    expect(mensajeCalificacion.text()).toBe('Calificación: 4');
  });

});