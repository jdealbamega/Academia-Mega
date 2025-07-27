# Sesión 16: Kubernetes

## Fecha: 11/07/2025

## Objetivos de la Sesión

	- Creación de CronJobs	

## Temas Cubiertos

1. **Kubernetes**
   - CronJobs

## Ejercicios Realizados

### Ejercicio 1: Crear cronjobs

```kubernetes
apiVersion: batch/v1
kind: CronJob
metadata:
  name: date-printer
spec:
  schedule: "*/1 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
            - name: dater
              image: busybox
              command: ["sh", "-c", "date; echo Hello from the cronjob"]
            restartPolicy: OnFailure
			
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: demo-monitor
spec:
  selector:
    matchLabels:
      app: demo-monitor
  template:
    metadata:
      labels:
        app: demo-monitor
      spec:
        containers:
        - name: monitor
          image: busybox
          args:
          - /bin/sh
          - -c
          - |
            echo "Starting node monitor on $(hostname)";
            while true; do echo "Monitoring node $(hostname)..."; sleep 60; done
			
apiVersion: batch/v1
kind: job
metadata:
  name: job-factorial
spec:
  completions: 5
  parallelism: 2
  template:
    spec:
      containers:
      - name: worker
        image: busybox
        command: ["sh", "-c", "Calculating the 5 factorial; sleep 3; echo '120'"]
      restartPolicy: Never
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó a crear y administrar diferentes cronjobs con Kubernetes

---

*Entregable correspondiente a la Clase 16 del Módulo 4: Kubernetes*