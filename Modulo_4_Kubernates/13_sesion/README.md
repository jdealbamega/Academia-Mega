# Sesión 13: Kubernetes

## Fecha: 09/07/2025

## Objetivos de la Sesión

	- Reinicio de pods
	- Dashboard de minikube 
	- Creación de recursos de dos modos 
	- Código declarativo en el yaml 
	- Código o forma imperativa = en comando  
	- Crear el despliegue y la image 	

## Temas Cubiertos

1. **Kubernetes**
   - Volúmenes Efímeros

## Ejercicios Realizados

### Ejercicio 1: Crear un ConfigMap y un archivo Secret con kubernetes para administrar pods

```kubernetes
kubectl apply -f .\deployment.yaml 
    kubectl get deployments 
    kubectl get pods 
    kubectl apply -f .\deployment.yaml 
    kubectl apply -f .\configmap.yaml 
    kubectl apply -f .\secret.yaml 
    kubctl delete hello-deploy 
    kubectl rollout restart deployment hello-deploy 
    kubectl scale deployment hello-deploy --replicas=0 
    minikube dashboard 
    kubectl run mi-pod-clase13 --image=nginx:latest --restart=Never     
    kubectl get pods 
    kubectl logs mi-pod-clase13 
    kubectl exec -ti mi-pod-clase13 -- /bin/bash 
    ls 
    exit 
    kubectl get pods -o  wide 
    kubectl get deployments 
    kubectl apply -f .\deployment.yaml 
    kubectl get pods -l app=hello 
    kubectl get pods 
    kubectl get rs 
    kubectl get deployments 
    kubectl edit deployment hello-deploy 
    kubectl set image deployment/hello-deply k8s-hello:latest   
    kubectl rollout undo deployment hello-deploy 
    kubectl get deployments 
    deployment.apps "hello-deploy" deleted 
    kubectl get deployments 
    kubectl get pods 
    *****

    kubectl apply -f .\deployment-nginx.yaml 
    kubectl get services 
    kubectl describe service web-service 
    kubectl exec -it $(kubectl get pod -l app=web -o jsonpath="{.items[0].metada-name}") --curl -s web-service:80 
    kubectl get pod -l app=web -o jsonpath="{.items[0].metada.name} 
    kubectl exec -it $(kubectl get pod -l app=web -o jsonpath="{.items[0].metadata.name}") --curl -s web-service:80 
    kubectl edit service web-service  
    kubectl apply -f .\deployment-nginx.yaml 
    kubectl get pod -l app=web  
    kubectl edit service web-service 
    minikube ip 
    minikube service web-service 
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó a crear pods desde Kubernetes

---

*Entregable correspondiente a la Clase 13 del Módulo 4: Kubernetes*