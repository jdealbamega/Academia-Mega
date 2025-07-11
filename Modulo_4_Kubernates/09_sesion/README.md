# Sesión 09: Kubernetes

## Fecha: 03/07/2025

## Objetivos de la Sesión

- Balanceadores de carga

## Temas Cubiertos

1. **Dockers**
   - Balanceadores de carga

## Ejercicios Realizados

### Ejercicio 1: Subir contenedor a Git para analizar las vulnerabilidades

```docker
    dotnet run 
    $ dotnet new webapi -n DotnetMinimalAPIDemo 
    docker-compose up --scale api=3 –d 
    dotnet run 
    docker ps 
    docker logs dotnetminimalapidemo-api-1 
    docker stop dotnetminimalapidemo-api-1 
    docker system prune 
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Usos de Docker

## Reflexiones Personales

Esta sesión me ayudó a como administrar los balanceadores de carga de cada contenedor.

---

*Entregable correspondiente a la Clase 09 del Módulo 4: Kubernetes*