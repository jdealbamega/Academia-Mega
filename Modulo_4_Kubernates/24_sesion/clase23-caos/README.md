# Sesión 24: Kubernetes

## Fecha: 28/07/2025

## Objetivos de la Sesión

	- Pumba

## Temas Cubiertos

1. **Kubernetes**
   - Pruebas de error con Pumba

## Ejercicios Realizados

### Ejercicio 1: 

```kubernetes
	kubectl apply -f .\probes-demo.yaml
    kubectl logs -f deployment/probes-demo
    kubectl delete deployment/probes-demo
    kubectl get pods
    kubectl apply -f .\init-web.yaml
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó a crear pruebas con Pumba en Kubernetes

---

*Entregable correspondiente a la Clase 24 del Módulo 4: Kubernetes*