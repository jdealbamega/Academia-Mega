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