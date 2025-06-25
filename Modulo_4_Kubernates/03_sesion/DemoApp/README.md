# Sesión 03: Kubernetes

## Fecha: 25/06/2025

## Objetivos de la Sesión

- Construir una imagen mediante dotnet

## Temas Cubiertos

1. **Dockers**
   - Creación de imagenes con DockerFile y dotnet

## Ejercicios Realizados

### Ejercicio 1: Construir un contenedor mediante dotnet con docker-compose

```docker
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY DemoApp/DemoApp.csproj /src/DemoApp
RUN dotnet restore DemoApp/DemoApp.csproj
COPY . .
RUN dotnet publish DemoApp/DemoApp.csproj -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /app .
EXPOSE 80
ENV ASPNETCORE_URLS=http://+:80
ENTRYPOINT [ "dotnet", "DemoApp.dll" ]


version: "3.9"
services:
  build: .
  ports:
    - "8000:80"
  depends_on:
    - db
  environment:
    - ASPNETCORE_ENVIRONMENT=Development
    - ConnectionStrings_DefaultConnection=Server=;Database=;User Id=;Password=
  db:
    image: "mcr.microsoft.com/mssql/server:2019-latest"
    environment:
      - ACCEPT_EULA=Y
      - PASS=
    ports:
      - "1433:1432"
    volumes:
      - mssqldata: /var/opt/mssql
  volumes:
    mssqldata
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Usos de Docker

## Reflexiones Personales

Esta sesión me ayudó a como crear y configurar una imagen con su contenedor de Docker y el uso de docker-compose.

---

*Entregable correspondiente a la Clase 03 del Módulo 4: Kubernetes*