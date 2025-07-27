# Sesión 17: Kubernetes

## Fecha: 15/07/2025

## Objetivos de la Sesión

	- Redis server
    - Configuraciones estaticas
    - Replicas

## Temas Cubiertos

1. **Kubernetes**
   - Redis server
   - Configuraciones estaticas
   - Replicas

## Ejercicios Realizados

### Ejercicio 1: Crear replicas

```kubernetes
	minikube start 
    kubectl apply -f .\states-examples.yaml 
    kubectl apply -f .\redis-statefulset.yaml 
    kubectl get pods 
    kubectl delete pod redis-0 
    kubectl logs redis set 
    kubectl exec -ti redis -0 --redis-cli SET mykey "Hola" 
    kubectl exec redis-1 – getent 
    kubectl get svc redis -o wide 
    kubectl exec redis-0 - redis-cli INFO replication 
    kubectl exec -h redis-0 - redis-cli REPLICAOF NO ONE 
    kubectl exec -ti redis -0 --redis-cli SET mykey "Hola" 
    kubectl exec -ti redis -1 --redis-cli SET mykey "Hola" 
    kubectl exec -h redis-0 - redis-cli REPLICAOF NO ONE redis-0.redis.default.svc.cluster.local 6379  
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó a crear y administrar diferentes replicas con Kubernetes

---

*Entregable correspondiente a la Clase 17 del Módulo 4: Kubernetes*