# Sesión 23: Kubernetes

## Fecha: 25/07/2025

## Objetivos de la Sesión

	- Metricas por GRAFANA

## Temas Cubiertos

1. **Kubernetes**
   - Metricas por GRAFANA

## Ejercicios Realizados

### Ejercicio 1: Habilitar el gestor de metricas GRAFANA

```kubernetes
	kubectl –n kube-system get deploy metrics-server 
    minikube 
    kubectl top pods 
    mkdir clase23-escalado 
    kubectl apply -f .\deployment-demo.yaml 
    kubectl top pods 
    kubectl get pods 
    kubectl autoscale 
    kubectl autoscale deployment cpu-demo --cpu-percent=50 --min=1 – max=10 
    kubectl get pods 
    kubectl get hpa 
    kubectl edit cpu-demo 
    kubectl autoscale deployment cpu-demo --cpu-percent=50 --min=1 – max=10 
    kubectl hpa cpu-demo 
    kubectl patch hpa cpu-demo --patch   
    kubectl describe cpu-demo 
    kubectl whatch –n default kubectl get hpa cpu-demo 
    kubectl get hpa cpu-demo -w 
    kubectl delete hpa cpu-demo 

    helm repo update 
    kubectl create namespace monitoring 
    helm install monitoring prometheus-community/kube-prometheus-stack -n monitoring 
    kubectl get pods  

    kubectl port-forward 
    kubectl get service 
    kubectl port-forward –n monitoring svc/monitoring-grafana 300:80 
    kubectl port-forward -n monitoring svc/monitoring-grafana 3000:80 
    kubectl get secret –n monitoring monitrin 
    https://www.base64decode.org/ 
    kubectl get secret -n monitoring monitoring-grafana -o jsonpath="{.data.admin-password}
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó a levantar y administrar las metricas disponibles de Kubernetes

---

*Entregable correspondiente a la Clase 23 del Módulo 4: Kubernetes*