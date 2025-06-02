using Microsoft.AspNetCore.Mvc;
using PrimeraAPI.Models;
using PrimeraAPI.Data;

namespace PrimeraAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ProductosController : ControllerBase{
        //Aquí seria la lectura de datos en BD
        /*public static readonly List<Producto> _datos = new(){
            new Producto {id = 1, Nombre = "iPhone 16", Precio = 20000.0m},
            new Producto {id = 2, Nombre = "Galaxy S25 Edge", Precio = 20000.0m}
        };*/
        private readonly ProductoService _service;
        public ProductosController(ProductoService service)
        {
            _service = service;
        }

        /*
            - CREATE -
        */
        [HttpPost] //POST /api/productos
        public ActionResult<Producto> Create(Producto nuevo)
        {
            /*nuevo.id = _datos.Max(p => p.id) + 1;
            _datos.Add(nuevo);
            return CreatedAtAction(nameof(GetById), new { id = nuevo.id }, nuevo);*/
            return NoContent();
        }

        /*
            - READ -
        */

        [HttpGet] //GET /api/productos
        /*public ActionResult<IEnumerable<Producto>> GetAll(){
            return Ok(_datos);
        }*/
        public async Task<IActionResult> GetAll(){
            var lista = await _service.GetAllAsync();
            return Ok(lista);
        }

        [HttpGet("{id}")] //GET /api/productos/1
        public ActionResult<Producto> GetById(int id)
        {
            /*var product = _datos.FirstOrDefault(p => p.id == id);
            if(product == null) return NotFound();
            return Ok(product);*/
            
            return NoContent();
        }

        /*
            - UPDATE -
        */
        [HttpPut("{id}")] // PUT api/productos/1
        public IActionResult Update(int id, Producto actualizado)
        {
            /*var product = _datos.FirstOrDefault( product => product.id == id);
            if(product == null) return NotFound();

            product.Nombre = actualizado.Nombre;
            product.Precio = actualizado.Precio;

            return Ok("Se actualizó el producto correctamente");*/
            
            return NoContent();
        }

        /*
            - DELETE -
        */
        [HttpDelete("{id}")] // DELETE api/productos/1
        public IActionResult Delete(int id)
        {
            /*var product = _datos.FirstOrDefault( product => product.id == id);
            if(product == null) return NotFound();

            _datos.Remove(product);
            return Ok("El producto se ha eliminado correctamente");*/
            
            return NoContent();
        }
    }
}


//Model Producto
/*public class Producto{
    public int id { get; set; }
    public string Nombre { get; set; } = string.Empty;
    public decimal Precio { get; set; }
}*/