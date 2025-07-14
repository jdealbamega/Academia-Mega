# Sesión 12: Kubernetes

## Fecha: 08/07/2025

## Objetivos de la Sesión

- Usos de ConfigMaps

## Temas Cubiertos

1. **Kubernetes**
   - ConfigMaps y Secrets

## Ejercicios Realizados

### Ejercicio 1: Crear un ConfigMap y un archivo Secret con kubernetes

```kubernetes
apiVersion: v1
kind: ConfigMap
metadata:
  name: hello-config 
data: 
  GREETING: "Hola desde kubernetes con ConfigMap"
  
  
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: hello-deploy 
spec:
  replicas: 2
  selector:
    matchLabels:
      app: k8s-hello
  templates:
    metadata:
      labels:
        app: k8s-hello
    spec:
      containers:
      - name: hello
        image: jdealba/k8s-hello:latest
        ports:
        - containerPort:  3000
        env:
        - name: GREETING
          valueFrom:
            name: hello-secret
            key: GREETING
        - name: API_TOKEN
          valueFrom:
            configMapKeyRef:
              name: hello-config
              key: API_TOKEN
            secretKeyRef:
              name: hello-secret 
              key: API_TOKEN
        readinessProve:
          httpGet:
            path: /readyz
            port: 3000
          initialDelaySeconds: 10
          periodSeconds: 5
        livenessProve:
          httpGet:
            path: /readyz
            port: 3000
          initialDelaySeconds: 15
          periodSeconds: 10
		  
apiVersion: v1
kind: Secret
metadata:
  name: hello-Secret
type: Opaque
stringData:
  API-TOKEN: "s3cre3t-token-demo"
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó a crear ConfigMaps desde Kubernetes

---

*Entregable correspondiente a la Clase 12 del Módulo 4: Kubernetes*