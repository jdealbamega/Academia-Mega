# Sesión 04: Kubernetes

## Fecha: 26/06/2025

## Objetivos de la Sesión

- Usos de docker-compose

## Temas Cubiertos

1. **Dockers**
   - Usos de docker-compose

## Ejercicios Realizados

### Ejercicio 1: Construir un archivo docker-compose

```docker
networks:
  frontnet:
  backnet:
services:
  web:
    networks:
      - frontnet
      - backnet
  db:
    networks:
      - backnet
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Usos de Docker

## Reflexiones Personales

Esta sesión me ayudó a conocer más de los usos de docker-compose.

---

*Entregable correspondiente a la Clase 04 del Módulo 4: Kubernetes*