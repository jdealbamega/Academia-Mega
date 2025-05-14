# Sesión 03: ASP.NET y C#

## Fecha: 14/05/2025

## Objetivos de la Sesión

- Construir un API

## Temas Cubiertos

1. **ASP.NET y C#**
   - Construccion de APIs en ASP .Net y C#

## Ejercicios Realizados

### Ejercicio 1: Crear un API

```csharp
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
var app = builder.Build();

app.UseHttpsRedirection();
app.MapControllers();

app.Run();



using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]

public class SaludoController : ControllerBase{
    // GET /saludo
    [HttpGet]
    public IActionResult Get(){
        return Ok(new { mensaje = "Hola desde el SaludoController" });
    }

    // GET /saludo/{nombre}
    [HttpGet("personalizado/{nombre}")]
    public IActionResult GetPersonalizado(string nombre){
        var respuesta = new{
            mensaje = $"Holaaa, {nombre}"
        };

        return Ok(respuesta);
    }
}


using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]

public class ProductosController : ControllerBase{
    public static readonly List<Producto> _datos = new(){
        new Producto {id = 1},
        new Producto {id = 2}
    };

    [HttpGet]
    public ActionResult<IEnumerable<Producto>> GetAll(){
        return Ok(_datos);
    }
}

public class Producto{
    public int id {get; set;}
}
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- 

## Reflexiones Personales

Esta sesión me ayudó a conocer el uso de las APIs en C#.

---

*Entregable correspondiente a la Clase 03 del Módulo 3: ASP .NET y C#*