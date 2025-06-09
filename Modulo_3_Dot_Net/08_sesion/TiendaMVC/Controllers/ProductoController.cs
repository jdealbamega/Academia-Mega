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

        //GET /Productos/Create
        public IActionResult Create() -> View();

        //POST /Productos/Create
        [HttpPost]
        [ValidaAntiForgeryToken]
        public async Task<IActionResult> Create(Producto producto)
        {
            
        }

        public IActionResult Details(int id)
        {
            return View(new Producto());
        }

        /*public IActionResult Details(int id)
        {
            var product = _productos.FirstOrDefault(p =>  p.Id == id);
            if (product == null)
                return NotFound();
            return View(product);
        }*/
    }
}