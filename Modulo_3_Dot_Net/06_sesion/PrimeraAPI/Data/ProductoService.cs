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

        //Obtener un producto por ID
        public async Task<Producto> GetByIdAsync(int id)
        {
            using var conn = new SqlConnection(_connectionString);
            await conn.OpenAsync();
            using var cmd = new SqlCommand(
                "SELECT * FROM Productos with(nolock) WHERE id = @Id", conn
            );
            cmd.Parameters.AddWithValue("@Id", id);
            using var reader = await cmd.ExecuteReaderAsync();
            if (await reader.ReadAsync())
            {
                return new Producto
                {
                    Id = reader.GetInt32(0),
                    Nombre = reader.GetString(1),
                    Precio = reader.GetDecimal(2)
                };
            }
            return null;
        }
        //Crear un nuevo producto
        public async Task<Producto> CreateAsync(Producto producto)
        {
            using var conn = new SqlConnection(_connectionString);
            await conn.OpenAsync();
            using var cmd = new SqlCommand(
                "INSERT INTO Productos (Nombre, Precio) OUTPUT INSERTED.id VALUES (@Nombre, @Precio)", conn
            );
            cmd.Parameters.AddWithValue("@Nombre", producto.Nombre);
            cmd.Parameters.AddWithValue("@Precio", producto.Precio);

            var id = (int)await cmd.ExecuteScalarAsync()!;
            producto.Id = id;
            return producto;
        }

        //Actualizar un producto ya existente
        public async Task<bool> UpdateAsync(int id, Producto producto)
        {
            using var conn = new SqlConnection(_connectionString);
            await conn.OpenAsync();
            using var cmd = new SqlCommand(
                "UPDATE Productos SET Nombre = @Nombre, Precio = @Precio WHERE id = @Id", conn
            );
            cmd.Parameters.AddWithValue("@Nombre", producto.Nombre);
            cmd.Parameters.AddWithValue("@Precio", producto.Precio);
            cmd.Parameters.AddWithValue("@Id", id);
            var afectedRows = await cmd.ExecuteNonQueryAsync();

            return afectedRows > 0;

        }

        public async Task<bool> DeleteAsync(int id)
        {
            using var conn = new SqlConnection(_connectionString);
            await conn.OpenAsync();
            using var cmd = new SqlCommand(
                "DELETE FROM Productos WHERE id = @Id", conn
            );
            cmd.Parameters.AddWithValue("@Id", id);
            var afectedRows = await cmd.ExecuteNonQueryAsync();

            return afectedRows > 0;
        }
    }
}