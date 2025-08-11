# Sesión 25: Kubernetes

## Fecha: 29/07/2025

## Objetivos de la Sesión

	- SideCar

## Temas Cubiertos

1. **Kubernetes**
   - SideCar

## Ejercicios Realizados

### Ejercicio 1: 

```kubernetes
	minikube start
    kubectl apply -f sidecar-logs.yaml
    kubectl logs -f sidecar-demo -c log-forwarder


    kube create serviceaccount limited-sa -na
    kubectl auth can-i --as system:serviceaccount:demo:limited-sa list pods -n demo
    kubectl auth can-i --as system:serviceaccount:demo:limited-sa list pods -n demo
    kubectl auth can-i --as system:serviceaccount:demo:limited-sa create pods -n demo
    kubectl run testpod -n demo --rm -it -serviceaccount=limited-sa --image=bitnami/kubectl:latest --restart=Never -- bash
    kubectl run testpod -n demo --rm -it --image=bitnami/kubectl:latest --restart=Never --overrides='{spec:{"serviceAccountName":"limited-sa"}}' --bash
    kubectl create serviceaccount limited-sa -n demo



    kubectl apply -f testpod.yaml
    kubectl get pods -n demo
    kubectl get pods -n demo
    kubectl get pods -n demo
    kubectl run testpod -it -- bash
    kubectl exec -it testpod -n demo -- bach
    kubectl delete 

    kubectl describe get pods -n demo
    kubectl describe get pods -n demo
    minikube addons enable calico
    minikube start --cni=calico
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó a crear pruebas de seguridad en Kubernetes

---

*Entregable correspondiente a la Clase 25 del Módulo 4: Kubernetes*