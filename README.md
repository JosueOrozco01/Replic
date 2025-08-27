# Hooks Utilizados 
## useState
### ¿Por qué se utilizó?
El hook useState se utilizó para gestionar el estado local dentro de los componentes funcionales. Es fundamental para:

*Mantener y actualizar el estado de la lista de tareas
*Controlar el filtro activo actual (all, active, completed)
*Gestionar el valor del input en el formulario de nuevas tareas
*Permitir la reactividad de la interfaz cuando los datos cambian

## useEffect
### ¿Por qué se utilizó?
El hook useEffect se implementó para manejar efectos secundarios en la aplicación:

*Sincronizar el estado de las tareas con el localStorage del navegador
*Ejecutar código cuando ciertas dependencias cambian
*En la implementación inicial, se usó para guardar automáticamente en localStorage cuando las tareas se actualizaban

## useLocalStorage (Custom Hook)
### ¿Por qué se creó este custom hook?
Desarrollamos el custom hook useLocalStorage para:

*Abstraer y centralizar toda la lógica de persistencia en localStorage
*Permitir reutilización en múltiples componentes sin duplicar código
*Seguir el principio DRY (Don't Repeat Yourself)
*Simplificar el manejo de errores y la serialización/deserialización de datos
*Facilitar el testing y mantenimiento del código
*Hacer que los componentes principales fueran más limpios y legibles

## Link CloudFront

d18q1lhz8529bj.cloudfront.net/index.html

