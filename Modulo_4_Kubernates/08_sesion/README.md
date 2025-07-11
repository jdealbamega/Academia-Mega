# Sesión 08: Kubernetes

## Fecha: 02/07/2025

## Objetivos de la Sesión

- Creación de Health Check (Revisar la salud de nuestro contenedor)

## Temas Cubiertos

1. **Dockers**
   - Health Check en docker

## Ejercicios Realizados

### Ejercicio 1: Subir Health check en Git

```docker
    git clone https://github.com/dockersamples/example-voting-app.git 
    docker compose -f docker-compose.images.yml up -d 
    docker compose up --build –d 
    docker compose up –d 
    docker inspect example-voting-app-vote-1 --format='{{.State.Health}}' 
    docker inspect example-voting-app-vote 
    docker inspect example-voting-app-vote --format='{{.Metadata.LastTagTime}}' 
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Usos de Docker

## Reflexiones Personales

Esta sesión me ayudó a como levantar el health-check en un aplicativo para validar el funcionamiento y la saud del propio contenedor.

---

*Entregable correspondiente a la Clase 08 del Módulo 4: Kubernetes*