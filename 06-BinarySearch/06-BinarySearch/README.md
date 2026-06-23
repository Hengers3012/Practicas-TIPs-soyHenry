![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# BinarySearch

## Introducción

En este ejercicio vamos a volver a buscar la implementación del código de un algoritmo pre-existente. (Como hacíamos con los algoritmos de ordenamiento en el M1).

En este caso se trata del algoritmo de **Binary Search**. Que funciona de la siguiente manera:

Dado un arreglo **ORDENADO** de números enteros y un número target, el algoritmo debe realizar la búsqueda de este elemento dentro del arreglo, siguiendo los siguientes pasos:

- Obtener el elemento DEL MEDIO del arreglo. En caso de un número par de elementos, tomar el de menor índice.  
- Dependiendo de si el elemento target es menor o mayor al elemento medio, realizar la misma operación con los elementos de la izquierda o la derecha respectivamente.
- En caso de haber logrado coincidir el elemento medio con el elemento target: retornar UN ARREGLO CON TODOS LOS ELEMENTOS MEDIOS HALLADOS HASTA EL MOMENTO, INCLUYENDO EL ÚLTIMO.
- En caso de no hallar el valor deseado, la función debe retornar el string "Value not found" (opinionado, case sensitive).


### Ejemplos

```javascript
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70];
  
BinarySearch(testArray, 0); //output -> [13, 5, 2, 0]
BinarySearch(testArray, 1); //output -> [13, 5, 2, 0, 1]
BinarySearch(testArray, 50); //output -> "Value not found"
```