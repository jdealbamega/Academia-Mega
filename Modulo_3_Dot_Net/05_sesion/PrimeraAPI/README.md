# Sesión 05: ASP.NET y C#

## Fecha: 16/05/2025

## Objetivos de la Sesión

- Conectar el API a una DB

## Temas Cubiertos

1. **ASP.NET y C#**
   - Uso de DB sobre APIs en ASP .Net y C#

## Ejercicios Realizados

### Ejercicio 1: Crear un API CRUD

```csharp
using System.Data.SqlClient;
using PrimeraAPI.Models;
using Microsoft.Extensions.Configuration;

namespace PrimeraAPI.Data
{
    public class ProductoService
    {
        private readonly string _connectionString;
        public ProductoService(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("TiendaDB");
        }

        //Obtener todos los productos
        public async Task<List<Producto>> GetAllAsync()
        {
            var productList = new List<Producto>();
            using var conn = new SqlConnection(_connectionString);
            await conn.OpenAsync();
            using var cmd = new SqlCommand("SELECT * FROM Productos with(nolock)", conn);
            using var reader = await cmd.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                productList.Add(new Producto
                {
                    Id = reader.GetInt32(0),
                    Nombre = reader.GetString(1),
                    Precio = reader.GetDecimal(2)
                });
            }
            return productList;
        }
        /*
        //Obtener un producto por ID
        public async Task<List<Producto>> GetByIdAsync()
        {

        }

        //Crear un nuevo producto
        public async Task<Producto> CreateAsync(Producto producto)
        {

        }
        */
    }
}
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Insertar, actualizar y eliminar datos sobre la BD

## Reflexiones Personales

Esta sesión me ayudó a conocer el uso de SQL sobre un API de C#.

---

*Entregable correspondiente a la Clase 05 del Módulo 3: ASP .NET y C#*