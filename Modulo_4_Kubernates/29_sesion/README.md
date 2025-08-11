# Sesión 29: Kubernetes

## Fecha: 04/08/2025

## Objetivos de la Sesión

	- Regla de auditoria 

## Temas Cubiertos

1. **Kubernetes**
   - Regla de auditoria 

## Ejercicios Realizados

### Ejercicio 1: 

```kubernetes
	minikube start --cni=calico --driver=docker
     minikube delete
    
     kubectl apply -f .\k8s\01-networkpolicies.yaml
     kubectl apply -f .\k8s\02-rbac.yaml
     kubectl apply -f .\k8s\03-postgres.yaml
     kubectl apply -f .\k8s\04-backend.yaml
     kubectl apply -f .\k8s\05-frontend.yaml
     kubectl describe pod ""
     kubectl 
     minikube addons enable gvisor-runtimesdlass
     kubectl get pods -n 
     kubectl apply -f .\k8s\05-frontend.yaml
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó a conocer e implementar las reglas de auditoria en Kubernetes.

---

*Entregable correspondiente a la Clase 29 del Módulo 4: Kubernetes*