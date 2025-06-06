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