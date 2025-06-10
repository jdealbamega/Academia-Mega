# Sesión 11: ASP.NET y C#

## Fecha: 26/05/2025

## Objetivos de la Sesión

- Construir API de Login de usuario con HASH

## Temas Cubiertos

1. **ASP.NET y C#**
   - Construir API de Login de usuario con HASH

## Ejercicios Realizados

### Ejercicio 1: Crear un API de Login de usuario con HASH

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using PrimeraAPI.Data;
using System.IdentityModel.Tokens.Jwt;

namespace PrimeraAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly UsuarioService _usuarioService;
        private readonly IConfiguration _config;

        public AuthController(UsuarioService usuarioService, IConfiguration config)
        {
            _usuarioService = usuarioService;
            _config = config;
        }

        [HttpPost("registro")]
        public async Task<IActionResult> Register(UserLogin user)
        {
            var ok = await _usuarioService.RegistroAsync(user.Username, user.Password);
            if (!ok) return Conflict(new { message = "El usuario ya existe" });
            var token = GenerateToken(user.Username);
            return Ok(new { token });
        }

        [HttpPost("login")]

        public async Task<IActionResult> Login(UserLogin user)
        {
            var valid = await _usuarioService.ValidateCredentialsAsync(user.Username, user.Password);
            if (!valid) return Unauthorized(new { message = "Acceso no autorizado!!! Credenciales no válidas" });
            var token = GenerateToken(user.Username);
            return Ok(new { token });
        }

        private string GenerateToken(string username)
        {
            var key = Encoding.ASCII.GetBytes(_config["JwtKey"]!);
            var claims = new[] {
                new Claim(ClaimTypes.Name, username)
            };

            var credentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);

            var jwt = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.UtcNow.AddHours(2),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }

    }

    public class UserLogin
    {
        public string Username { get; set; } = "";
        public string Password { get; set; } = "";
    }

}
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Uso de HASH y JWT.

## Reflexiones Personales

Esta sesión me ayudó a como utilizar la libreria JWT para crear tokens de usuario y contraseña hasheada.

---

*Entregable correspondiente a la Clase 11 del Módulo 3: ASP .NET y C#*