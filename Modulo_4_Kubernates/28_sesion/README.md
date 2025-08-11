# Sesión 28: Kubernetes

## Fecha: 01/08/2025

## Objetivos de la Sesión

	- Cifrado en transito y cifrado en reposo

## Temas Cubiertos

1. **Kubernetes**
   - Cifrado en transito y cifrado en reposo

## Ejercicios Realizados

### Ejercicio 1: 

```kubernetes
	minikube start --cni=calico --driver=docker
	 minikube delete
	 minikube start --driver=docker --cpus=4 --memory=6g --extra-config=apiserver.audit-policy-file=/cluster-config/audit-policy.yaml --extra-config=apiserver.audit-log-path=/var/log/k8s-audit.log --extra-config=apiserver.encryption-provider-config=/cluster-config/encryption-config.yaml

	 minikube start --driver=docker --cpus=4 --memory=6g --extra-config=apiserver.audit-policy-file=/cluster-config/audit-policy.yaml --extra-config=apiserver.audit-log-path=/var/log/k8s-audit.log

	 minikube start
	 kubectl apply -f .\cluster-config\gvisor-runtimeclass.yaml
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Bases de Kubernetes

## Reflexiones Personales

Esta sesión me ayudó poder cifrar la información que pasa por los pods en Kubernetes.

---

*Entregable correspondiente a la Clase 28 del Módulo 4: Kubernetes*