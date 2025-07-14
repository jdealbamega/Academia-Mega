# Sesión 15: Kubernetes

## Fecha: 11/07/2025

## Objetivos de la Sesión

	- Volúmenes Efímeros	

## Temas Cubiertos

1. **Kubernetes**
   - Volúmenes Efímeros

## Ejercicios Realizados

### Ejercicio 1: Crear volumenes vacios y persistentes

```kubernetes
	Kubectl create configmap app-config –from-literal=APP_COLOR=blue  
    --from-literal==WELCOME_MSG="Hola hola hola" 
    minikube start 
    Kubectl decribe configmap app-config 
    kubectl create configmap nginx-index --from-file=index.html 
    Kubectl apply –f .\deployment-nginx-index.yaml 
    Kubectl get pods 
    Imperativo  
    Kubctl expose deployment nginx-custom –port=80 –type=NodePort  
    --name nginx-custom-svc 
    kubectl expose deployment nginx-custom --port=80 --type=NodePort --name nginx-custom-svc 
    Kubectl get svc nginx-custom-svc 
    Minikube service nginx-custom-svc 
    Kubectl exec –ti –l app=nginx app= nginx-custom 
    Kubectl get pods 
    Kubectl exec ti nginx-custom-********* --printenv grep APP_COLOR 
    Imperativo  
    Kubectl create secret generic db-secret  --from-literal=MYSQL_ROOT_PASSWORD=5f6g7h8j9k0l. --from-literal=MYSQL_USER=usuario1 –from-literal=MYSQL_PASSWORD=5f6g7h8j9k0l. --from-literal=MYSQL_USER=usuario2 
    Kubctl get secret  
    minikube service nginx-custom-svc 
    Kubectl apply –f .\mysql-deployment.yamlkubctl get pods 
    SRE 
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó a crear y administrar diferentes volúmenes con Kubernetes

---

*Entregable correspondiente a la Clase 15 del Módulo 4: Kubernetes*