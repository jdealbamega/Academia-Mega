# Sesión 05: Kubernetes

## Fecha: 01/07/2025

## Objetivos de la Sesión

- Uso de docker scout para analizar las vulnerabilidades

## Temas Cubiertos

1. **Dockers**
   - Uso de docker scout para analizar las vulnerabilidades

## Ejercicios Realizados

### Ejercicio 1: Subir contenedor a Git para analizar las vulnerabilidades

```docker
    Git comit –m "Clase7" 
    docker swarm init --advertis e-addr 127.0.0.1 
    docker swarm init    
    docker swarm leave –force 
    docker swarm init 
    docker swarm join-token manager 
    docker service create --name monitor --mode global alpine:latest 127.0.0.1  
    docker node ls -q 
    docker node update --label-add tipo=frontend $(docker node ls -q) 
    docker service create --name webfront ++contraint "node.labels.tipo == frontend --replicas 2 p 8085:80 httpd:alpine 
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Usos de Docker

## Reflexiones Personales

Esta sesión me ayudó a como crear y configurar docker scout para buscar las vulnerabilidades de un aplicativo.

---

*Entregable correspondiente a la Clase 05 del Módulo 4: Kubernetes*