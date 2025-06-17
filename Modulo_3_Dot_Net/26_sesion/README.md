# Sesión 26: ASP.NET y C#

## Fecha: 17/06/2025

## Objetivos de la Sesión

- Construir API de Consulta de clima con Razor y TailWind

## Temas Cubiertos

1. **ASP.NET y C#**
   - TailWind CCS

## Ejercicios Realizados

### Ejercicio 1: Crear un API de Consulta de clima con Razor y TailWind

```csharp
using System.Net.Http.Json;
using Microsoft.Extensions.Configuration;

namespace SkyCast.Services;

public class WeatherService
{
    private readonly HttpClient _http;
    private readonly string _key;
    private const string baseURL = "https://openweathermap.org/data/2.5/";

    public WeatherService(HttpClient http, IConfiguration config)
    {
        _http = http;
        _key = config["OpenWeather.Key"] ?? "";
    }
    public async Task<WeatherDto?> GetByCityASync(string city)
    {
        var url = $"{baseURL}/weather?q={Uri.EscapeDataString(city)}&units=metric&appid={_key}&lang=es";
        return await _http.GetFromJsonAsync<WeatherDto>(url);
    }

}

using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using SkyCast;
using SkyCast.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped<WeatherService>();
builder.Services.AddHttpClient<WeatherService>();

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

var envKey = builder.Configuration["OpenWeather:Key"];

await builder.Build().RunAsync();


@page "/"
@using SkyCast.Services
@inject WeatherService Api

<h1 class="text-3x1 font-bold mb-4">Pronóstico</h1>

<div class="mb-4 flex gap-2">
    <input @bind="city"
            placeholder="Ciudad..."
            class="border rounded px-2 py-1 flex-1" />
    <button class="bg-blue-600 text-white px-4 rounded" @onclick="Search">
        Buscar
    </button>
</div>

@if (loading)
{
    <p>Cargando...</p>
}
else if (error != null)
{
    <p class="text-red-600">@error</p>
}
else if (data != null)
{
    <div class="p-6 rounded shadow bg-white max-w-sm">
        <h2 class="text-x1 font-semibold">@data.Name</h2>
        <p class="text 6x1">@data.Main.Temp.ToString("0") °C</p>
        <p class="capitalize">@data.Weather.First().Description</p>
        <p class="text-sm text-gray-500">Humedad: @data.Main.Humidity %</p>
    </div>
}

@code {
    string city = "Mexico City";
    bool loading;
    string? error;
    WeatherDto? data;


    async Task Search()
    {
        loading = true;
        error = null;
        try
        {
            data = await Api.GetByCityAsync(city);
            if (data == null) error = "Ciudad no encontrada";
        } 
        catch (Exception ex)
        {
            error = ex.Message;
        }
        loading = false;
    }

    protected override async Task OnInitializedAsync() => await Search();
}
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Uso de TailWind.

## Reflexiones Personales

Esta sesión me ayudó a como utilizar la libreria TailWind en un nuevo proyecto de C# junto con Razor.

---

*Entregable correspondiente a la Clase 26 del Módulo 3: ASP .NET y C#*