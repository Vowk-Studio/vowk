// 1. IMPORTACIONES: Traemos las herramientas del laboratorio
import { renderHook, act } from '@testing-library/react'; // Herramientas para "ejecutar" React en los tests
import { describe, it, expect, vi } from 'vitest';       // El motor de test (como JUnit)
import useNavigation from './useNavigation';             // El Hook que vamos a auditar

// 'describe' agrupa todas las pruebas de una misma funcionalidad (como una Clase de Test en Java)
describe('useNavigation Hook', () => {
  
  // PRUEBA 1: Verificar que al cargar la página, todo esté en su lugar (Estado Inicial)
  it('debe iniciar con el menú cerrado y sin modo sticky', () => {
    
    // ARRANGE (Organizar): Ejecutamos el hook "en el aire" usando renderHook.
    // result.current contendrá los valores que el hook devuelve (isMenuOpen, isSticky, etc.)
    const { result } = renderHook(() => useNavigation());
    
    // ASSERT (Afirmar): Verificamos que los valores sean los que esperamos por defecto.
    // El menú debe estar cerrado (false) y el header no debe ser sticky (false).
    expect(result.current.isMenuOpen).toBe(false);
    expect(result.current.isSticky).toBe(false);
  });

  // PRUEBA 2: Simular que el usuario hace scroll hacia abajo
  it('debe activar isSticky cuando el scroll supera el límite definido', () => {
    
    // ARRANGE: Configuramos el hook con un límite de 80px para el sticky.
    const { result } = renderHook(() => useNavigation(100, 80));

    // ACT (Actuar): Simulamos la acción del usuario.
    // 'act' es OBLIGATORIO en React para envolver cualquier cosa que cambie un estado (useState).
    act(() => {
      // Seteamos la posición del scroll del navegador virtual (jsdom) a 150px
      window.scrollY = 150; 
      
      // Disparamos manualmente el evento 'scroll' para que el useEffect del Hook se active.
      window.dispatchEvent(new Event('scroll'));
    });

    // ASSERT: Verificamos si la lógica del Hook reaccionó correctamente.
    // Como 150 es mayor a 80, isSticky DEBE ser true ahora.
    expect(result.current.isSticky).toBe(true);
  });

  // PRUEBA 3: Verificar que el menú se pueda abrir y cerrar (Lógica de Interfaz)
  it('debe cambiar el estado de isMenuOpen cuando se llama a setIsMenuOpen', () => {
    
    const { result } = renderHook(() => useNavigation());

    // ACT: Simulamos que el usuario hace clic en el botón hamburguesa
    act(() => {
      // Llamamos a la función que devuelve el hook para abrir el menú
      result.current.setIsMenuOpen(true);
    });

    // ASSERT: Verificamos que el estado cambió a true
    expect(result.current.isMenuOpen).toBe(true);
  });
});