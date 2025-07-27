# Sesión 20: Kubernetes

## Fecha: 22/07/2025

## Objetivos de la Sesión

	- NameSpaces

## Temas Cubiertos

1. **Kubernetes**
   - NameSpaces

## Ejercicios Realizados

### Ejercicio 1: Crear diferentes namespaces

```kubernetes
	kubectl get namespaces 
    kubectl create namespace dev 
    kubectl create namespace prod 
    kubectl get namespaces 
    Kubectl run test-pod --image=busybox -it --rm --restart=Never --namespace dev –sh 
    Kubectl get pods 
    Kubectl get poids -n pods 
    kubectl apply -f .\quota-dev.yaml 
    kubectl rescribe resourcequota dev-quota -n dev 
    kubectl rescribe resourcequota dev-quota -n dev 
    kubectl apply -f .\deployment-cpuhog.yaml  
    Kubectl describe quota dev-quota -n dev 
    Kubectl get pods –n dev 
    Kubectl describe quota dev-quota –n dev 
    Kubectl get pods –n dev 
    kubectl apply -f .\limitrange-dev.yaml 
    Kubectl describe limitrange dev-limitrange -n dev 
    kubectl run test --image=busybox -n -- sleep 1000 
    kubectl describe quota dev-quota 
    Kubectl get pod test –n dev –o yaml 
    Kubectl get pods –n dev 
    Kubectl get pod test –n dev –o yaml | Select-String –Pattern "resources:" -Context 0, 4 
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó a crear y administrar diferentes namespaces con Kubernetes

---

*Entregable correspondiente a la Clase 19 del Módulo 4: Kubernetes*