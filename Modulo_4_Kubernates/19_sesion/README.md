# Sesión 19: Kubernetes

## Fecha: 21/07/2025

## Objetivos de la Sesión

	- CronJob infinito

## Temas Cubiertos

1. **Kubernetes**
   - Demonsets y Pods

## Ejercicios Realizados

### Ejercicio 1: Crear pods

```kubernetes
	minikube start
    docker build -t pod-monitor:v1 . 
    docker image 
    docker get pods 
    kubectl apply -f .\rbac.yml 
    kubectl apply -f .\cronjob.yaml 
    kubectl get jobs –watch 
    kubectl get pods 
    Kubectl get describe  
    Kubectl apply –f .\cronjob.yaml 
    Kubectl get jobs 
    Kubectl get describe pod 
    Kubectl get pod 
    minikube -p minikube docker-env 
    minikube -p minikube docker-env --shell powershell | Invoke-Expression 
    docker build -t pod-monitor:v1 . 
    docker build -t pod-monitor:v1 .  
    kubectl get pod-monitor-job-29218505 
    kubectl get jobs 
    kubectl logs pod-monitor-job-29218505-8lnm4 
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó a crear y administrar diferentes cronjobs con Kubernetes

---

*Entregable correspondiente a la Clase 19 del Módulo 4: Kubernetes*