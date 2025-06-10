# Sesión 09: ASP.NET y C#

## Fecha: 22/05/2025

## Objetivos de la Sesión

- Construir front para mostrar los resultados de un API en un sitio web

## Temas Cubiertos

1. **ASP.NET y C#**
   - Construccion de Web Site CRUD en ASP .Net

## Ejercicios Realizados

### Ejercicio 1: Crear un sitio web con conexion a un API

```csharp
using Microsoft.AspNetCore.Mvc;
using TiendaMVC.Models;
using TiendaMVC.Services;
using System.Collections.Generic;

namespace TiendaMVC.Controllers
{
    public class ProductosController : Controller
    {
        /*private static readonly List<Producto> _productos = new()
        {
            new Producto { Id = 1, Nombre = "Xiaomi 15 Ultra", Precio = 33000.00m},
            new Producto { Id = 2, Nombre = "HONOR Magic 7 Pro", Precio = 29000.00m}
        };*/
        private readonly IProductoApiService _api;
        public ProductosController(IProductoApiService api) => _api = api;

        //GET /Productos
        public async Task<IActionResult> Index()
        {
            var products = await _api.GetAllAsync();
            return View(products);
        }

        //GET /Productos/Details/5
        public async Task<IActionResult> Details(int id)
        {
            var product = await _api.GetByIdAsync(id);
            if (product == null) return NotFound();
            return View(product);
        }

        //GET /Productos/Create
        public IActionResult Create() => View();

        //POST /Productos/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Producto producto)
        {
            if (!ModelState.IsValid) return View(producto);

            var created = await _api.CreateAsync(producto);
            if (created == null)
            {
                ModelState.AddModelError("", "Error al crear el producto");
                return View(producto);
            }
            return RedirectToAction(nameof(Index));
        }

        //GET /Productos/Edit/5
        public async Task<IActionResult> Edit(int id)
        {
            var product = await _api.GetByIdAsync(id);
            if (product == null) return NotFound();
            return View(product);
        }

        //PUT /Productos/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, Producto producto)
        {
            if (id != producto.Id) return BadRequest();
            if (!ModelState.IsValid) return View(producto);

            var ok = await _api.UpdateAsync(id, producto);
            if (!ok)
            {
                ModelState.AddModelError("", "Error al actualizar el producto");
                return View(producto);
            }
            return RedirectToAction(nameof(Index));
        }

        //GET /Productos/Delete/5
        public async Task<IActionResult> Delete(int id)
        {
            var product = await _api.GetByIdAsync(id);
            if (product == null) return NotFound();
            return View(product);
        }

        //DELETE /Productos/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Delete(int id, Producto producto)
        {
            if (id != producto.Id) return BadRequest();
            if (!ModelState.IsValid) return View(producto);

            var ok = await _api.DeleteAsync(id);
            if (!ok)
            {
                ModelState.AddModelError("", "Error al elminar el producto");
                return View(producto);
            }
            return RedirectToAction(nameof(Index));
        }
    }
}


using System.Net.Http.Json;
using TiendaMVC.Models;

namespace TiendaMVC.Services
{
    public class ProductoApiService : IProductoApiService
    {
        private readonly HttpClient _http;
        public ProductoApiService(HttpClient http) => _http = http;
        public async Task<List<Producto>> GetAllAsync() =>
            await _http.GetFromJsonAsync<List<Producto>>("api/productos") ?? new List<Producto>();

        public async Task<Producto?> GetByIdAsync(int id) =>
            await _http.GetFromJsonAsync<Producto>($"api/productos/{id}");
        public async Task<Producto?> CreateAsync(Producto p)
        {
            var response = await _http.PostAsJsonAsync("api/productos", p);
            if (!response.IsSuccessStatusCode) return null;
            return await response.Content.ReadFromJsonAsync<Producto>();
        }

        public async Task<bool> UpdateAsync(int id, Producto p)
        {
            var response = await _http.PutAsJsonAsync($"api/productos/{id}", p);
            return response.IsSuccessStatusCode;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var response = await _http.DeleteAsync($"api/productos/{id}");
            return response.IsSuccessStatusCode;
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

@model TiendaMVC.Models.Producto
@{
    ViewData["Title"] = "Crear producto";
}

<h1>@ViewData["Title"]</h1>
<form asp-action="Create" method="post">
    <div class="form-group">
        <label asp-for="Nombre"></label>
        <input asp-for="Nombre" type="text" class="form-control">
        <span asp-validation-for="Nombre" class="text-danger"></span>
    </div>
    <div class="form-group">
        <label asp-for="Precio"></label>
        <input asp-for="Precio" type="number" class="form-control">
        <span asp-validation-for="Precio" class="text-danger"></span>
    </div>
    <button type="submit" class="btn btn-primary">Guardar</button>
    <a asp-action="Index" class="btn btn-secondary">Cancelar</a>
    
</form>

@section Scripts{
    @{ await Html.RenderPartialAsync("_ValidationScriptsPartial"); }
}


@model TiendaMVC.Models.Producto
@{
    ViewData["Title"] = "Editar producto";
}

<h1>@ViewData["Title"]</h1>
<form asp-action="Edit" method="post">
    <input asp-for="Id" type="hidden">
    <div class="form-group">
        <label asp-for="Nombre"></label>
        <input asp-for="Nombre" type="text" class="form-control">
        <span asp-validation-for="Nombre" class="text-danger"></span>
    </div>
    <div class="form-group">
        <label asp-for="Precio"></label>
        <input asp-for="Precio" type="number" class="form-control">
        <span asp-validation-for="Precio" class="text-danger"></span>
    </div>
    <button type="submit" class="btn btn-primary">Actualizar</button>
    <a asp-action="Index" class="btn btn-secondary">Cancelar</a>
    
</form>

@section Scripts{
    @{ await Html.RenderPartialAsync("_ValidationScriptsPartial"); }
}

@model TiendaMVC.Models.Producto
@{
    ViewData["Title"] = "Eliminar producto";
}

<h1>@ViewData["Title"]</h1>
<form asp-action="Delete" method="post">
    <input asp-for="Id" type="hidden">
    <p>¿Desea eliminar eliminar producto <strong>@Model.Nombre</strong>?</p>
    <button type="submit" class="btn btn-danger">Si</button>
    <a asp-action="Index" class="btn btn-secondary">No</a>
    
</form>

@section Scripts{
    @{ await Html.RenderPartialAsync("_ValidationScriptsPartial"); }
}
```

## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Uso de base de datos y front.

## Reflexiones Personales

Esta sesión me ayudó a como conectar un API real en mi Web Site de ASP.

---

*Entregable correspondiente a la Clase 09 del Módulo 3: ASP .NET y C#*