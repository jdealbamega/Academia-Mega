# Clase 26: 


# Fecha: 
30/07/2025

# Objetivos
     projectcalico.org/v3 Politicas de red

   
# Comandos utilizados
    
    # Sesión 26: Kubernetes

## Fecha: 30/07/2025

## Objetivos de la Sesión

	- Politicas de red

## Temas Cubiertos

1. **Kubernetes**
   - Politicas de red

## Ejercicios Realizados

### Ejercicio 1: 

```kubernetes
	minikube start --cni=calico --driver=docker
    kubectl get pods -n kube-system
    kubectl get pods -l k8s-app=calico-node -A
    kubectl create namespace backend
    kubectl create namespace frontend
    kubectl apply -f .\backend-deployment.yaml

    kubectl get pods -n backend
    kubectl apply -f .\frontend-pod.yaml
    kubectl get pods -n backend
    kubectl get pods -n frontend
    kubectl exec -it client-pod -n frontend -- wget -O- http://nginx-service.backend

    kubectl apply -f .\deny-all-backend.yaml
    minikube start --network-plugin=cni --cni=false
    minikube start --network-plugin=cni --cni=false


    kubectl get pods
    kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.28.0/manifests/calico.yaml
    kubectl get pods -n kube-system

    kubectl exec -t client-pod -n frontend
    kubectl get pods -n backend
    kubectl exec -t client -pod -n frontend -wget -0- http://nginx-service.backend


    kubectl apply -f .\allow-frontend-to-backend.yaml 
    kubectl get pods
    kubectl -it 
    kubectl apply -f .\prueba-deployment.yaml
    kubectl get pods -n backend
    kubectl exec -it client-pod-prueba --wget -O- http://nginx-service.backend
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó a crear politicas de red en Kubernetes

---

*Entregable correspondiente a la Clase 26 del Módulo 4: Kubernetes*