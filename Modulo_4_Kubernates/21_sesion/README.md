# Clase 21: 
Helm

# Fecha: 
23/07/2025

# Objetivos
    
    -   Helm creación de aplicación entere (Gestor de paquetes de kubernetes)
    -   Chart conjunto de archivos yaml para desplegar o instalar aplicaciones completas
    -   superseded remplazado por alguien 

    
# Comandos utilizados
    
    # Sesión 21: Kubernetes

## Fecha: 23/07/2025

## Objetivos de la Sesión

	- Gestion de paquetes kubernetes HELM

## Temas Cubiertos

1. **Kubernetes**
   - Gestion de paquetes kubernetes HELM

## Ejercicios Realizados

### Ejercicio 1: Habilitar el gestor de paquetes HELM

```kubernetes
	winget install Helm.Helm 
    helm 
    helm version 
    helm repo add bitnami https://charts.bitnami.com/bitnami 
    repo list 
    helm repo update 
    helm install my-wordpress bitnami/wordpress --set service.type=LoadBalancer
    kubectl get pods
    kubectl get all –l app.kubernetes.io/intance=my-wordpress
    helm list 
    helm pull bitnami/wordpress --untar
    helm list
    helm upgrade my-wordpress bitnami/wordpress --set wordpressUsername=admin 
    helm list
    kubectl get all -l app.kubernetes.io/instance=my-wordpress 
    helm uninstall my-wordpress
    helm list
    helm repo list
    kubectl get all -l app.kubernetes.io/instance=my-wordpress 
    
    helm create chart-clase21 
    helm install clase21-release ./chart-clase21 
    kubectl get all -l app.kubernetes.io/instance=clase21-release 
    kubectl port-forward service/clase21-release-chart-clase21 8080:80 
    http://127.0.0.1:8080

    <html><body><h1>{{ .Values.message }}</h1></body></html> 
    helm upgrade clase21-release ./chart-clase21
    helm upgrade clase21-release ./chart-clase21 --set message="Hola"
    helm history clase21-release
    helm rollback clase21-release 1
    helm package .\chart-clase21\
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó a levantar y administrar los paquetes disponibles de Kubernetes

---

*Entregable correspondiente a la Clase 21 del Módulo 4: Kubernetes*