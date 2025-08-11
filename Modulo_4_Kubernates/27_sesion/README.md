# Sesión 27: Kubernetes

## Fecha: 31/07/2025

## Objetivos de la Sesión

	- Bloqueos de comunicaciones de red

## Temas Cubiertos

1. **Kubernetes**
   - Bloqueos de comunicaciones de red

## Ejercicios Realizados

### Ejercicio 1: 

```kubernetes
	minikube start --cni=calico --driver=docker
     kubectl apply -f .\secure-app.yaml
     kubectl get pod
     kubectl log secure-app-575c878747-s8szl
     kubectl describe pod secure-app-575c878747-s8szl

     kubectl create namespace secureapp
     kubectl label ns secureapp pod-security-kubernetes.io/enforce=retricted
     kubectl label ns secureapp pod-security-kubernetes.io/enforce=baseline --overrride
     kubectl label ns secureapp pod-security-kubernetes.io/enforce=baseline --overwrite

     kubectl get pods -n secureapp
     kubectl delete pod pod-criminal -n secureapp
     kubectl label ns secureapp pod-security-kubernetes.io/enforce=restricted --overwrite

     kubectl label ns secureapp pod-security.kubernetes.io/enforce=baseline --overwrite
     kubectl delete pod pod-criminal -n secureapp
     kubectl apply -f .\pod-criminal.yaml
     kubectl delete pod pod-criminal -n secureapp
     kubectl label ns secureapp pod-security.kubernetes
     kubectl apply -f .\pod-criminal.yaml
     kubectl get pods -n kube-system
     kubectl apply -f .\pod-criminal.yaml
     kubectl delete pod pod-criminal -n secureapp
     kubectl get pods -n secureapp
     kubectl apply -f .\pod-criminal.yaml 
     kubectl get pods -n secureapp
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó a bloquear cualquier red de comunicación en Kubernetes

---

*Entregable correspondiente a la Clase 27 del Módulo 4: Kubernetes*