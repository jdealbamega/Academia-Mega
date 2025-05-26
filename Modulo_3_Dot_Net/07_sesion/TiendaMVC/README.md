# Sesión 07: ASP.NET y C#

## Fecha: 20/05/2025

## Objetivos de la Sesión

- Construir front para mostrar los resultados de un API en un sitio web

## Temas Cubiertos

1. **ASP.NET y C#**
   - Construccion de Web Sites en ASP .Net

## Ejercicios Realizados

### Ejercicio 1: Crear un sitio web con conexion a un API

```csharp
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TiendaMVC.Models;

namespace TiendaMVC.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

using Microsoft.AspNetCore.Mvc;
using TiendaMVC.Models;
using System.Collections.Generic;

namespace TiendaMVC.Controllers
{
    public class ProductosController : Controller
    {
        private static readonly List<Producto> _productos = new()
        {
            new Producto { Id = 1, Nombre = "Xiaomi 15 Ultra", Precio = 33000.00m},
            new Producto { Id = 2, Nombre = "HONOR Magic 7 Pro", Precio = 29000.00m}
        };

        public IActionResult Index()
        {
            return View(_productos);
        }

        public IActionResult Details(int id)
        {
            var product = _productos.FirstOrDefault(p =>  p.Id == id);
            if (product == null)
                return NotFound();
            return View(product);
        }
    }
}

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@ViewData["Title"] - TiendaMVC</title>
    <script type="importmap"></script>
    <link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="~/css/site.css" asp-append-version="true" />
    <link rel="stylesheet" href="~/TiendaMVC.styles.css" asp-append-version="true" />
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div class="container-fluid">
                <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">TiendaMVC</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                            <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Index">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" asp-area="" asp-controller="Productos" asp-action="Index">Productos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="container">
        <main role="main" class="pb-3">
            @RenderBody()
        </main>
    </div>

    <footer class="border-top footer text-muted">
        <div class="container">
            &copy; 2025 - TiendaMVC - <a asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
        </div>
    </footer>
    <script src="~/lib/jquery/dist/jquery.min.js"></script>
    <script src="~/lib/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="~/js/site.js" asp-append-version="true"></script>
    @await RenderSectionAsync("Scripts", required: false)
</body>
</html>


@model Producto
@{
    ViewData["Title"] = "Detalle del producto";
}

<h1>@ViewData["Title"]</h1>
<div>
    <h2>@Model.Nombre</h2>
    <dl>
        <dt> Id </dt>
        <dd>@Model.Id</dd>

        <dt> Precio </dt>
        <dd>@Model.Precio.ToString("C")</dd>
    </dl>
</div>

<a asp-action="Index">Volver al listado</a>
```

## Desafíos Encontrados

- Uso de versiones de dotNet, se creó el archivo global.json para indicarle al proyecto la version de dotNet con la que se va a compilar el proyecto.

## Recursos Adicionales

- 

## Próximos Pasos

- Uso de base de datos y front

## Reflexiones Personales

Esta sesión me ayudó a como inicializar un projecto front end y conectar un API.

---

*Entregable correspondiente a la Clase 07 del Módulo 3: ASP .NET y C#*