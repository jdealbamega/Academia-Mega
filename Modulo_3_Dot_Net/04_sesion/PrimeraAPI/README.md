# Sesión 04: ASP.NET y C#

## Fecha: 15/05/2025

## Objetivos de la Sesión

- Construir un API CRUD

## Temas Cubiertos

1. **ASP.NET y C#**
   - Construccion de APIs en ASP .Net y C#

## Ejercicios Realizados

### Ejercicio 1: Crear un API CRUD

```csharp
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
var app = builder.Build();

app.UseHttpsRedirection();
app.MapControllers();

app.Run();



using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]

public class ProductosController : ControllerBase{
    //Aquí seria la lectura de datos en BD
    public static readonly List<Producto> _datos = new(){
        new Producto {id = 1, Nombre = "iPhone 16", Precio = 20000.0m},
        new Producto {id = 2, Nombre = "Galaxy S25 Edge", Precio = 20000.0m}
    };

    /*
        - CREATE -
    */
    [HttpPost] //POST /api/productos
    public ActionResult<Producto> Create(Producto nuevo){
        nuevo.id = _datos.Max(p => p.id) + 1;
        _datos.Add(nuevo);
        return CreatedAtAction(nameof(GetById),new {id = nuevo.id}, nuevo);
    }

    /*
        - READ -
    */

    [HttpGet] //GET /api/productos
    public ActionResult<IEnumerable<Producto>> GetAll(){
        return Ok(_datos);
    }

    [HttpGet("{id}")] //GET /api/productos/1
    public ActionResult<Producto> GetById(int id){
        var product = _datos.FirstOrDefault(p => p.id == id);
        if(product == null) return NotFound();
        return Ok(product);
    }

    /*
        - UPDATE -
    */
    [HttpPut("{id}")] // PUT api/productos/1
    public IActionResult Update(int id, Producto actualizado){
        var product = _datos.FirstOrDefault( product => product.id == id);
        if(product == null) return NotFound();

        product.Nombre = actualizado.Nombre;
        product.Precio = actualizado.Precio;

        return Ok("Se actualizó el producto correctamente");
    }

    /*
        - DELETE -
    */
    [HttpDelete("{id}")] // DELETE api/productos/1
    public IActionResult Delete(int id){
        var product = _datos.FirstOrDefault( product => product.id == id);
        if(product == null) return NotFound();

        _datos.Remove(product);
        return Ok("El producto se ha eliminado correctamente");
    }
}
//Model Producto
public class Producto{
    public int id { get; set; }
    public string Nombre { get; set; } = string.Empty;
    public decimal Precio { get; set; }
}
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Uso de base de datos

## Reflexiones Personales

Esta sesión me ayudó a como crear el CRUD en una API y definir los mensajes de salida.

---

*Entregable correspondiente a la Clase 04 del Módulo 3: ASP .NET y C#*